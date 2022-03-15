import axios from "axios";
const APP_URL = "http://localhost:4000/hotels";

export async function deleteHotel(HotelId) {
  await axios.delete(`${APP_URL}/delete`, {
      data :{
          HotelId
      }
  });
}
export async function updateHotel(hotelId, values) {
  await axios.put(`${APP_URL}/update/${hotelId}`, {
      data: {
          ...values
        }
  });
}


export async function getHotelById(HotelId) {
    let res = await axios.get(`${APP_URL}/hotels/${HotelId}`);
    return res;
}

// export const Updatehotel = async (
//     name,
//     descreption,
//     image_cover,
//     images,
//     stars
// ) => {
//     return await axios.put(`${APP_URL}/update`, {
//         name,
//         descreption,
//         image_cover,
//         images,
//         stars
//     });
// };
// export default Updatehotel;

axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: window.localStorage.getItem("token") ?? "",
};

export function createhotel(hotel) {
  console.log("createhotel : ", hotel.image_cover);

  const formData = new FormData();

  formData.append(
    "hotel-image",
    hotel.image_cover,
    hotel.images,
    hotel.image_cover.name
  );

  for (let i = 0; i < hotel.images.length; i++) {
    formData.append("image", hotel.images[i]);
  }

  formData.append("name", hotel.name);
  formData.append("description", hotel.descreption);
  formData.append("star", hotel.stars);

  console.log(formData);

  return axios.post(APP_URL, formData);
}

export default createhotel;
