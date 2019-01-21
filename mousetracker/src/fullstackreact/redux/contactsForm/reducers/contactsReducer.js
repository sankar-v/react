import initialState from './initialState';

const contactsReducer = (state = initialState.contacts, action) => {
    switch(action.type){
         /* Add contacts to the state array */
        case "ADD_CONTACT":{ 
            alert('inside add contact')
            return {
                ...state,
                    contactList:[...state.contactList, state.newContact]
            }
        }
            
        /* Handle input for the contact form. 
        The payload (input changes) gets merged with the newContact object
        */
        case "HANDLE_INPUT_CHANGE": 
            return{
                ...state, newContact: {
                    ...state.newContact, ...action.payload }
            }
        

        case "REQUEST_CONTACTS":
            return {
                ...state, isFetching: true
            }
        
        case "RECEIVE_CONTACTS":
            return {
                ...state, isFetching: false, contactList: action.payload
            }

        
        default: return state;
    }
}

export default contactsReducer;