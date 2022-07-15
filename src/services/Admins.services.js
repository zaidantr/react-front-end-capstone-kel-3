import https from "./http-common";

const fetchAdmin = () => {
    return https.get("/users/admin");
    }

    const getAdminById = (id) => {
        return https.get(`/users/admin/${id}`);
    }

    const deleteAdminById = (id) => {
        return https.delete(`/users/${id}`);
    }

    const updateAdminById = (id, data) => {
        return https.put(`/users/admin/${id}`, data);
    }

    const addAdmin = (data) => {
        return https.post("/users/register/admin", data);
    }

    


const AdminServices = {fetchAdmin, getAdminById, deleteAdminById, updateAdminById, addAdmin}
export default AdminServices