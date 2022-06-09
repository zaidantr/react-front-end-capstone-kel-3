import { Axios } from "axios";
import adminData from "./dummy-data/admin.json";

let axios = new Axios({
  baseURL: "http://localhost:8080", //TODO: ganti nanti
});

const API = {
  getAdminData: async () => {
    try {
      const data = await axios.get("/admin");
      const adminData = data.data;
      return adminData;
    } catch (e) {
      console.error(e);
    }
  },
};

const DummyAPI = {
  getAdminData: async () => {
    return new Promise((res) => res(adminData));
  },
};

const getAPI = (isDummyData) => {
  if (!isDummyData) {
    return API;
  } else {
    return DummyAPI;
  }
};

export default getAPI;
