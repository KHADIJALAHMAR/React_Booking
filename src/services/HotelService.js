import axios from "axios";
const APP_URL = "http://localhost:4000/hotels"; 

export async function deleteHotel(id) {
    await axios.delete(`${APP_URL}/delete`, {
        id
    });
}

const create_hotel = async (
    name,
    descreption,
    image_cover, 
    images,
    stars
) => {
    return await axios.post(`${APP_URL}`, {
        name,
        descreption,
        image_cover, 
        images,
        stars
    });
};
export default create_hotel;

