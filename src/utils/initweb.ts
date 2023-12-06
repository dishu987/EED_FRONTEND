import { favicon, title } from "../constants/basic";
import { getAchievementsRequestAction } from "../store/reducers/slice/achievements/achievements";
import { getDemographicRequestAction } from "../store/reducers/slice/demographic";
import { getFacultyRequestAction } from "../store/reducers/slice/peoples/faculties";
import { getStaffRequestAction } from "../store/reducers/slice/peoples/staff";
import { getStudentRequestAction } from "../store/reducers/slice/peoples/students";
import { getResearchProjectRequestAction } from "../store/reducers/slice/projects/research.projects";

export const initWeb = (dispatch: any) => {
    window.document.title = title;
    const link = document.querySelector('link[rel="icon"]');
    link?.setAttribute("href", favicon);
    const fontAwesome = document.createElement('script');
    fontAwesome.src = "https://kit.fontawesome.com/e87ee1495e.js";
    fontAwesome.crossOrigin = "anonymous";
    document.head.appendChild(fontAwesome);
    if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
        let googleScript = document.createElement("script");
        googleScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.head.append(googleScript);
    }
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    }, false);
    dispatch(getFacultyRequestAction());
    dispatch(getStudentRequestAction());
    dispatch(getResearchProjectRequestAction());
    dispatch(getStaffRequestAction());
    dispatch(getDemographicRequestAction());
    dispatch(getAchievementsRequestAction())
};
