import {
  RETRIEVE_EMPS,
  RETRIEVE_EMPS_BY_FIRST_NAME,
  CREATE_EMP,
  UPDATE_EMP,
  DELETE_EMP,
  DELETE_ALL_EMPS,
  EMPS_RECEIVED,
} from "../actions/empCreator";

const initialState = [];

const employeeReducer = (emps = initialState, action) => {
  const { type, payload } = action;

  console.log(type);
  switch (type) {
    case CREATE_EMP:
      return [...emps, payload];

    case RETRIEVE_EMPS:
      return payload;

    case RETRIEVE_EMPS_BY_FIRST_NAME:
      return payload;

    case EMPS_RECEIVED:
      return payload;

    case UPDATE_EMP:
      return emps.map((emp) => {
        if (emp.id === payload.id) {
          return {
            ...emp,
            ...payload,
          };
        } else {
          return emp;
        }
      });

    case DELETE_EMP:
      return emps.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_EMPS:
      return [];

    default:
      console.log("emps reducer" + emps)
      return emps;
  }
};

export default employeeReducer;