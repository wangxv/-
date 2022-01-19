import axios from 'axios';

const request = axios.create({
  baseURL: 'http://api.cpengx.cn/metashop/api'
});

request.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data;
  } else {
    return response;
  }
}, (err) => {
  return Promise.reject(err);
});

export const getHomePage = (params) => {
  return request({
    method: 'GET',
    url: '/homePage',
    params,
  });
};

