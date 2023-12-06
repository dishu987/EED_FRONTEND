import { combineReducers } from "redux";
import UserAuthSlice from "./slice/auth";
import FacultySlice from "./slice/peoples/faculties";
import StudentSlice from "./slice/peoples/students";
import ResearchProjectSlice from "./slice/projects/research.projects";
import StaffSlice from "./slice/peoples/staff";
import DemographicSlice from "./slice/demographic";
import AchievementsSlice from "./slice/achievements/achievements";

const rootReducer = combineReducers({
  getauth: UserAuthSlice.reducer,
  faculties: FacultySlice.reducer,
  students: StudentSlice.reducer,
  research_projects: ResearchProjectSlice.reducer,
  staff: StaffSlice.reducer,
  demographic: DemographicSlice.reducer,
  achievements: AchievementsSlice.reducer,
});

export default rootReducer;
