import { CREATE_USER, LOGOUT_USER, SIGNIN_USER, SETDATA_USER } from "../../config/constans";
import { AuthAction }  from "../store";
import { IUser } from "../../interfaces/User";

const initialStateUser: IUser = {uid:"",authenticated:false,favorites:[],numberpage:1};

export default (state = initialStateUser, action: AuthAction) => {
  switch(action.type) {
    case CREATE_USER:
        return {
        ...state
    }
    case SIGNIN_USER:
        return {
        ...state,
        authenticated:action.payload
    }
    case LOGOUT_USER:
        return {
        ...state,
        authenticated:action.payload
    }
    case SETDATA_USER:
        return {
        ...state,
        json_stringify:action.payload
    }  
    default: 
      return state;
  }
}