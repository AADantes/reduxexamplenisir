import {combineReducers} from 'redux';
import {LibraryReducers,selectedstudentreducer} from './libraryReducers';
import {BookReducers, selectedbookreducer} from './BookReducers';


const reducers = combineReducers({
    allStudents:LibraryReducers,
    allBooks:BookReducers,
    singlestudent:selectedstudentreducer,
    singlebook:selectedbookreducer


})

export default reducers;