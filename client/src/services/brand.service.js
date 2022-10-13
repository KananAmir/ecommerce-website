import axios from 'axios';

let baseUrl = `http://localhost:8080/brand`;

export const getBrands = async () => {
    try {
        let response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const addBrand = async (data) => {
    try {
        await axios.post(baseUrl, data)
    } catch (error) {
        throw error;
    }
}
export const editBrand = async (id, data) => {
    try {
        await axios.put(`${baseUrl}/${id}`, data)
    } catch (error) {
        throw error;
    }
}

export const deleteBrand = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        throw error;
    }
}

