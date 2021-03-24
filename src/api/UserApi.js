import Base from "./BaseApi";

export default class UserAPI extends Base {

    loginUser(data) {
        console.log("data ====> ", data);
        return this.apiClient.post('v1/user/login', data);
    }

}