import axios from "axios";
const ROOMS_URL = "http://localhost:4000/rooms"; 
const OWNER_URL = "http://localhost:4000/owners"; 

export async function getRoomsGroups() {
    return await axios.get(`${ROOMS_URL}`);
}

export async function getRoomTypes() {
    return await axios.get(`${ROOMS_URL}/roomtype`);
}

export function createRoomGroup(roomGroup) {
    const formData = new FormData();
    formData.append('description', roomGroup.description)
    formData.append('room_quantity', roomGroup.room_quantity)
    formData.append('price', roomGroup.price)
    formData.append('hotel_id', roomGroup.hotel_id)
    formData.append('room_type_id', roomGroup.room_type_id)
    axios.post(`${OWNER_URL}/room`, formData);
  }