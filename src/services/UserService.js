import axios from "axios";
const APP_URL = "http://localhost:4000/admin"; 

export async function updateUser(userId, values) {
    await axios.put(`${APP_URL}/owner/update/${userId}`, {
        data: {
            ...values
        }
    });
}

export async function deleteUser(userId) {
    await axios.delete(`${APP_URL}/owner/delete`, {
        data: {
            userId
        }
    });
}

export async function getUserById(userId) {
    let res = await axios.get(`${APP_URL}/user/${userId}`);
    return res;
}

export async function getOwners() {
   return await axios.get(`${APP_URL}/owners`)
}