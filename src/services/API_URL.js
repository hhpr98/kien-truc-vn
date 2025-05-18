import appConfig from '../configs/appConfig.json';

const API_URL = appConfig['isDev']
    ? 'http://localhost:3000/api'
    : 'https://apdesignarch.vn/api';

export default API_URL;