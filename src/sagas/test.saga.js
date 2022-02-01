import { take, delay, put, fork } from 'redux-saga/effects';
export function* testSaga() {

    while (true) {
        console.log('Start SAGA:');
        const state = yield take("TEST_MESSAGE");
        console.log('Finish SAGA:', state);
    }
}

export function* donothing() {
    console.log('I have been called');
    yield delay(500);
    console.log('I am Doing nothing.');

}

export function* testSagaFork() {
    while (true) {
        yield take('TEST_MESSAGE_2');
        yield fork(donothing);
        yield fork(donothing);
        yield fork(donothing);
    }
}
export function* dispatchSaga() {
    while (true) {

        yield delay(1000);
        yield put({ type: 'TEST_MESSAGE_2', payload: 1000 });
    }
}