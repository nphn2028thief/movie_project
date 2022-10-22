import axios from 'axios';
import apiConfig from '~/api/apiConfig';

const httpRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});

const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export { httpRequest, get };
