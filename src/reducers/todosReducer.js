export default (state = [], action) => {
    switch (action.type){
        case "FETCH_TODOS":
            return action.payload;
        case "POST_TODOS":
            return [...state, action.payload]
        default:
            return state;
    }
}
/*const INITIAL_STATE = {
    listTodo: []
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "FETCH_TODOS":
            return { ...state, listTodo: action.payload }
        case "POST_TODOS":
            return [...state, {...state.listTodo, ...action.payload}]
        default:
            return state;
    }
}*/