import axios from "axios";
const APP_URL = "http://localhost:4000/hotels"; 

export async function deleteHotel(id) {
    await axios.delete(`${APP_URL}/delete`, {
        id
    });
}

export const Updatehotel = async (
    name,
    descreption,
    image_cover, 
    images,
    stars
) => {
    return await axios.put(`${APP_URL}/update`, {
        name,
        descreption,
        image_cover, 
        images,
        stars
    });
};
// export default Updatehotel;


axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: window.localStorage.getItem("token") ?? ''
}

export function createhotel(hotel) {
    console.log("createhotel : ", hotel.image_cover);

    const formData = new FormData();

    formData.append("hotel-image", hotel.image_cover, hotel.image_cover.name);

    // for (let i = 0; i <  hotel.images.length; i++) {
    // formData.append("image["+ i +"]",  hotel.images[i],  hotel.images[i].name);
    // }

    formData.append("name", hotel.name);
    formData.append("description", hotel.descreption);
    formData.append("star", hotel.stars);

    console.log(formData);

    return axios.post(APP_URL , formData);
}

export default createhotel;
