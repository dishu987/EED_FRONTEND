import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class DemographicService {
    static get = () => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(`${ApiConstants.demographics}`, { headers });
    };
}
