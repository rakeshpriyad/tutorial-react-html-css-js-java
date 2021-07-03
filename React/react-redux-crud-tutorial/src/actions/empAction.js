import {
  CREATE_EMP,
  RETRIEVE_EMPS,
  UPDATE_EMP,
  DELETE_EMP,
  DELETE_ALL_EMPS,
} from "./empCreator";

import EmpDataService from "../services/EmpService";

export const createEmp = (name, age) => async (dispatch) => {
  try {
    const res = await EmpDataService.create({ name, age });

    dispatch({
      type: CREATE_EMP,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveEmps = () => async (dispatch) => {
  try {
    const res = await EmpDataService.getAll();

    dispatch({
      type: RETRIEVE_EMPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateEmp = (id, data) => async (dispatch) => {
  try {
    const res = await EmpDataService.update(id, data);

    dispatch({
      type: UPDATE_EMP,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteEmp = (id) => async (dispatch) => {
  try {
    await EmpDataService.remove(id);

    dispatch({
      type: DELETE_EMP,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllEmps = () => async (dispatch) => {
  try {
    const res = await EmpDataService.removeAll();

    dispatch({
      type: DELETE_ALL_EMPS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findByFirstName = (firstName) => async (dispatch) => {
  try {
    console.log("firstName: "+ firstName)
    const res = await EmpDataService.findByFirstName(firstName);

    dispatch({
      type: RETRIEVE_EMPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
