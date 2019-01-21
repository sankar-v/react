import contactsReducer  from './contactsReducer';
import uiReducer from './uiReducer';
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    ui: uiReducer,
});

export default rootReducer;