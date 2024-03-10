import { useState } from "react";
import PostData from "../../../services/postData";
import "./CreateComment.scss"

const CreateComment = ({cardId, updateCard}:{cardId: string, updateCard: () => void}) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("")

    const createCommentHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataComment = {
            content: comment,
            cardId: cardId
        }
        
        if (!comment){
            setError("O comentário não pode ser vazio");

            setTimeout(() => {
                setError("");
            }, 3000);
            return
        }
        
        try{
            await PostData(`cards/${cardId}/comments`, dataComment);
            updateCard()
            setComment("");
        }catch{
            setError("Erro ao criar comentário");
        }
    }

    return (
        <div className="create-comment">

            <form onSubmit={createCommentHandle}>
                <textarea
                    className="form-textarea"
                    placeholder="Adicione um comentário"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="button-default">Criar comentário</button>
            </form>
            {error && <p className="error">{error}</p>}

        </div>
    )
}

export default CreateComment