
const BACKEND_URL = "http://127.0.0.1/myfiles/ee%20web/api";

const ApiConstants = {
    getauth: BACKEND_URL + '/users/login.php',
    getprofile: BACKEND_URL + '/users/profile.php',
    addfaculty: BACKEND_URL + "/users/register.php",
    addfacultybulk: BACKEND_URL + "/users/register_bulk.php",
    addstudentsbulk: BACKEND_URL + "/peoples/students_add_bulk.php",
    staff: BACKEND_URL + "/users/staff.php",
    getstudentslist: BACKEND_URL + "/peoples/students.list.php",
    changepassword: BACKEND_URL + "/users/change_password.php",
    editprofile: BACKEND_URL + "/users/edit_profile.php",
    getfaculty: BACKEND_URL + "/users/getfaculty.php",
    getfacultyprofile: BACKEND_URL + "/users/getfacultyprofile.php",
    publications: BACKEND_URL + "/publications/add.publications.php",
    user_publications: BACKEND_URL + "/publications/get.id.php",
    delete_publications: BACKEND_URL + "/publications/delete.publications.php",
    addnews: BACKEND_URL + "/news/news.user.php",
    addcourse: BACKEND_URL + "/courses/course.add.php",
    addcoursebulk: BACKEND_URL + "/courses/bulk_course.add.php",
    getcontrubutorsList: BACKEND_URL + "/users/getProfOptions.php",
    getAllUsersName: BACKEND_URL + "/users/getAllProfOptions.php",
    // Research Projects
    researchProjects: BACKEND_URL + "/publications/research.projects.php",
    // Demographics
    demographics: BACKEND_URL + "/publications/get.demographic.php",
    // Achievements
    achievements: BACKEND_URL + "/achievements/achievements.php"
};

export { BACKEND_URL, ApiConstants };