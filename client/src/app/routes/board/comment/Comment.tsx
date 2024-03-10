import { useState } from "react"
import Markdown from "markdown-to-jsx"
import UpdateData from "../../../services/updateData"
import Comment from "../../../interfaces/Comment"
import "./Comment.scss"

const Comment = ({ comment, updateCard }: { comment: Comment, updateCard: () => void }) => {
    const [commentEdited, setCommentEdited] = useState(comment.content)
    const [error, setError] = useState('')
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsSaving(true);
        try {
            await UpdateData(`comments/${comment.id}`, { content: commentEdited });
            setIsEditing(false);
            updateCard();
        } catch {
            setError('Erro ao salvar comentário');
        } finally {
            setIsSaving(false);
        }
    }

    
    const setCloseEditDescription = () => {
        setCommentEdited(comment.content);
        setIsEditing(false);
    }

    return (
        <div className="comment-wrapper">
            <div className={`comment-content ${isEditing ? "-hidden" : ""}`}>
                <Markdown>
                    {comment.content}
                </Markdown>
                <button
                    className="button-default"
                    onClick={() => setIsEditing(true)}
                >
                    Editar
                </button>
            </div>

            <form
                className={`comment-edit ${isEditing ? "" : "-hidden"}`}
                onSubmit={handleComment}>
                <textarea
                    className="form-textarea"
                    value={commentEdited}
                    onChange={e => setCommentEdited(e.target.value)}
                />
                <button
                    className={`button-default ${isSaving ? '-sending' : ''}`}
                >
                    Salvar
                </button>

                <button
                    className="button-default"
                    onClick={setCloseEditDescription}
                >
                    Cancelar
                </button>

                {error && <div className="error">{error}</div>}
            </form>

        </div>
    )
}

export default Comment