import https from "./http-common";

const fetchOnlineClass = () => {
    return https.get("/class/online");
    }

    const getOnlineClassById = (id) => {
        return https.get(`/class/online/${id}`);
    }
    const AddOnlineClass = (classData) => {
        return https.post("/class/online", classData);
    }

    // Booking
    const GetBookingOnline = () => {
        return https.get('/booking')
    }

const OnlineClassServices = {fetchOnlineClass, getOnlineClassById, AddOnlineClass, GetBookingOnline}
export default OnlineClassServices 