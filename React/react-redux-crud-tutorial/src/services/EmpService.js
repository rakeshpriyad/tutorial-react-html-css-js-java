import http from "../http-common";

const getAll = () => {
  return http.get("/emps");
};

const get = id => {
  return http.get(`/emps/${id}`);
};

const create = data => {
  return http.post("/emps", data);
};

const update = (id, data) => {
  return http.put(`/emps/${id}`, data);
};

const remove = id => {
  return http.delete(`/emps/${id}`);
};

const removeAll = () => {
  return http.delete(`/emps`);
};

const findByName = name => {
  return http.get(`/emps?name=${name}`);
};

const EmpService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default EmpService;
