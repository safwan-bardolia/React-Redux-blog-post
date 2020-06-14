import _ from 'lodash';     //to remove problem of making same request again & again
import jsonPlaceholder from '../apis/jsonPlaceholder';


// Action creator is responsible for making an API request



export const fetchPostAndUsers = () => {

    // getState: reference to redux-store state
    return async (dispatch, getState) => {

        // fetchPosts() returns a function & we dispatch it immediatly (because redux-thunk handle that function) (see redux-thunk tex file)
        await dispatch(fetchPosts());       // await: because block further execution in fetchPostAndUsers until  this execution complete

        // _.map(getState().posts, 'userId'): it returns array of all userid from state.posts property
        const userIds = _.uniq(_.map(getState().posts, 'userId'));      // return unique id from that array
        
        // now for each unique userId call the fetchUser
        userIds.forEach(id => dispatch(fetchUser(id)));
        // no need to write await keyword here because there is no further script present in this function
        
    }
}







// Action creator
export const fetchPosts = () => {
    // returning a funcion (remember Action creator either return a function or plain js object)
    // if we return a function then no need return 'action'object inside this function 
    return async (dispatch) => {                                                                    //similar to 'async function(dispatch){}'
        const responce = await jsonPlaceholder.get('/posts');
      
        // we don't return an action here
        // instead we will call dispatch() funcion manually with the 'action' we are trying to dispatch
        dispatch({
            type:'FETCH_POSTS' , 
            payload: responce.data  
        });
    };
}

// ******************************************************************************************************************************************************

export const fetchUser = (userId) => {
    // below function is handled by redux-thunk
    return async (dispatch) => {
        const responce = await jsonPlaceholder.get(`/users/${userId}`);

        // dispatching action manually
        dispatch({
            type: 'FETCH_USER',
            payload: responce.data
        });	
    };
}

// *********************************memoizing approach*****************************************************
// // Async action creator 
// // this action creator is called multiple time with same user id so we memoized using some technique
// export const fetchUser = (userId) => {
//     // returning function
//     return (dispatch) => {
//         _fetchUser(userId, dispatch);
//     };
// }

// /* we need to define function outside of action creator, which is going to make a request & dispatch the 'action'
//    & we memoize outside action creator */

// // _ indicate it is a private function , some other does not call this function unless they know what they are doing
// const _fetchUser = _.memoize(async(userId, dispatch)=>{

//     const responce = await jsonPlaceholder.get(`/users/${userId}`);

//     // dispatching responce manually
//     dispatch({
//         type: 'FETCH_USER',
//         payload: responce.data
//     });

// }) 

// // what above function does is, it does not make same network request again & again for same user




