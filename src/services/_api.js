import axios from "axios";

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
  baseURL: "https://medical-egorrridze.amvera.io/",
});
const _api = () => {
  return instance;
};
export default _api;
export { instance };
