import createSagaMiddleware, { } from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import entriesReducer from "../reducers/entries.reducer";
import modelReducer from '../reducers/models.reducer';
import errorsReducer from "../reducers/errors.reducer";
import { initSagas } from "../sagas";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare];

const configureStore = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            models: modelReducer,
            errors:errorsReducer,
        }),
        composeEnhancers(applyMiddleware(...middlewares)),
    );
    //sagaMiddleWare.run(testSaga);
    initSagas(sagaMiddleWare);
    return store;
};

export default configureStore;