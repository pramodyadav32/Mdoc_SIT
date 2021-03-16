import { DO_LOGIN, DO_LOGOUT } from "../actions/authActions";


let initialState = {
    loginData: undefined,
    isLogout: undefined
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case DO_LOGIN:
        return {...state, loginData: action.payload, isLogout: false};
      case DO_LOGOUT:{
       return {...state, loginData: undefined, isLogout : true};
      }
      default:
            return state;
    }
}

export default authReducer;