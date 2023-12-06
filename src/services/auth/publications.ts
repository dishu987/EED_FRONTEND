import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class PublicationsService {
    static addpublications = (token: string, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.publications}`,
            formdata,
            {
                headers,
            }
        );
    };
    static getpublications = (byprof: string, byyear: string) => {
        const headers = {
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.publications + `?byprof=${byprof}&byyear=${byyear}`}`,
            {
                headers,
            }
        );
    };
    static getuserpublications = (token: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.user_publications}`,
            {
                headers,
            }
        );
    };
    static deletepublications = (token: any, formdata: any) => {
        const headers = {
            Authorization: `Bearer ${token}`,
            Accept: "*/*",
        };
        return API.post(
            `${ApiConstants.delete_publications}`,
            formdata,
            {
                headers,
            }
        );
    };
    static getContributorsList = () => {
        const headers = {

            Accept: "*/*",
        };
        return API.get(
            `${ApiConstants.getcontrubutorsList}`,
            {
                headers,
            }
        );
    };

}
