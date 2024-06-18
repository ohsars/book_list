import axios from 'axios';

const API_URL = 'http://openlibrary.org/people/george08';
// http://openlibrary.org/people/george08/lists/OL97L/seeds.json

export const getLists = async () => {
  const response = await axios.get(`${API_URL}/lists.json`);
  return response.data;
};

export const getList = async (listId) => {
  const response = await axios.get(`${API_URL}/lists/${listId}.json`);
  return response.data;
};

export const createList = async (listData) => {
  const response = await axios.post(`${API_URL}/lists`, listData);
  return response.data;
};

export const updateList = async (listId, listData) => {
  const response = await axios.put(`${API_URL}/lists/${listId}`, listData);
  return response.data;
};

export const deleteList = async (listId) => {
  const response = await axios.delete(`${API_URL}/lists/${listId}`);
  return response.data;
};