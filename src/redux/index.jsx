import { combineReducers } from 'redux';
import postsReducers from './postReducers.jsx';

const objectReducers = combineReducers({
    posts: postsReducers,
});

export default objectReducers;
