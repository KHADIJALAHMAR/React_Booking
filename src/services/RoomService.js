import axios from "axios";
const APP_URL = "http://localhost:4000/rooms"; 

export async function deleteRoom(id) {
    await axios.delete(`${APP_URL}/room/:roomId`, {
        id
    });
}