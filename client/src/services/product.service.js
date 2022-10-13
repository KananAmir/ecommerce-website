import axios from 'axios';

let baseUrl = `http://localhost:8080/product`;

export const getProducts = async () => {
    try {
        let response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProduct = async (data) => {
    try {
        console.log(data);
        await axios.post(baseUrl, data)
    } catch (error) {
        throw error;
    }
}
export const editProduct = async (id, data) => {
    try {
        console.log(data);
        await axios.put(`${baseUrl}/${id}`, data)
    } catch (error) {
        throw error;
    }
}

export const getProductsDetail = async (id) => {
    try {
        let response = await axios.get(`${baseUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        throw error;
    }
}

