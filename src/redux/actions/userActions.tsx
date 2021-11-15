import { ThunkAction } from "redux-thunk";
import { ISignInUser, IUser } from "../../interfaces/User";
import { AuthAction, RootState } from "../store";
import { firebase } from '../../firebase/FireBaseConfig';
import { CREATE_USER, LOGOUT_USER, SIGNIN_USER } from "../../config/constans";

export const createUserWithEmailAndPassword = (data: ISignInUser): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(result => {
        const user: IUser = {uid:result?.user?.uid,authenticated:false,favorites:[],numberpage:1};
        dispatch({type:CREATE_USER,payload:user});    
    });
    } catch (err) {}
  }
}

export const signInWithEmailAndPassword = (data: ISignInUser): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
      try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        dispatch({type:SIGNIN_USER,payload:true});
      } catch (err) {}
    }
  }

  export const signOut = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
      try {
        await firebase.auth().signOut();
        dispatch({type:LOGOUT_USER,payload:false});
      } catch (err) {}
    }
  }