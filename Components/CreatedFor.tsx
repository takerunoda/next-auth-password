const CreatedFor = () => {
const url = process.env.NEXT_PUBLIC_BLOG_URL
const author = process.env.NEXT_PUBLIC_MY_NAME
    return (
        <div className="text-center w-72 mx-auto text-xs mt-8">
            <p>
                This project was created for <a href={url} className="text-blue-500 hover:underline cursor-pointer" target="_blank" rel="noreferrer">a blog post</a>
            </p>
            <p>
                {`written by ${author}`}                
            </p>
        </div>
      
    )
}

export default CreatedFor