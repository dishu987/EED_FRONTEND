const facultyData = [
  {
    category: "B.Tech. Faculty Advisors",
    fields: ["Batch", "Advisor Name", "Email", "Contact"],
    data: [
      {
        batch: 2021,
        name: "Dr. Pardeep Duhan",
        email: "pduhan@iitrpr.ac.in",
        contact: "01881-232228",
      },
      {
        batch: 2020,
        name: "Dr. Mahendra Sakare",
        email: "mahendra@iitrpr.ac.in",
        contact: "01881-232214",
      },
      {
        batch: 2019,
        name: "Dr. Devarshi Das",
        email: "devarshi.das@iitrpr.ac.in",
        contact: "01881-232211",
      },
      {
        batch: 2018,
        name: "Dr. A. V. Ravi Teja",
        email: "avraviteja@iitrpr.ac.in",
        contact: "01881-232205",
      },
      {
        batch: 2017,
        name: "Dr. R Sekhar",
        email: "sekhar@iitrpr.ac.in",
        contact: "01881-232215",
      },
      {
        batch: 2016,
        name: "Dr. Bibhu Prasad Padhy",
        email: "bibhu@iitrpr.ac.in",
        contact: "01881-232207",
      },
      {
        batch: 2015,
        name: "Dr. Subrahmanyam Murala",
        email: "dsubbumurala@iitrpr.ac.in",
        contact: "01881-232224",
      },
    ],
  },
  {
    category: "M.Tech. Faculty Advisors",
    fields: ["Batch", "Advisor Name", "Email", "Contact"],
    data: [
      {
        batch: "2021 SPCOM",
        name: "Dr. Sam Darshi",
        email: "sam@iitrpr.ac.in",
        contact: "01881-232221",
      },
      {
        batch: "2020 SPCOM",
        name: "Dr. Subrahmanyam Murala",
        email: "subbumurala@iitrpr.ac.in",
        contact: "01881-232224",
      },
      {
        batch: "2019 SPCOM",
        name: "Dr. Satyam Agarwal",
        email: "satyam@iitrpr.ac.in",
        contact: "01881-232223",
      },
      {
        batch: "2018 SPCOM",
        name: "Dr. Suman Kumar",
        email: "suman@iitrpr.ac.in",
        contact: "01881-232225",
      },
      {
        batch: "2021 POWER",
        name: "Dr J. Kalaiselvi",
        email: "kalaiselvi@iitrpr.ac.in",
        contact: "01881-232212",
      },
      {
        batch: "2020 POWER",
        name: "Dr. Saifullah Payami",
        email: "saif.payami@iitrpr.ac.in",
        contact: "01881-232220",
      },
      {
        batch: "2019 POWER",
        name: "Dr. Ranjana Sodhi",
        email: "rsodhi@iitrpr.ac.in",
        contact: "01881-232217",
      },
      {
        batch: "2018 POWER",
        name: "Dr. A. V. Ravi Teja",
        email: "avraviteja@iitrpr.ac.in",
        contact: "01881-232205",
      },
      {
        batch: "2021 MICRO & VLSI",
        name: "Dr. Brajesh Rawat",
        email: "r.brajesh@iitrpr.ac.in",
        contact: "01881-232208",
      },
      {
        batch: "2020 MICRO & VLSI",
        name: "Dr. Devarshi Das",
        email: "devarshi.das@iitrpr.ac.in",
        contact: "01881-232211",
      },
      {
        batch: "2019 MICRO & VLSI",
        name: "Dr. Vinayak Hande",
        email: "vinayak.hande@iitrpr.ac.in",
        contact: "01881-232226",
      },
    ],
  },
  {
    category: "Committee Members",
    fields: ["Committee", "Faculty Name", "Email", "Contact"],
    data: [
      {
        committee: "ACUGS Member",
        name: "Dr. Brijesh Kumbhani",
        email: "brijesh@iitrpr.ac.in",
        contact: "01881-232209",
      },
      {
        committee: "ACR&PGS (RPEC) Member",
        name: "Dr. Ravi Teja",
        email: "avraviteja@iitrpr.ac.in",
        contact: "01881-232205",
      },
      {
        committee: "PhD Admission Coordinator (SPCOM)",
        name: "Dr. Satyam Agarwal",
        email: "satyam@iitrpr.ac.in",
        contact: "01881-232223",
      },
      {
        committee: "PhD Admission Coordinator (POWER)",
        name: "Dr. Saifullah Payami",
        email: "saif.payami@iitrpr.ac.in",
        contact: "01881-232220",
      },
      {
        committee: "PhD Admission Coordinator (VLSI)",
        name: "Dr. Devarshi Das",
        email: "devarshi.das@iitrpr.ac.in",
        contact: "01881-232211",
      },
      {
        committee: "M.Tech. Coordinator (SPCOM)",
        name: "Dr. Ashwani Sharma",
        email: "ashwani.sharma@iitrpr.ac.in",
        contact: "01881-232206",
      },
      {
        committee: "M.Tech. Coordinator (POWER)",
        name: "Dr. Bibhu Prasad Padhy",
        email: "bibhu@iitrpr.ac.in",
        contact: "01881-232207",
      },
      {
        committee: "M.Tech. Coordinator (VLSI)",
        name: "Dr. Rohit Y. Sharma",
        email: "rohit@iitrpr.ac.in",
        contact: "01881-232219",
      },
      {
        committee: "Department Networking Coordinator",
        name: "Dr. S Murala",
        email: "subbumurala@iitrpr.ac.in",
        contact: "01881-232224",
      },
    ],
  },
  {
    category: "Department Purchase Committee Members",
    fields: ["Faculty Name", "Email", "Contact"],
    data: [
      {
        name: "HOD (EE) Chairman",
        email: "hodelectrical@iitrpr.ac.in",
        contact: "01881-232201",
      },
      {
        name: "Dr. Satyam Agarwal",
        email: "satyam@iitrpr.ac.in",
        contact: "01881-232223",
      },
      {
        name: "Dr. Brijesh Kumbhani",
        email: "brijesh@iitrpr.ac.in",
        contact: "01881-232209",
      },
      {
        name: "Dr. Brajesh Rawat",
        email: "r.brajesh@iitrpr.ac.in",
        contact: "01881-232208",
      },
      {
        name: "Dr. A. V. Ravi Teja",
        email: "avraviteja@iitrpr.ac.in",
        contact: "01881-232205",
      },
      {
        name: "Dr. Bibhu Prasad Padhy",
        email: "bibhu@iitrpr.ac.in",
        contact: "01881-232207",
      },
    ],
  },
  {
    category: "Group Email IDs",
    fields: ["Group Name", "Email"],
    data: [
      { groupName: "PhD", email: "eephd@iitrpr.ac.in" },
      { groupName: "PhD 2021", email: "eephd2021@iitrpr.ac.in" },
      { groupName: "PhD 2020", email: "eephd2020@iitrpr.ac.in" },
      { groupName: "PhD 2019", email: "eephd2019@iitrpr.ac.in" },
      { groupName: "PhD 2018", email: "eephd2018@iitrpr.ac.in" },
      { groupName: "PhD 2017", email: "eephd2017@iitrpr.ac.in" },
      {
        groupName: "M.Tech. SPCOM 2021",
        email: "eemtech2021spcom@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. SPCOM 2020",
        email: "eemtech2020spcom@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. SPCOM 2019",
        email: "eemtech2019spcom@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. SPCOM 2018",
        email: "eemtech2018spcom@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. POWER 2021",
        email: "eemtech2021power@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. POWER 2020",
        email: "eemtech2020power@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. POWER 2019",
        email: "eemtech2019power@iitrpr.ac.in",
      },
      {
        groupName: "M.Tech. POWER 2018",
        email: "eemtech2018power@iitrpr.ac.in",
      },
      { groupName: "M.Tech. VLSI 2021", email: "eemtech2021vlsi@iitrpr.ac.in" },
      { groupName: "M.Tech. VLSI 2020", email: "eemtech2020vlsi@iitrpr.ac.in" },
      { groupName: "M.Tech. VLSI 2019", email: "eemtech2019vlsi@iitrpr.ac.in" },
      { groupName: "SPCOM Faculty", email: "eefacultycomm@iitrpr.ac.in" },
      { groupName: "POWER Faculty", email: "eefacultypower@iitrpr.ac.in" },
      { groupName: "VLSI Faculty", email: "eefacultyvlsi@iitrpr.ac.in" },
    ],
  },
];

export default facultyData;
