import https from "./http-common";

const fetchOfflineClass = () => {
    return https.get("/class/offline");
    }

    const getOfflineClassById = (id) => {
        return https.get(`/class/offline/${id}`);
    }

const OfflineClassServices = {fetchOfflineClass, getOfflineClassById}
export default OfflineClassServices 