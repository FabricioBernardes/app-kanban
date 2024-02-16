import axios from "axios";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const PostData = (endpoint: string, data: object) => {
    return (
        axios.post(`${BASE_URL}/${endpoint}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return error
        })
    )
}

export default PostData