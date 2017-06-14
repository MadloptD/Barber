import {BaseRequest} from "./BaseRequest";
import { OrderRequest } from "./dto/OrderRequest.g";

export class OrderApiRequest extends BaseRequest {
  constructor(protected baseurl: string){
    super();
  }
  toOrder(orderRequest: OrderRequest, config?: Object): Promise<void> {
    return this.fetch(
      `/api/Order/ToOrder/`,
      Object.assign({
        method : "POST",
        body:  JSON.stringify(orderRequest)
      }, config))
      .catch(BaseRequest.handleError);
  }
}