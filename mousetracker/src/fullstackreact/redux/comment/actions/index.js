import * as types from '../types';

export const addComment = ( comment = { author : '', text : '' } ) => (
    {
        type: types.ADD_COMMENT,
        comment
    }
)
export const authorChange = (author = '') => (
    {
        type: types.AUTHOR_CHANGE,
        author
    }
)

export const textChange = (text = '') => ( 
    {
    type: types.TEXT_CHANGE,
    text
    }
)