interface Lab {
  id: number;
  labName: string;
  facultyInCharge: string;
  website: string;
}

// Power Engineering Labs
const powerEngineeringLabs: Lab[] = [
  {
    id: 1,
    labName: "Dielectric Measurements Lab",
    facultyInCharge: "Dr. C C Reddy",
    website: "#",
  },
  {
    id: 2,
    labName: "Electric Drives and Renewable Energy Lab",
    facultyInCharge: "Dr. A V Ravi Teja",
    website: "#",
  },
  {
    id: 3,
    labName: "Electric Machine Design and Drives Lab",
    facultyInCharge: "Dr. Saifullah Payami",
    website: "#",
  },
  {
    id: 4,
    labName: "Renewable Power Modulation Lab",
    facultyInCharge: "Dr. K Ramachandra Sekhar",
    website: "#",
  },
  {
    id: 5,
    labName: "Smart Grid Lab",
    facultyInCharge: "Dr. J Kalaiselvi",
    website: "#",
  },
  {
    id: 6,
    labName: "SYnchrophasor Measurement And Research (SYMAR) Lab",
    facultyInCharge: "Dr. Ranjana Sodhi",
    website: "#",
  },
];

// Signal Processing and Communications Labs
const signalProcessingLabs: Lab[] = [
  {
    id: 1,
    labName: "AMR Lab: Antenna and Microwave Research Lab",
    facultyInCharge: "Dr. Ashwani Sharma",
    website: "#",
  },
  {
    id: 2,
    labName: "Communication Research Lab",
    facultyInCharge: "Dr. Sam Darshi & Dr. Brijesh Kumbhani",
    website: "#",
  },
  {
    id: 3,
    labName: "Computer Vision & Pattern Recognition Lab",
    facultyInCharge: "Dr. Subrahmanyam Murala and Dr. Santosh K Vipparthi",
    website: "#",
  },
  {
    id: 4,
    labName: "Advance Research in Communications",
    facultyInCharge: "Dr. Satyam Agarwal",
    website: "#",
  },
  {
    id: 5,
    labName: "Embedded Systems Lab",
    facultyInCharge: "Prof. J S Sahambi",
    website: "#",
  },
];

// Microelectronics and VLSI Design Labs
const microelectronicsLabs: Lab[] = [
  {
    id: 1,
    labName: "Computational-Nanoelectronics lab",
    facultyInCharge: "Dr. Abhishek Sharma",
    website: "#",
  },
  {
    id: 2,
    labName: "Integrated System Design Lab (ISDL)",
    facultyInCharge: "Dr. Devarshi Das",
    website: "#",
  },
  {
    id: 3,
    labName: "Nanoelectronics Research Lab",
    facultyInCharge: "Dr. Rohit Sharma",
    website: "#",
  },
];

export { powerEngineeringLabs, signalProcessingLabs, microelectronicsLabs };
