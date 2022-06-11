import { Axios } from "axios";
import adminData from "./dummy-data/admin.json";
import offlineClassData from "./dummy-data/offlineClass.json";
import onlineClassData from "./dummy-data/onlineClass.json";

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

  getOfflineClassData: async () => {
    try {
      const data = await axios.get("/offlineClass");
      const offlineClassData = data.data;
      return adminData;
    } catch (e) {
      console.error(e);
    }
  },

  getOnlineClassData: async () => {
    try {
      const data = await axios.get("/onlineClass");
      const onlineClassData = data.data;
      return adminData;
    } catch (e) {
      console.error(e);
    }
  }
};

const DummyAPI = {
  getAdminData: async () => {
    return new Promise((res) => res(adminData));
  },
  getOfflineClassData: async () => {
    return new Promise((res) => res(offlineClassData));
  },
  getOnlineClassData: async () => {
    return new Promise((res) => res(onlineClassData));
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
