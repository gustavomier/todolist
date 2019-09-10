import jsonPlaceholder from "../apis/jsonPlaceholder"

export const fetchToDoList = () => async dispatch => {
    const response = await jsonPlaceholder.get("/todos");
    dispatch({ type: "FETCH_TODOS", payload: response.data });
}
export const postToDoList = (id, completed, userId, title) => async dispatch => {
    await jsonPlaceholder.post("/todos");
    dispatch({ type: "POST_TODOS", payload: {
        title,
        id,
        userId,
        completed
    }
      })
}
