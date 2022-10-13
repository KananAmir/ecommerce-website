import axios from 'axios';

let baseUrl = `http://localhost:8080/user`;

export const getUsers = async () => {
    try {
        let response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const addUser = async (data) => {
    try {
        await axios.post(baseUrl, data)
    } catch (error) {
        throw error;
    }
}
export const editUser = async (id, data) => {
    try {
        await axios.put(`${baseUrl}/${id}`, data)
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        throw error;
    }
}

