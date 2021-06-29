import {
  CREATE_EMP,
  RETRIEVE_EMPS,
  UPDATE_EMP,
  DELETE_EMP,
  DELETE_ALL_EMPS,
} from "../actions/empCreator";

const initialState = [];

const empReducer = (emps = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EMP:
      return [...emps, payload];

    case RETRIEVE_EMPS:
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
      return emps;
  }
};

export default empReducer;