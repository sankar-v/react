import * as types from '../types';

const initialState = {
    items: [],
    author: '',
    text: ''
};

const commentsReducer = (state = initialState, action ) => {
    switch(action.type){
        case types.ADD_COMMENT:
                return {
                    ...state, 
                        items: [...state.items, { id : Math.random(), ...action.comment} ]
                }
        case types.AUTHOR_CHANGE:
                return{
                    ...state,
                    author: action.author
                };
        case types.TEXT_CHANGE:        
                return{
                    ...state,
                    text: action.text
                }
        default:
                return state;
    }
}

export default commentsReducer;