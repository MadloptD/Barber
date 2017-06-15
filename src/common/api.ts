import {RequestsRepository} from "../core/api/RequestsRepository.g";
import {Constants} from "./constants"

export const request = new RequestsRepository(Constants.BaseUrl);
