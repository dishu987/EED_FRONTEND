import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./ui/pages/home";
import Navbar from "./ui/shared/Navbar/Navbar";
import { initWeb } from "./utils/initweb";
import Footer from "./ui/shared/Footer/Index";
import { Routes, Route } from "react-router-dom";
import NotFound from "./ui/pages/404";
import ContactUs from "./ui/pages/contact";
import AboutUs from "./ui/pages/about";
import Admissions from "./ui/pages/admissions";
import Achievements from "./ui/pages/achievements";
import Committees from "./ui/pages/committees";
import ResearchModule from "./ui/pages/research";
import MainLoader from "./ui/shared/Loader";
import Login from "./ui/pages/login";
import ScrollToTopOnLocationChange from "./utils/scrollToTop";
import ProfilePage from "./ui/pages/profile";
import { useDispatch, useSelector } from "react-redux";
import AddFaculty from "./ui/pages/profile/add.faculty";
import ChangePassword from "./ui/pages/profile/change.password";
import Faculties from "./ui/pages/peoples/faculty";
import FacultyView from "./ui/pages/peoples/view.profile";
import AddFacultyBulk from "./ui/pages/profile/faculty.add.bulk";
import AddNews from "./ui/pages/profile/news/add";
import NewsAll from "./ui/pages/news";
import AddStudents from "./ui/pages/profile/students";
import Students from "./ui/pages/peoples/students";
import CoursePage from "./ui/pages/courses/course.page";
import CoursesModule from "./ui/pages/profile/courses";
import TextSelectionDropdown from "./utils/select.text";
import AddStaff from "./ui/pages/profile/staff/add";
import StaffMembers from "./ui/pages/peoples/staff";
import AllUsers from "./ui/pages/profile/users";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const auth = useSelector((state: any) => state.getauth);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    initWeb(dispatch);
  }, []);
  return (
    <>
      <TextSelectionDropdown />
      <ScrollToTopOnLocationChange />
      {loading && <MainLoader />}
      <>
        <Navbar />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculties />} />
          <Route path="/staff" element={<StaffMembers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/view/:id" element={<FacultyView />} />
          <Route path="/research/*" element={<ResearchModule />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/committee" element={<Committees />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/news" element={<NewsAll />} />

          <Route path="/login" element={<Login />} />
          {auth.isSuccessful && (
            <>
              <Route path="/add-news" element={<AddNews />} />
              <Route path="/add-course" element={<CoursesModule />} />
              <Route path="/faculty-add" element={<AddFaculty />} />

              <Route path="/staff-add" element={<AddStaff />} />
              <Route path="/students-add" element={<AddStudents />} />
              <Route path="/faculty-add-bulk" element={<AddFacultyBulk />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/users" element={<AllUsers />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
      {/* )} */}
    </>
  );
}

export default App;
