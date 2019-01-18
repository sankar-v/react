import { combineReducers } from 'redux';
import ContactsReducer from './Contacts'
import ActiveContactReducer from './ActiveContact'

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  activeContact: ActiveContactReducer
});

export default rootReducer;