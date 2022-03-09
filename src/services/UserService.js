import axios from "axios";
const APP_URL = "http://localhost:4000/admin"; 

export async function deleteUser(userId) {
    await axios.delete(`${APP_URL}/owner/delete`, {
        data: {
            userId
        }
    });
}
