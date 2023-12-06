export const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "People",
    dropdown: [
      { name: "Faculty", path: "/faculty" },
      { name: "Staff", path: "/staff" },
      { name: "Students", path: "/students" },
    ],
  },
  {
    name: "Courses",
    dropdown: [
      { name: "Btech", path: "/courses/btech" },
      { name: "Mtech", path: "/courses/mtech" },
      { name: "Phd", path: "/courses/phd" },
      { name: "Msc", path: "/courses/msc" },
    ],
  },
  {
    name: "Research",
    dropdown: [
      { name: "Areas", path: "/research/areas" },
      { name: "Facility", path: "/research/facility" },
      { name: "Labs", path: "/research/labs" },
      { name: "Publications", path: "/research/publications" },
      { name: "Projects", path: "/research/projects" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
  },
  {
    name: "Achievements",
    path: "/achievements",
  },
  {
    name: "Committee",
    path: "/committee",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
