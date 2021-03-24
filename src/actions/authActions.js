
export const DO_LOGIN = 'DO_LOGIN_REQUEST';
export const DO_LOGOUT = 'DO_LOGOUT_RECEIVED';


export function doLoginActions(payload) {
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

/**
  API Call Sample for Get Request

 export const GET_POC_REQUEST = 'GET_POC_REQUEST';
export const GET_POC_RECEIVED = 'GET_POC_RECEIVED';
export const GET_POC_FAILED = 'GET_POC_FAILED';

export function getAllPocForBeneficiary(data) {
    return async (dispatch) => {
        try {
            dispatch({type: GET_POC_REQUEST})
            let res = await api.poc.getAllPocByBeneficiaryId(data);
            if (!isNullOrUndefined(res.data) && isArray(res.data)) {
                let data = res.data.reverse();
                res ={
                    ...res,
                    data: data
                }
                dispatch({
                    type: GET_POC_RECEIVED,
                    payload: res
                })
            } else {
                const errorMessage = res.message || res.error;
                dispatch({
                        type: GET_POC_FAILED,
                        payload: {
                            error: errorMessage
                        }
                })
                //throw new Error();
            }
        } catch (error) {
            //TODO remove console.error
            console.error(error);
            dispatch({
                    type: GET_POC_FAILED, 
                    payload: {
                        error: error.message || "Something went wrong"
                    }   
            })
        }
    }
}

 */