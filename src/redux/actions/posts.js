import {APIpost} from './../../API/example';

export const GET_POST = "GET_POST";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

export const posts = posts =>({
    type:GET_POST,
    posts
})

export const error = (error) => ({
    type: ERROR,
    error,
});

export const loading = (bool)=>({
    type: LOADING,
    isLoading:bool,
})


export const getPosts = ()=> async dispatch=>{
    dispatch(loading(true));
    console.log("cargando A");
    return await APIpost().then(respuesta=>{
        console.log("cargando B");
        dispatch(posts(respuesta));
        dispatch(loading(false));
    }).catch(error=>{
        console.log("cargando C");
        dispatch(error(error));
        dispatch(loading(false));
    });
}