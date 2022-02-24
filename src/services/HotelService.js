import axios from "axios";
const APP_URL = "http://localhost:4000/hotels"; 

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

