import {
  
  RETRIEVE_EMPS,
  RETRIEVE_EMPS_BY_FIRST_NAME,
  EMPS_RECEIVED,
  CREATE_EMP,
  UPDATE_EMP,
  DELETE_EMP,
  CREATE_EMP_SUCCESS_FULL,
  UPDATE_EMP_SUCCESS_FULL,
  DELETE_EMP_SUCCESS_FULL,

  DELETE_ALL_EMPS,
  CREATE_EMP_FAILED,
  UPDATE_EMP_FAILED,
  DELETE_EMP_FAILED,
  RETRIEVE_EMPS_FAILED
} from "./empCreator";



export const retrieveEmployees = () => {
  console.log("retrieveEmployees")
  return {
    type: RETRIEVE_EMPS,
    payload: "",
  }
};

export const retrieveEmployeesByFirstName = (firstName) => {
  console.log("retrieveEmployeesByFirstName")
  return {
    type: RETRIEVE_EMPS_BY_FIRST_NAME,
    payload: firstName,
  }
};

export const empReceived = (data) => {
  console.log(data)
  return { 
    type: EMPS_RECEIVED, 
    payload: data 
  }
}

export const createEmp = (emp) => {
  return {
    type: CREATE_EMP,
    payload: emp,
  }
};



export const updateEmp = (emp) => {
  return {
    type: UPDATE_EMP,
    payload: emp,
  }
};

export const deleteEmp = (id) => {
  return {
    type: DELETE_EMP,
    payload: { id },
  }
};

export const deleteAllEmps = () => {
  return {
    type: DELETE_ALL_EMPS,
    payload: "",
  }
};

export const findByFirstName = (firstName) => {
  console.log("firstName: " + firstName)
  return {
    type: RETRIEVE_EMPS,
    payload: firstName,
  }
};

export const saveEmpSuccess = () => {
  return { 
    type: CREATE_EMP_SUCCESS_FULL 
  }
}


export const updateEmpSuccess = () => { 
  return { 
    type: UPDATE_EMP_SUCCESS_FULL
  }
 }

 
export const deleteEmpSuccess = () => { 
  return { 
    type: DELETE_EMP_SUCCESS_FULL
  }
 }


export const getEmployeesFailed = (statusErrors) => {
  return { 
    type: RETRIEVE_EMPS_FAILED, 
    errors: statusErrors 
  }
}

export const saveEmpFailed = (statusErrors) => {
  return { 
    type: CREATE_EMP_FAILED, 
    errors: statusErrors 
  }
}

export const updateEmpFailed = (statusErrors) => {
  return { 
    type: UPDATE_EMP_FAILED, 
    errors: statusErrors }
}

export const deleteEmpFailed = (statusErrors) => {
  return { 
    type: DELETE_EMP_FAILED, 
    errors: statusErrors }
}
