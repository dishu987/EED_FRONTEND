import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class UserProfileService {
    static getprofile = (token: string) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.getprofile}`,
            {
                headers,
            }
        );
    };
    static changepassword = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.changepassword}`,
            formdata,
            {
                headers,
            }
        );
    };
    static editprofile = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.editprofile}`,
            formdata,
            {
                headers,
            }
        );
    };
}
