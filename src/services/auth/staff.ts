import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class StaffService {
    static getAll = () => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(`${ApiConstants.staff}`, { headers });
    };
    static add = (token: string, data: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.staff}`,
            data,
            { headers }
        );
    };
}
