interface PowerEngineeringLab {
  id: number;
  name: string;
  location: string;
  associatedFaculty: string;
}

const LabsNames = [
  "Power Engineering",
  "Signal Processing & Communication",
  "Microelectronics and VLSI Design",
];

// Power Engineering Labs
const powerEngineeringLabs: PowerEngineeringLab[] = [
  {
    id: 1,
    name: "Electric Machines (UG)",
    location: "Room No. : 101, Ground Floor",
    associatedFaculty: "Dr. Saifullah Payami",
  },
  {
    id: 2,
    name: "High Voltage (PG)",
    location: "Room No. : 102, Ground Floor",
    associatedFaculty: "Dr. C.C. Reddy",
  },
  {
    id: 3,
    name: "Power Electronics (UG+ PG)",
    location: "Room No. : 104, Ground Floor",
    associatedFaculty: "Dr. R Sekhar",
  },
  {
    id: 4,
    name: "Drives Lab",
    location: "Room No. : 106, Ground Floor",
    associatedFaculty: "TBA",
  },
  {
    id: 5,
    name: "Controls + Instrumentation (UG)",
    location: "Room No. : 202, First Floor",
    associatedFaculty: "Dr. Sanjay Roy",
  },
  {
    id: 6,
    name: "Power Systems (UG + PG)",
    location: "Room No. : 203, First Floor",
    associatedFaculty: "Dr. Ranjna Sohi, Dr. Bibhu",
  },
  {
    id: 7,
    name: "SYnchrophasor Measurement And Research (SYMAR) Lab",
    location: "Room No. : 205, First Floor",
    associatedFaculty: "Dr. Ranjna Sodhi",
  },
  {
    id: 8,
    name: "Dielectric Measurement Lab",
    location: "Room No. : 406, Third Floor",
    associatedFaculty: "Dr. C.C. Reddy",
  },
  {
    id: 9,
    name: "GEL Lab",
    location: "Room No. : 409, Third Floor",
    associatedFaculty: "Dr. Saifullah Pyami",
  },
];

// Signal Processing and Communication Labs
const signalProcessingLabs: PowerEngineeringLab[] = [
  {
    id: 1,
    name: "Embedded System Lab",
    location: "Room No. : 206, First Floor",
    associatedFaculty: "Dr. J.S. Sahambi",
  },
  {
    id: 2,
    name: "Infra Red Imaging Lab",
    location: "Room No. : 207, First Floor",
    associatedFaculty: "Dr. Ravibabu",
  },
  {
    id: 3,
    name: "Communication Engg. Lab (UG + PG)",
    location: "Room No. : 301, Second Floor",
    associatedFaculty: "Dr. Suman Kumar",
  },
  {
    id: 4,
    name: "Electromagnetics Lab (UG)",
    location: "Room No. : 303, Second Floor",
    associatedFaculty:
      "Dr. Ashwani Sharma, Dr. Vinayak Hande, Dr. Devarshi Das, Dr. M. Sakre",
  },
  {
    id: 5,
    name: "Antenna/ MW Lab",
    location: "Room No. : 304, Second Floor",
    associatedFaculty: "Dr. Ashwani Sharma",
  },
  {
    id: 6,
    name: "Computer Vision and Pattern Recognition Lab",
    location: "Room No. : 405, Third Floor",
    associatedFaculty: "Dr. Subrahmanyam Murala, Dr. Santosh K Vipparthi",
  },
  {
    id: 7,
    name: "Communication Research Lab",
    location: "Room No. : 407, Third Floor",
    associatedFaculty:
      "Dr. Suman Kumar, Dr. Sam Darshi, Dr. Brajesh Kumbhani, Dr. Satyam Aggarwal",
  },
];

// Microelectronics and VLSI Design Labs
const microelectronicsLabs: PowerEngineeringLab[] = [
  {
    id: 1,
    name: "Analog + Digital (UG)",
    location: "Room No. : 201, First Floor",
    associatedFaculty: "Dr. Mahendra Sakare",
  },
  {
    id: 2,
    name: "VLSI Lab",
    location: "Room No. : 302, Second Floor",
    associatedFaculty:
      "Dr. Rohit Sharma, Dr. Devarshi Das, Dr. Mahendra Sakare",
  },
  {
    id: 3,
    name: "VLSI Wet Lab",
    location: "Room No. : 401, Third Floor",
    associatedFaculty:
      "Dr. Rohit Sharma, Dr. Devarshi Das, Dr. Mahendra Sakare",
  },
  {
    id: 4,
    name: "VLSI Characterization Lab",
    location: "Room No. : 403, Third Floor",
    associatedFaculty: "Dr. Pardeep Duhan, Dr. Abhishek Sharma",
  },
  {
    id: 5,
    name: "Product Eng. Lab",
    location: "Room No. : 404, Third Floor",
    associatedFaculty: "Dr. Brajesh Rawat",
  },
  {
    id: 6,
    name: "BEL Lab",
    location: "Room No. : 408, Third Floor",
    associatedFaculty: "Dr. Mahendra Sakare",
  },
];

export {
  LabsNames,
  powerEngineeringLabs,
  signalProcessingLabs,
  microelectronicsLabs,
};
