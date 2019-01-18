    const contacts= [
        {
        "name": "Miguel",
        "phone": "123456789",
        },
        {
        "name": "Peter",
        "phone": "883292300348",
        },
        { 
        "name": "Jessica",
        "phone": "8743847638473", 
        },
        { 
        "name": "Michael", 
        "phone": "0988765553",
        }
    ];

   const activeContact =  {
       "name": "Miguel",
       "phone": "123456789",
   };

    const initialState = {
        contacts: contacts,
    };

const ContactsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CONTACTS' :
            return {...state, contacts : action.contacts }
        default:
            return state;
    }
}

export default ContactsReducer;