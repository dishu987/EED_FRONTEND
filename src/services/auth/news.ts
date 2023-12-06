import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class NewsService {
    static addnews = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.addnews}`,
            formdata,
            {
                headers,
            }
        );
    };
    static getnews = (token: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.addnews}`,
            {
                headers,
            }
        );
    };
    // static getusernews = (token: any) => {
    //     const headers = {
    //         Authorization: `Bearer ${token}`,
    //         Accept: "*/*",
    //     };
    //     return API.get(
    //         `${ApiConstants.user_publications}`,
    //         {
    //             headers,
    //         }
    //     );
    // };
}
