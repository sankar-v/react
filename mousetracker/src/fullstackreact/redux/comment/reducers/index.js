const initialState = {
    items: [],
    author: '',
    text: ''
};

export default commentsReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_COMMENT:
                return {
                    ...state, 
                        items: [...state.items, { id : Math.random(), ...action.comment} ]
                }
        case AUTHOR_CHANGE:
                return{
                    ...state,
                    author: action.author
                };
        case TEXT_CHANGE:        
                return{
                    ...state,
                    text: action.text
                }
        default:
                return state;
    }
}