import axios from 'axios';

const getToken = () => localStorage.getItem('token');

export const distributeExpenses = (data) => {
  return axios.post('/api/distribute', data, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const getForecast = () => {
  return axios.get('/api/forecast', {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};

export const getObjects = () => {
  return axios.get('/api/objects', {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
};
