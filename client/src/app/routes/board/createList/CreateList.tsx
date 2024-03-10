import PostData from "../../../services/postData"
import { useState } from "react";

import "./CreateList.scss"

interface CreateListProps {
    boardId: string;
    onListCreate: () => void;
}

const CreateList = ({ boardId, onListCreate }: CreateListProps) => {
    const [listTitle, setListTitle] = useState("");
    const [error, setError] = useState("");

    const createListHandle = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataList = {
            title: listTitle,
            boardId: boardId
        }

        if (!listTitle) {
            setError("O título da lista não pode ser vazio");

            setTimeout(() => {
                setError("");
            }, 3000);
            return
        }

        try {
            await PostData(`boards/${boardId}/lists`, dataList);
            onListCreate();
            setListTitle("");
        } catch {
            setError("Erro ao criar lista");
        }
    }

    return (
        <div className="create-list">
            <form onSubmit={createListHandle}>
                <input
                    className="input"
                    id="list-title"
                    type="text"
                    placeholder="Insira o título da lista..."
                    value={listTitle}
                    onChange={(e) => setListTitle(e.target.value)}
                />
                <button
                    className="button-default"
                    type="submit"
                >
                    Adicionar lista
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default CreateList