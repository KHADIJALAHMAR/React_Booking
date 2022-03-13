import axios from "axios";
const APP_URL = "http://localhost:4000/owners"; 

export default async function deleteRoom(roomId) {
    await axios.delete(`${APP_URL}/room`, {
        data :{
            roomId,
        }
    });
}
