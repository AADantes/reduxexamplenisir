import { ActionTypes } from "../Constants/action-types";

export const setStudent = (students) => {
    return{
        
        type: ActionTypes.SET_STUDENTS,
        payload: students,

};
}

export const setSelectedStudent = (student) => {
    return{
        
        type: ActionTypes.SELECTED_STUDENT,
        payload: student,
    }
}