import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class ResearchProjectsService {
    static add = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.researchProjects}`,
            formdata,
            {
                headers,
            }
        );
    };
    static get = () => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.researchProjects}`,
            {
                headers,
            }
        );
    };
    static delete = (token: string, p_id: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.delete(
            `${ApiConstants.researchProjects + `?p_id=${p_id}`}`,
            {
                headers: headers
            }
        );
    }
}
