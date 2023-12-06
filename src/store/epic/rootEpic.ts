import { combineEpics } from "redux-observable";
import { getAuthEpic } from "./auth";
import { getFacultyListEpic } from "./peoples/faculties";
import { getStudentsListEpic } from "./peoples/students";
import { getResearchProjectListEpic } from "./research projects/research.projects";
import { getStaffListEpic } from "./peoples/staff";
import { getDemographicEpic } from "./demographic";
import { getAchievementscEpic } from "./achievements";

export const rootEpic = combineEpics(getAuthEpic, getFacultyListEpic, getStudentsListEpic, getResearchProjectListEpic, getStaffListEpic, getDemographicEpic, getAchievementscEpic);
