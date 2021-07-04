import { combineReducers } from 'redux';
import employeeReducer from './empReducer';

//import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    empReducer: employeeReducer
    
 }) 
 

export default rootReducer;