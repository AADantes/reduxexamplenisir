import { ActionTypes } from "../Constants/action-types";

export const setBooks = (books) => {
    return{
        
        type: ActionTypes.SET_BOOKS,
        payload: books,

};

}

export const setSelectedBook = (book) => {
    return{
        
        type: ActionTypes.SELECTED_BOOK,
        payload: book,
    }
}