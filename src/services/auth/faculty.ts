import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class FacultyAddService {
    static add_bluk = (token: string, data: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(ApiConstants.addfacultybulk, data, { headers });
    };
    static getUsersList = (token: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.getAllUsersName}`,
            {
                headers,
            }
        );
    };
}
