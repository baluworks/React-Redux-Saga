import { take, call, put, fork, all, takeEvery ,select} from 'redux-saga/effects'
import { entryActionTypes } from '../constants/entries.types'
import axios from 'axios';
import { populateEntryDetails, populateEntries, apiError } from '../actions/entries.action';

//const newSync = new Promise((ms,res)=> setTimeout(res,ms));
const newSync = (ms)=> new Promise((resolve)=>setTimeout(()=>resolve( axios.get('http://localhost:3100/entries/')),ms));

export function* getAllEntries() {
    yield take(entryActionTypes.GET_ENTRIES);
    console.log('I need to get the entries now!');
    //const {data} = yield newSync(1000);
    try{
    const { data } = yield call(axios, 'http://localhost:3100/entries/');
   // console.log('Results:', data);
    yield put(populateEntries(data));
    }
    catch(error){
        yield put(apiError(error));
    }
}

function* getEntryDetails(id) {
    //console.log(`Id is : ${id}`);
    const { data } = yield call(axios, `http://localhost:3100/values/${id}`);
   // console.log('Data:', data);
    yield put(populateEntryDetails(id, data));
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entryActionTypes.POPULATE_ENTRIES);
   // console.log("PaayLoad from SAGA", payload);
    yield all(payload.map((entry) => fork(getEntryDetails, entry.id)));

}
export function* postEntry(action){
    console.log('Watcher:',action.payload);
    const state = yield select();
    console.log('Watcher:state',state);
    const {id,description,isExpense,value} = action.payload;
    const res = yield all([
        call(axios,'http://localhost:3100/entries/',{method:'POST',data:{id,description}}),
        call(axios,'http://localhost:3100/values/',{method:'POST',data:{id,value,isExpense}})
])
    // yield call(axios,'http://localhost:3100/entries/',{method:'POST',data:{id,description}});
    // yield call(axios,'http://localhost:3100/values/',{method:'POST',data:{id,value,isExpense}});
    
}

export function* watchLogs(){
    yield takeEvery(entryActionTypes.ADD_ENTRY,postEntry)
}