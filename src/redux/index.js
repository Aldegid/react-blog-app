import { combineReducers } from 'redux';

import posts from './posts';
import postDetails from './post-details';
import login from './login';

const rootReducer = combineReducers({ posts, postDetails, login });

export default rootReducer;
