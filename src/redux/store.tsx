import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducers from './reducers/userReducers';
import { IACreateUser, IALogOutUser, IASignInUser, IASetDataUser } from '../interfaces/users/actions';

const rootReducer = combineReducers({user: userReducers});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export type AuthAction = IACreateUser | IASignInUser | IALogOutUser | IASetDataUser;

export type RootState = ReturnType<typeof rootReducer>;

export default store;