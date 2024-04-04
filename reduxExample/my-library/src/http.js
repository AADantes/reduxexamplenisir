import axios from "axios"

export default axios.create({

baseURL:"http://localhost/react-laravel-trial/ADGPUAlliance-app/public/api/",
headers: {
    "Content-type": "application/json"
}

}) 
