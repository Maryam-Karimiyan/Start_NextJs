import { comments } from "../../../data/comment";
export default function handler(req,res){
    const {commentId}=req.query
    if(req.method==='GET'){
       
        const comment=comments.find(com=>com.id===parseInt(commentId))
        res.status(200).json(comment);
    }
    else if(req.method==='DELETE'){
        
    }
    
}