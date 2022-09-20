import {useState} from 'react'
export default function CommentsPage(){
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState('')
    const fetchComments=async()=>{
        const response=await fetch('./api/comments')
        const data=await response.json()
        setComments(data)
    }
    const submitComment=async()=>{
        const response=await fetch('./api/comments',{
            method:'POST',
            body:JSON.stringify({comment:comment}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        console.log(data);
    }
    const deleteComment=async(comId)=>{
        const response=await fetch(`./api/comments/${comId}`,{
            method:'DELETE'
        })
        const data=await response.json()
        fetchComments()
       
    }
    return(
        <>
        <input type='text' onChange={(e=>setComment(e.target.value))}/>
        <button onClick={submitComment} type='submit'>Add Comment</button>
        <button onClick={fetchComments}>LoadComments</button>
        {
            comments.map(com=>{
                return(
                    <div key={com.id}>
                        {com.id} - {com.text}
                        <button onClick={()=>deleteComment(com.id)}>Delete</button>
                    </div>
                )
            })
        }
        
        </>
    )
}