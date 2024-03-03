import PostData from "../../../services/postData"
import { useState } from "react";

import "./CreateCard.scss"

interface CreateCardProps {
    listId: string;
    position: number;
    onCardCreate: (cardId: string) => void;
}

const CreateCard = ({ listId, position, onCardCreate }: CreateCardProps) => {
    const [cardTitle, setCardTitle] = useState("");
    const [error, setError] = useState("");

    const createCardHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataCard = {
            title: cardTitle,
            description: "",
            position: position,
        }

        if (!cardTitle) {
            setError("O título da card não pode ser vazio");

            setTimeout(() => {
                setError("");
            }, 3000);
            return
        }

        const data = await PostData(`lists/${listId}/cards`, dataCard);
        onCardCreate(data.id);
        setCardTitle("");
    }

    return (
        <div className="create-card">
            <form onSubmit={createCardHandle}>
                <input
                    className="input"
                    id="card-title"
                    type="text"
                    placeholder="Insira o título do novo card..."
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                />
                <button
                    className="button-default"
                    type="submit"
                >
                    Adicionar card
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default CreateCard