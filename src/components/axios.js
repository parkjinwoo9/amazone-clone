import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/e-clone-94b0e/us-central1/api'
});

export default instance;