import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import CreatedFor from '../Components/CreatedFor'

const Home: NextPage = () => {
  //Next-Auth
        const { data: session, status } = useSession()
        const loading = status === "loading"
        if (loading) {
            return <p>Loading...</p>;
        }
        const handleSignIn = () => {
            signIn()
        }
        const handleSignOut = () => {
            signOut()
        }

  return (
    <div className={styles.container}>
            <div className="mt-5 text-center">
              {!session && (
                  <>
                  Not signed in <br />
                  <button className ="mt-3 bg-blue-500 hover:bg-blue-400 text-white w-20 p-2 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={handleSignIn}>Sign in</button>
                  <CreatedFor />
                  </>
              )}
              {session && (
                  <>
                  Signed in as {session.user && session.user.name} <br />
                  <button className ="mt-3 bg-green-500 hover:bg-green-400 text-white w-20 p-2 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={handleSignOut}>Sign out</button>
                  <CreatedFor />
                  </>
              )}
            </div>
      {session && <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </>}
    </div>
  )
}

export default Home
