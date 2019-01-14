const todos = (state =[], action) =>{
    alert(action.type)
    switch(action.type){
        case 'ADD_TODO':
            alert('in add to do');
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed : false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(
                todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todos;