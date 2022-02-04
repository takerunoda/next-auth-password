
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isCorrectCredentials = (credentials: any) =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD;

const options = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            if (isCorrectCredentials(credentials)) {
              const user = { id: 1, name: "admin" }
              // Any object returned will be saved in `user` property of the JWT
              return user
              // return Promise.resolve(user);
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
              // return Promise.resolve(null);              
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
            }
          }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET // SECRET env variable 
};

const NextAuthFn = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export default NextAuthFn