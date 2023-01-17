export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCES = 'GET_POSTS_SUCCES';

export const changeStatePosts = (posts) => ({
    type: GET_POSTS_SUCCES,
    payload: posts,
})

export function getDataApi() {

    return async (dispatch) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(changeStatePosts(data));
            console.log(data);
        } catch (error) {
            return error;
        }
    };
}