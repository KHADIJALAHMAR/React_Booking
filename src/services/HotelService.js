import axios from "axios";
const APP_URL = "http://localhost:4000/hotels";

export async function deleteHotel(HotelId) {
  await axios.delete(`${APP_URL}/delete`, {
      data :{
          HotelId
      }
  });
}

export async function updateHotel(HotelId, values) {
  await axios.put(`${APP_URL}/${HotelId}`, {
    data: {
      ...values,
    },
  });
}

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

// Get hotel by id
export async function getHotelById(HotelId) {
  let res = await axios.get(`${APP_URL}/${HotelId}`);
  return res;
}
