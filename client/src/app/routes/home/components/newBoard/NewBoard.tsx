import { useState } from "react"
import "./NewBoard.scss"
import PostData from "../../../../services/postData"
import InputText from "../../../../components/inputText/inputText"

const NewBoard = () => {
    const [boardName, setBoardName] = useState("")
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

    return (
        <div className="board-item">
            <InputText label="" name="newBoard" value={boardName} placeholder="Novo Quadro" onChange={handleSetName} />
            <button onClick={handleNewBoard}>Adicionar</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default NewBoard