import { ThunkAction } from "redux-thunk";
import { ISignInUser, IUser } from "../../interfaces/users/user";
import { AuthAction, RootState } from "../store";
import Firebase from '../../config/firebase';
import { CREATE_USER, LOGOUT_USER, SIGNIN_USER } from "../../config/constans";

export const createUserWithEmailAndPassword = (data: ISignInUser): ThunkAction<void, RootState, null, AuthAction> => {
  return async dispatch => {
    try {
      await Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(result => {
        const user: IUser = {uid:result?.user?.uid,authenticated:false,json_stringify:"",favorites:[],numberpage:1};
        dispatch({type:CREATE_USER,payload:user});    
    });
    } catch (err) {}
  }
}

export const signInWithEmailAndPassword = (data: ISignInUser): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
      try {
        await Firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        dispatch({type:SIGNIN_USER,payload:true});
      } catch (err) {}
    }
  }

  export const signOut = (): ThunkAction<void, RootState, null, AuthAction> => {
    return async dispatch => {
      try {
        await Firebase.auth().signOut();
        dispatch({type:LOGOUT_USER,payload:false});
      } catch (err) {}
    }
  }