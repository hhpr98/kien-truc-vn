import axios from 'axios';
import API_URL from './API_URL';

// Service to upload file
export const uploadFile = async (formData) => {
    const response = await axios.post(
        `${API_URL}/upload`,
        formData,
        {
            headers: { "Content-Type": "multipart/form-data" },
        }
    );
    return response.data;
};

// Service to complete upload with filename and folder
export const completeUpload = async (filename, folder) => {
    const response = await axios.post(
        `${API_URL}/upload/complete`,
        { filename, folder }
    );
    return response.data;
};