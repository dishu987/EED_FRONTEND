import { API } from "../api-client";
import { ApiConstants } from "../../utils/api.constants";

export default class CourseService {
  static addcourse = (token: string, formdata: any) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "*/*",
    };
    return API.post(`${ApiConstants.addcourse}`, formdata, {
      headers,
    });
  };
  static add_bluk = (token: string, data: any) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "*/*",
    };
    return API.post(ApiConstants.addcoursebulk, data, { headers });
  };
  static getcourses = (degree: any) => {
    const headers = {
      Accept: "*/*",
    };
    return API.get(`${ApiConstants.addcourse}?degree=${degree}`, {
      headers,
    });
  };
}
