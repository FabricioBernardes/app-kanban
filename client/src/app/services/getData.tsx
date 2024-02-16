import axios from "axios";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

const GetData = (endpoint: string) => {
    return (
        axios.get(`${BASE_URL}/${endpoint}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error)
                return error
            })
    )
}

export default GetData