
import{ActionTypes} from "../Constants/action-types";
import React from 'react'

const initialState ={
    books: [
        {
            id: '1',
            bookname:'asdsad',
            description:'asdasd',
            status:'Active'
        },

    ]

}

const singlebookinitialize ={
    id: '',
    bookname:'',
    description:'',
    status:'Active'
}

export const BookReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_BOOKS:
        return {...state,books:payload};

    default:
        return state;
  }
}

export const selectedbookreducer=(state=singlebookinitialize,{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_BOOK:
            return {...state,...payload};
    
        default:
            return state;
}
}