import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducer";
import modelReducer from '../reducers/models.reducer';
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            models: modelReducer,
        }),
        composeEnhancers()
    );
};
export default configureStore;

