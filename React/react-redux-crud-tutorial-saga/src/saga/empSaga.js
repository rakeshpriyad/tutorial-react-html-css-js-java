import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
    RETRIEVE_EMPS,
    RETRIEVE_EMPS_BY_FIRST_NAME,
    CREATE_EMP,
    UPDATE_EMP,
    DELETE_EMP,
} from "../actions/empCreator";

import { fetchEmployees, 
    fetchEmployeeByFirstName,
    submitSaveEmployee, 
    submitUpdateEmployee, 
    submitRemoveEmployee } from '../api'
import {
    empReceived,
    saveEmpSuccess,
    updateEmpSuccess,
    deleteEmpSuccess,
    getEmployeesFailed,
    saveEmpFailed,
    updateEmpFailed,
    deleteEmpFailed
} from '../actions/empAction'


function* callFetchEmployees(action) {
    const result = yield call(fetchEmployees, action.data);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(getEmployeesFailed(result.errors));
    } else {
        console.log("data received", result);
        yield put(empReceived(result));
    }
}

function* fetchEmployeeSaga() {
    yield takeLatest(RETRIEVE_EMPS, callFetchEmployees);
}

function* callSaveEmployee(action) {
    const result = yield call(submitSaveEmployee, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(saveEmpFailed(result.errors));
    } else {
        console.log("Employee Saved " + result);
        yield put(saveEmpSuccess());
    }
}

function* saveEmployeeSaga() {
    yield takeLatest(CREATE_EMP, callSaveEmployee);
}

function* callUpdateEmployee(action) {
    const result = yield call(submitUpdateEmployee, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(updateEmpFailed(result.errors));
    } else {
        console.log("Employee Updated " + result.id);
        yield put(updateEmpSuccess());
    }
}

function* updateEmployeeSaga() {
    yield takeLatest(UPDATE_EMP, callUpdateEmployee);
}

function* callDeleteEmployee(action) {
    const result = yield call(submitRemoveEmployee, action.payload);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(deleteEmpFailed(result.errors));
    } else {
        console.log("Employee Removed " + result);
        yield put(deleteEmpSuccess());
    }
}

function* deleteEmployeeSaga() {
    yield takeLatest(DELETE_EMP, callDeleteEmployee);
}

function* callFetchEmployeeByFirstName(action) {
    console.log("callFetchEmployeeByFirstName: "+ action.data)
    const result = yield call(fetchEmployeeByFirstName, action.data);
    if (result.errors) {
        console.log("Error occured : " + result.errors)
        yield put(getEmployeesFailed(result.errors));
    } else {
        console.log("data received", result);
        yield put(empReceived(result));
    }
}

function* fetchEmployeeByFirstNameSaga() {
    yield takeLatest(RETRIEVE_EMPS_BY_FIRST_NAME, callFetchEmployeeByFirstName);
}



export default function* rootSaga() {
    yield all([
        fetchEmployeeSaga(),
        fetchEmployeeByFirstNameSaga(),
        saveEmployeeSaga(),
        updateEmployeeSaga(),
        deleteEmployeeSaga()
    ])
}