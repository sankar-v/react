const ActiveContactReducer =  (state = null, action) => {
    switch (action.type) {
      case 'CONTACT_SELECTED':
        return action.payload
    }
    return state;
}

export default ActiveContactReducer;