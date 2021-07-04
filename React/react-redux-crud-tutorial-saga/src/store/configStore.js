import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/empSaga'
import rootReducer from '../reducers/rootReducer'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga);

store.subscribe( () => {console.log(store.getState())});
export default store;