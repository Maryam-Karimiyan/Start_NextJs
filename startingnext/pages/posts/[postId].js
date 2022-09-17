export default function Post({post}){
return(
    <>
    <h2>{post.id}  {post.title}</h2>
    <p>{post.body}</p>
    </>
)
}




//we have an error for getting the id of params so we must use getStaticPath to know that
//the return must have a path key . key determines which path will be staticlly genarated at build time.
//key is an array of object an each obj contains a params key==>it is the routes parameters with its value


//Setting fallback to True is so important! and useful

// export async function getStaticPaths(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
    
//     const paths=data.map(post=>{
//         return{
//             params:{
//                 postId:`${post.id}`
//             }
//         }
//     })
//     return {
//         // paths:[
//         //     {
//         //         params:{postId:'1'},
//         //     },
//         //     {
//         //         params:{postId:'2'},
//         //     },
//         //     {
//         //         params:{postId:'3'},
//         //     }
//         // ],
//         paths,
//         fallback:false,
//     }
// }

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    const paths=data.map(post=>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return {
        // paths:[
        //     {
        //         params:{postId:'1'},
        //     },
        //     {
        //         params:{postId:'2'},
        //     },
        //     {
        //         params:{postId:'3'},
        //     }
        // ],
        paths,
        fallback:false,
    }
}

//context contains a key called params and params has the post id
export async function getStaticProps(context) {
    const {params}=context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            //just getting the first 3 posts
            post: data
        }
    }
}
