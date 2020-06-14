export default (state = [], action) => {
    if(action.type=== 'FETCH_USER') {
        // safe updating state
        return [...state, action.payload];  // add fetchUser to previous array list, remember this array update for each user fetched  
    }
    else {
        return state;
    }
}