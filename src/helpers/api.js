import axios from "axios";

const {
    REACT_APP_API_KEY: apiKey, 
    REACT_APP_API_BASE_URL: baseURL
} = process.env;

const headers = { 
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json; charset=UTF-8',
};

const api = axios.create({ baseURL, headers, });

export const fetchShops = async () => {
    const { data } = await api.get('/stores');
    return data.response;
};

export const addFeedback = async (feedback) => {
    const { data } = await api.post('/stores/feedback', feedback);
    return data.response;
};

const apiObject = {
    fetchShops,
    addFeedback,
}

export default apiObject;