import { comments } from "../../../data/comment";
export default function handler(req,res){
    const {commentId}=req.query
    if(req.method==='GET'){
       
        const comment=comments.find(com=>com.id===parseInt(commentId))
        res.status(200).json(comment);
    }
    else if(req.method==='DELETE'){
        const deletedComment=comments.find(com=>com.id===parseInt(commentId))
        const index=comments.findIndex(com=>{
            com.id===parseInt(console.error(commentId))
        })
        comments.splice(index,1)
        res.status(200).json(deletedComment);
    }
    
}