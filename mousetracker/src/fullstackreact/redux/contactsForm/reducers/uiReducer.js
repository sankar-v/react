import initialState from './initialState';

const uiReducer = (state = initialState.contacts.ui, action ) => {
    switch(action.type){
        case "TOGGLE_CONTACT_FORM":
            return {
                ...state, isContactFormHidden: !state.isContactFormHidden
            }
        
        default:
        return state;
    }
}

export default uiReducer;
