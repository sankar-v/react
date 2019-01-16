//initial (starting) state
export const initialState = {
    counter: 0,
}

const counter = (state = initialState, action) => {
    alert(action.type + ":" + action.counter)
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