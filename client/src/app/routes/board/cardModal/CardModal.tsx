import { useState } from "react"
import Markdown from 'markdown-to-jsx'
import UpdateData from "../../../services/updateData"
import Card from "../../../interfaces/Card"
import "./CardModal.scss"
import CreateComment from "../createComment/CreateComment"
import Comment from "../comment/Comment"

type dataModels = {
    card: Card,
    closeCard: React.Dispatch<React.SetStateAction<boolean>>, 
    updateCard: () => void
}

const CardModal = ({ card, closeCard, updateCard }: dataModels) => {
    const [description, setDescription] = useState(card.description)
    const [error, setError] = useState('')
    const [isSaving, setIsSaving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditdescription = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const data = {
            title: card.title,
            description,
            position: card.position
        }

        setIsSaving(true);
        try{
            await UpdateData(`cards/${card.id}`, data);
            updateCard();
            setIsEditing(false);
        }catch{
            setError('Erro ao salvar descrição');
        }finally{
            setIsSaving(false);
        }
    }

    return (
        <div className="card-modal">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-title">{card.title}</div>
                    <div className="modal-close" onClick={() => closeCard(false)}>X</div>
                </div>
                <div className="modal-body">

                    <div className="description-wrapper">
                        <form
                            className={`edit-description ${isEditing ? "" : "-hidden"}`}
                            onSubmit={ handleEditdescription }>
                            <textarea
                                className="form-textarea"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <button
                                className={`button-default ${isSaving ? '-sending' : ''}`}>
                                Salvar
                            </button>

                            {error && <div className="error">{error}</div>}
                        </form>

                        <div
                            className={`description-text ${isEditing ? "-hidden" : ""}`}
                        >
                            <Markdown>{card.description && card.description}</Markdown>
                            <button
                                className="button-default"
                                onClick={() => setIsEditing(true)}
                            >
                                Editar
                            </button>
                        </div>
                    </div>

                    <div className="comments-wrapper">
                        <h3 className="comments-title">Comentários</h3>

                        {card.comments.length > 0 ? (
                            card.comments.map(comment => (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    updateCard={updateCard}
                                />
                            ))
                        ): (
                            <div className="empty-comments">Sem comentários</div>
                        )}

                        <CreateComment cardId={card.id} updateCard={updateCard} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardModal