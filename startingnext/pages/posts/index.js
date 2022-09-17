import Link from 'next/link'

export default function PostList({ posts }) {
    return (
        <>
            <h1>List Of Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}><a><h2>{post.id}  {post.title}</h2></a></Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}


//for pre-rendering json we should use getstaticprops not the hooks like useeffect

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            //just getting the first 3 posts by .slice(0,3)
            posts: data
        }
    }
}