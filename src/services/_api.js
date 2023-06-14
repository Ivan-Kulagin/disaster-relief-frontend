import axios from "axios";
axios.defaults.baseURL = "https://medical-egorrridze.amvera.io/";
const instance = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
const _api = () => {
  return instance;
};
export default _api;
export { instance };
