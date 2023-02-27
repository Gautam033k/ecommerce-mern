import axios from 'axios';

const BASE_URL = 'https://ecommerce-api-7t1n.onrender.com/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWZjZWQxMzljNDdkZTA5MzcxNzllZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDQ1NDMwNSwiZXhwIjoxNjc0NzEzNTA1fQ.6uduPxMSza12x0ONI5CfOsSbfJNvrNsX8Sjxd9nIYrg';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
