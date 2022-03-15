import axios from "axios";
const APP_URL = "http://localhost:4000/owners"; 

export default async function deleteRoom(roomId) {
    await axios.delete(`${APP_URL}/room`, {
        data :{
            roomId,
        }
    });
}
export async function updateRoom(roomId, values) {
    await axios.put(`${APP_URL}/room/${roomId}`, {
        data: {
            ...values
        }
    });
}
export async function getRoomById(roomId) {
    let getOneRoom = await axios.get(`${APP_URL}/room/${roomId}`);
    return getOneRoom;
}
