import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class StudentsAddService {
    static add_bluk = (token: string, data: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(ApiConstants.addstudentsbulk, data, { headers });
    };
    static get_all = () => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(ApiConstants.getstudentslist, { headers });
    };
}
