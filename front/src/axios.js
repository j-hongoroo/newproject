import axios from "axios";

const instace = axios.create({
    baseURL:"http://localhost:3001"
});
instace.defaults.withCredentials=true;

export default instace