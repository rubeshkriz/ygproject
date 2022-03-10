import axios from 'axios';

const usersUrl = "http://localhost:3008";
export const getSalesQuotation = async () => {
    return await axios.get(`${usersUrl}/api/salesQuotation/view/3`);
}

export const getSalesOrder = async () => {
    return await axios.get(`${usersUrl}/api/saleOrder/view/1C03U`);
}
export const getSalesInvoice = async (clientToken,clientEmpId) => {
    return await axios.get(`${usersUrl}/api/salesInvoice/view/${clientToken}/${clientEmpId}`);
}
export const customerOutsanding = async () => {
    return await axios.get(`${usersUrl}/api/customerOutstanding/view/3`);
}
export const penaltyDetails = async () => {
    return await axios.get(`${usersUrl}/api/penaltyDetails/view/3`);
}
export const CourierDetails = async () => {
    return await axios.get(`${usersUrl}/api/CourierDetails/view/1C03U`);
}
export const Distributor = async () => {
    return await axios.get(`${usersUrl}/api/Distributor/view/1C03U`);
}
export const stockReport = async () => {
    return await axios.get(`${usersUrl}/api/stockReport/view/3`);
}
export const backLogReport = async () => {
    return await axios.get(`${usersUrl}/api/backlogReport/view/1C03U`);
}
export const addPO = async (po) => {
    return await axios.post(`${usersUrl}/api/PurchaseOrder/view/id=1D08U`, po);
}
export const addADR = async (po) => {
    return await axios.post(`${usersUrl}/api/ADR/view/id=1D08U`, po);
}
export const addCustomerComplint = async (po) => {
    return await axios.post(`${usersUrl}/api/CustomerComplaint/view/id=1D08U`, po);
}
export const addLogin = async (po) => {
    return await axios.post(`${usersUrl}/api/login`, po);
}

export const poItemData = async () => {
    return await axios.get(`${usersUrl}/api/Item/view/id=1D08U`,);
}


// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }