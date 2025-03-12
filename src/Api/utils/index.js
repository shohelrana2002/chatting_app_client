import axios from "axios";
// image upload imageBB
export const imageUpload = async (image) => {
  const formData = new FormData(); // convert to image  =======>> new FormData () Html Attribute
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_BB_API_KEY
    }`,
    formData
  );
  console.log(data?.data?.display_url);
  return data?.data?.display_url;
};
