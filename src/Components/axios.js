import axios from "axios";
const instance = axios.create({
  //the API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/clone-tsehay/us-central1/api",
});
export default instance;
