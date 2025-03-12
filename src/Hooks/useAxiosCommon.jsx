import axios from "axios";
const axiosCommon = axios.create({
  baseURL: import.meta.env.VITE_URL,
});
const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
// env.file   VITE_URL=http://localhost:3000
