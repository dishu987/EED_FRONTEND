import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class FacultyService {
    static getAll = () => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(`${ApiConstants.getfaculty}`, { headers });
    };
    static getprofile = (id: any) => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(`${ApiConstants.getfacultyprofile}?id=${id}`, { headers });
    };
    static add = (token: string, data: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.addfaculty}`,
            data,
            { headers }
        );
    };
}
