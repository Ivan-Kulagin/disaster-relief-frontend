import axios from "axios";

const instance = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
  // baseURL: process.env.VUE_APP_SERVER_URL,
});
const _api = () => {
  return instance;
};
export default _api;
export { instance };
