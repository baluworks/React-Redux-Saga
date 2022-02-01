//import * as testSaga from './test.saga';
import * as entriesSaga from './entries.saga'
export function initSagas(sagaMiddleware) {
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

