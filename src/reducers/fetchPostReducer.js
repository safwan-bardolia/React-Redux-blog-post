
// when 1st time reducer called state is an empty array
export default (state =[] ,action) => {
    if(action.type==='FETCH_POSTS') {
        return action.payload;          //we access this value using    "state.<key of fetchPostReducer> "   (see combineReducer)
    } else {
        return state;
    }
}   