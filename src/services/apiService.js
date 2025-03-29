import axios from "axios";

const BASE_URL = "https://reqres.in/api";

export const loginUser = (credentials) => axios.post(`${BASE_URL}/login`, credentials);
export const fetchUsers = (page) => axios.get(`${BASE_URL}/users?page=${page}`);
export const updateUser = (id, data) => axios.put(`${BASE_URL}/users/${id}`, data);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);