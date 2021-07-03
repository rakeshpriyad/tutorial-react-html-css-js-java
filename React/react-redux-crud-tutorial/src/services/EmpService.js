import http from "../axios/api";

const endPoint = "/employees"

const getAll = () => {
  return http.get(endPoint);
};

const get = id => {
  return http.get(`${endPoint}/${id}`);
};

const create = data => {
  return http.post(endPoint, data);
};

const update = (id, data) => {
  return http.put(`${endPoint}/${id}`, data);
};

const remove = id => {
  return http.delete(`${endPoint}/${id}`);
};

const removeAll = () => {
  return http.delete(`${endPoint}`);
};

const findByFirstName = firstName => {
  return http.get(`${endPoint}/search/first/${firstName}`);
};

const EmpService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByFirstName
};

export default EmpService;
