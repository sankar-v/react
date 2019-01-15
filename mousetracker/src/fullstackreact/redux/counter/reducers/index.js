const counter = (state=null, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,  counter: action.counter++
            }
        case 'DECREMENT':
            return {
                ...state, counter: action.counter--
            }
    }
}

export default counter;