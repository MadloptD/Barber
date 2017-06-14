import {BaseRequest} from "./BaseRequest";
import { LoginRequest } from "./dto/LoginRequest.g";

export class UserApiRequest extends BaseRequest {
  constructor(protected baseurl: string){
    super();
  }
  login(loginRequest: LoginRequest, config?: Object): Promise<void> {
    return this.fetch(
      `/api/User/Login/`,
      Object.assign({
        method : "POST",
        body:  JSON.stringify(loginRequest)
      }, config))
      .catch(BaseRequest.handleError);
  }
}