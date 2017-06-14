import { JobApiRequest } from "./JobApiRequest.g";
import { OrderApiRequest } from "./OrderApiRequest.g";
import { UserApiRequest } from "./UserApiRequest.g";

export class RequestsRepository {
  constructor(private baseurl: string) {
  }

  jobApiRequest = new JobApiRequest(this.baseurl);
  orderApiRequest = new OrderApiRequest(this.baseurl);
  userApiRequest = new UserApiRequest(this.baseurl);
}