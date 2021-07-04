import * as actions from '../actions/actionCreators'

export const CONTEXT_EMP = 'employees/'
export const EMPS_URL = actions.URL + CONTEXT_EMP

export const invokeFetch = (URL, METHOD, HEADERS, BODY) => {
    return fetch(URL, {
        method: METHOD,
        headers: HEADERS,
        body: JSON.stringify(BODY)
    }).then(res => {
        return res.json();
    }
    ).catch(error => {
        console.error(error);
        return error;
    });

}

export const fetchEmployees = () => {
    return invokeFetch(EMPS_URL, actions.METHOD_GET, actions.CONTENT_JSON_TYPE);
}

export const fetchEmployeeByFirstName = (firstName) => {
    return invokeFetch(EMPS_URL+"search/first/"+firstName, actions.METHOD_GET, actions.CONTENT_JSON_TYPE);
}

export function submitSaveEmployee(emp) {
    console.log("Saving.." + JSON.stringify(emp));
    return invokeFetch(EMPS_URL, actions.METHOD_POST, actions.CONTENT_JSON_TYPE, emp);
}

export function submitUpdateEmployee(emp) {
    console.log("Updatingg.." + JSON.stringify(emp));
    return invokeFetch(EMPS_URL + emp.id, actions.METHOD_PUT, actions.CONTENT_JSON_TYPE, emp);
}


export const submitRemoveEmployee = (emp) => {
    return invokeFetch(EMPS_URL + emp.id, actions.METHOD_DELETE, actions.CONTENT_JSON_TYPE);
}

