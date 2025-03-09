import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (product: { name: string; price: number }) => {
  const response = await api.post('/products', product);
  return response.data;
};
