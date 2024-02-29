import { useState } from "react"
import "./NewBoard.scss"
import PostData from "../../../../services/postData"
import InputText from "../../../../components/inputText/inputText"

const NewBoard = () => {
    const [boardName, setBoardName] = useState("")
    const [showPopup, setShowPopup] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setBoardName(event.target.value)
    }

    const handleNewBoard = async () => {
        const data = {
            title: boardName
        }
        if (boardName === "") {
            setError("O nome do quadro não pode ser vazio")

            setTimeout(() => {
                setError("")
            }, 3000)
            return
        }
        await PostData('boards', data)
    }

    const handleOpenPopupNewBoard = () => {
        setShowPopup(true)
    }

    const handleClosePopupNewBoard = () => {
        setShowPopup(false)
    }

    return (
        <>
            <button className="button-default -open-create-board" onClick={handleOpenPopupNewBoard}>Adicionar quadro</button>

            {showPopup && (
            <div className="new-board-popup">
                <span className="close-popup" onClick={handleClosePopupNewBoard}>X</span>
                <h3>Novo Quadro</h3>
                <InputText label="" name="newBoard" value={boardName} placeholder="Novo Quadro" onChange={handleSetName} />
                <button className="button-default" onClick={handleNewBoard}>Adicionar</button>
                {error && <p>{error}</p>}
            </div>
            )}
        </>
    )
}

export default NewBoard