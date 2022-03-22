import axios from "axios";
const Hotels_URL = "http://localhost:4000/hotels";
const Owners_URL = "http://localhost:4000/owners";


// Delete Hotel 
export async function deleteHotel(HotelId) {
  await axios.delete(`${Hotels_URL}/delete`, {
      data :{
          HotelId
      }
  });
}
export async function updateHotel(hotelId, values) {
  await axios.put(`${Hotels_URL}/update/${hotelId}`, {
      data: {
          ...values
        }
  });
}

export async function getHotelsByOwner(userId) {
    let res = await axios.get(`${Owners_URL}/${userId}/hotels`);
    return res;
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

  return axios.post(Hotels_URL, formData);
}

export default createhotel;

// Get hotel by id
export async function getHotelById(HotelId) {
  let res = await axios.get(`${Hotels_URL}/${HotelId}`);
  return res;
}
