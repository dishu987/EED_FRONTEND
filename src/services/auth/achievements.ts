import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class AchievementsService {
    static add = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.achievements}`,
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
            `${ApiConstants.achievements}`,
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
            `${ApiConstants.achievements + `?p_id=${p_id}`}`,
            {
                headers: headers
            }
        );
    }
}
