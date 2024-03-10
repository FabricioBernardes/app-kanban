import axios from "axios";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const DeleteData = (endpoint: string) => {
    return (
        axios.delete(`${BASE_URL}/${endpoint}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
                return error
            })
    )
}

export default DeleteData