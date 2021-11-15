import { CREATE_USER,LOGOUT_USER,SIGNIN_USER, SETDATA_USER } from '../config/constans';
import { IUser } from './user';

export interface IACreateUser {
    type: typeof CREATE_USER;
    payload: IUser;
}

export interface IASignInUser {
    type: typeof SIGNIN_USER;
    payload: boolean;
}

export interface IALogOutUser {
    type: typeof LOGOUT_USER;
    payload: boolean;
}

export interface IASetDataUser {
    type: typeof SETDATA_USER;
    payload: string;
}