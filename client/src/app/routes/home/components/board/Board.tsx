import { Link } from "react-router-dom"
import { useState } from "react"
import { MoreVertical, ArrowLeft } from "react-feather"
import DeleteData from "../../../../services/deleteData"
import UpdateData from "../../../../services/updateData"
import BoardSummary from "../../../../interfaces/BoardSummary";
import "./Board.scss"

const Board = ({ board, fetchBoards }: { board: BoardSummary, fetchBoards: () => void }) => {
    const [optionsOpen, setOptionsOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [newBoardName, setNewBoardName] = useState(board.title);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState('');

    const handleDeleteBoard = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            await DeleteData(`boards/${board.id}`)
            fetchBoards();
        } catch (error) {
            setError('Erro ao excluir o quadro');
        }
    }

    const handleUpdateLBoard = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSaving(true);

        try {
            await UpdateData(`boards/${board.id}`, { title: newBoardName });
            setEditOpen(false);
            fetchBoards();
        } catch {
            setError('Erro ao alterar o nome do quadro');
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className="board-item">

            {editOpen ? (
                <form
                    className="edit-boardname"
                    onSubmit={handleUpdateLBoard}
                >
                    <input
                        className="input"
                        type="text"
                        value={newBoardName}
                        onChange={e => setNewBoardName(e.target.value)}
                    />
                    <button className={
                        `button-default ${isSaving ? '-sending' : ''}`
                    }>
                        {isSaving ? 'Salvando...' : 'Salvar'}
                    </button>
                </form>
            ) : (
                <Link className="board-link" to={`/board/${board.id}`}>
                    {board.title}
                </Link>
            )}

            <div className="options-wrapper">
                <MoreVertical
                    className="option-icon"
                    onClick={() => setOptionsOpen(!optionsOpen)}
                />
                <div className={`board-options ${optionsOpen ? "-show" : ""}`}>
                    <button onClick={() => (
                        setEditOpen(!editOpen),
                        setOptionsOpen(false)
                    )}
                    >Editar nome do quadro</button>
                    <button onClick={handleDeleteBoard}>Excluir quadro</button>
                </div>
            </div>
        </div>
    )
}

export default Board