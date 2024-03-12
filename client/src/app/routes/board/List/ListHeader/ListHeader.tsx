import { useState } from "react"
import { MoreVertical, ArrowLeft } from "react-feather"
import DeleteData from "../../../../services/deleteData"
import UpdateData from "../../../../services/updateData"
import List from '../../../../interfaces/List'
import "./ListHeader.scss"

const ListHeader = ({ list, onCardCreate }: { list: List, onCardCreate: () => void }) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [newListName, setNewListName] = useState(list.title);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const handleDeleteList = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await DeleteData(`lists/${list.id}`)
            onCardCreate()
        } catch (error) {
            setError('Erro ao excluir a lista');
        }
    }

    const handleUpdateList = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSaving(true);

        try {
            await UpdateData(`lists/${list.id}`, { title: newListName });
            setEditOpen(false);
            onCardCreate();
        } catch {
            setError('Erro ao alterar o nome da lista');
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className="list-head">

            {editOpen ? (
                <form
                    className="edit-listname"
                    onSubmit={handleUpdateList}
                >
                    <button className={
                        `btn-save ${isSaving ? '-sending' : ''}`
                    }>
                        <ArrowLeft />
                    </button>
                    <input
                        className="input"
                        type="text"
                        value={newListName}
                        onChange={e => setNewListName(e.target.value)}
                    />
                </form>
            ) : (
                <h2 className="list-title">{list.title}</h2>
            )}

            <div className="options-wrapper">
                <MoreVertical
                    className="option-icon"
                    onClick={() => setOptionsOpen(!optionsOpen)}
                />
                <div className={`list-options ${optionsOpen ? "-show" : ""}`}>
                    <button onClick={() => (
                        setEditOpen(!editOpen),
                        setOptionsOpen(false)
                        )}
                    >Editar nome da lista</button>
                    <button onClick={handleDeleteList}>Excluir lista</button>
                </div>
            </div>
        </div>
    )
}

export default ListHeader