import { GET_POST, ERROR, LOADING } from './../actions/posts';

const INITIAL_STATE = {
    posts: [],
    error:'',
    loading:true
  };    

export const PostsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_POST:
            return { ...state, posts: action.posts };
            break;
        case ERROR:
            return { ...state, error: action.error };
            break;
        case LOADING:
            return { ...state, loading: action.isLoading };
            break;
        default:
            return state;
            break;
    }
}