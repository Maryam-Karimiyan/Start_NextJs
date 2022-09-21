import { comments } from "../../data/comment"
export default function Comment({comment}){
    return(
        <div>
            {comment.id} - {comment.text}
        </div>
    )
}
export async function getStaticPaths() {
    // const {params}=context
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    // const data = await response.json()
     return {
        paths: [
           {params:{commentId:'1'}},
           {params:{commentId:'2'}},
           {params:{commentId:'3'}},
        ]
        ,fallback:false
    }
}
export async function getStaticProps(constex){
    //Dont use fetch here or swr or ... for pre rendring its not proper both ssg and ssr
    const {params}=constex
    const {commentId}=params
    const comment=comments.find(com=>com.id===parseInt(commentId))
    return{
        props:{
            comment
        }
    }
}