import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3010',
    headers:{
        'x-access-token': localStorage.getItem("TOKEN")
    }
})

export default api;