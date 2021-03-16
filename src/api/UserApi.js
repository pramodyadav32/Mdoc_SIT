import Base from "./BaseApi";

export default class UserAPI extends Base {

    loginUser(data, isFormData = true) {
        console.log("data ====> ", data);
        return this.apiClient.post('api/LoginController', data, isFormData);
    }

}