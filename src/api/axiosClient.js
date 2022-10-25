import axios from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    // paramsSerializer: (params) => qs.stringify({ ...params, api_key: apiConfig.apiKey }),
    // params: {
    //     api_key: apiConfig.apiKey,
    // },
});

axiosClient.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = apiConfig.apiKey;
    // config.params['language'] = 'vi';

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
