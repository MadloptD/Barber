import {BaseRequest} from "./BaseRequest";
import { Job } from "./dto/Job.g";
import { ScheduleRequest } from "./dto/ScheduleRequest.g";
import { JobSchedule } from "./dto/JobSchedule.g";

export class JobApiRequest extends BaseRequest {
  constructor(protected baseurl: string){
    super();
  }
  getAll(config?: Object): Promise<Job[]> {
    return this.fetch(
      `/api/Job/GetAll/`,
      Object.assign({
        method : "GET"
      }, config))
      .then((response) => response.json())
      .catch(BaseRequest.handleError);
  }
  getSchedule(scheduleRequest: ScheduleRequest, config?: Object): Promise<JobSchedule> {
    return this.fetch(
      `/api/Job/GetSchedule/`,
      Object.assign({
        method : "POST",
        body:  JSON.stringify(scheduleRequest)
      }, config))
      .then((response) => response.json())
      .catch(BaseRequest.handleError);
  }
}