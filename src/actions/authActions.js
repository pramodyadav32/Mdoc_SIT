
export const DO_LOGIN = 'GET_MEALS_REQUEST';
export const DO_LOGOUT = 'GET_MEALS_RECEIVED';


export function doLoginActions( payload) {
    return {
        type: DO_LOGIN, 
        payload: payload   
    }
}

export function doLogoutActions( payload) {
    return {
        type: DO_LOGOUT, 
        payload: payload   
    }
}