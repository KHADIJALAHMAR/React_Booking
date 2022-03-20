import axios from "axios";
const APP_URL = "http://localhost:4000/rooms"; 

export async function getRoomsGroups() {
    return await axios.get(`${APP_URL}`);
}