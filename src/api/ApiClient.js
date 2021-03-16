
import queryString from 'query-string';
import DeviceHelper from '../utils/DeviceHelper';

export const API_BASE_URL = "https://abcd.com";
export const SEESION_EXPIRE = "Your session is expired. Please try to login again.";
export const NO_INTERNET_MSG = "No Internet connection. Make sure that Wi-Fi or mobile data is turned on,then try again";

export default class ApiClient {
    
    constructor(prefix = '/api') {
        this.prefix = API_BASE_URL;
    }

    get(requestUrl, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'get',
            params
        });
    }

    post(requestUrl, payload = {}, isFormData) {
        return this.request({
            url: requestUrl,
            method: 'post',
            body: payload,
            isFormData: isFormData
        });
    }

    postParams(requestUrl, params = {}) {
        return this.request({
            url: requestUrl,
            method: 'post',
            params
        });
    }

    put(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'put',
            body: payload
        });
    }

    patch(requestUrl, payload = {}) {
        return this.request({
            url: requestUrl,
            method: 'patch',
            body: payload
        });
    }

    delete(requestUrl) {
        return this.request({
            url: requestUrl,
            method: 'delete'
        });
    }

    upload(requestUrl, payload = {}, callback = ()=>{}) {
        return this.uploadFile({
            url: requestUrl,
            method: 'post',
            body: payload,
            callback:callback
        });
    }

    uploadFile = async({url, method, params = {}, body,callback}) => {
        
 
    }

    request = async({url, method, params = {}, body, isFormData}) => {
        const isConnected = await DeviceHelper.isConnectedToInternet();
        if(!isConnected){
            const res = {
                error: NO_INTERNET_MSG,
                message: NO_INTERNET_MSG,
                noInternet: true
            }
            return res;
        }
        const urlWithQuery = `${url}?${queryString.stringify(params)}`;
        console.log("urlWithQuery=======> ", `${this.prefix}/${urlWithQuery}`);
        let headers = {
           // 'Accept': 'application/json',
           // 'Content-Type': 'application/json'
        }
        console.log("headers : ", headers);
        const init = {
            method,
            headers: headers
            //url: `${this.prefix}/${urlWithQuery}`
        };

        if (method !== 'get' && method !== 'head') {
            if(isFormData){
                init.body = body;
            }else {
                init.body = JSON.stringify(body); 

            }
            //init.data = body;
        }
        try{
            console.log("init : ", init);
            let res = await fetch(`${this.prefix}/${urlWithQuery}`, init) //axios(init);
            
            let status = res.status;
            if(status == 401){
                // PubSub.publish(TOKEN_EXPIRE, {
                //     tokenExpire: true,
                // });
                // return {
                //     ...res,
                //     error:  SEESION_EXPIRE,
                //     message: SEESION_EXPIRE
                // }         
            }
            try{
                res = await res.json();
            }catch(err){
                res = await res.text();
                if(res == 'Success'){
                    return {status: true};
                }
                return res;
            } 
            console.log("response 1:- ", res)
            if (status >= 500) {
                //throw new Error('Bad response from server');
                res.error = res.message || 'Bad response from server';
            }
            if (status >= 400) {
                //throw new Error('Bad response from server');
                res.error = res.message || 'Bad Credentials';
            }
            
            if(res.status == 'failed'){
                res.error = `${res.response || res.message} ${res.httpStatus}`;
            }
            //console.log("response 2:- ", res);
            if (!res.error) {
                return res;
            } else {
                return res;
                //throw new Error(res.error);
            }
        }catch(err){
            let res = {
                error : err.message || "something went wrong."
            }
            return res;
        }
        
    }


}