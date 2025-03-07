import axios from "axios";

const axiosCommon = axios.create({
  baseURL: import.meta.VITE_URL,
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
