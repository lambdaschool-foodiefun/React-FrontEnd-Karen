import Axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return Axios.create({
    headers: { authorization: token }
  });
};
export default axiosWithAuth;
