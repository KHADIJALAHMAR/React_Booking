import axios from "axios";
const APP_URL = "http://localhost:4000/rooms"; 

export async function deleteHotel(id) {
    await axios.delete(`${APP_URL}/room/:roomId`, {
        id
    });
}