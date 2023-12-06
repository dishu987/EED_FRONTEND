import React, { useState } from "react";
import "./style.css";
import { AdmissionsData } from "../../../constants/admissions";
const Admissions: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const handleTabChange = (index: number) => {
    setActive(index);
  };
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <h4 className="main_head h3 text-center">
            Admission <span>Criteria & Eligibility</span>
          </h4>
          <p className="my-5">
            Department imparts the knowledge in three programs, a{" "}
            <b>Bachelors programme</b> with a total intake of 85 students per
            academic year, a <b>Master of Technology and a Doctoral (Ph.D.) </b>
            programme to upskill technical and research excellence in
            specialized avenues of Electrical Engineering.
          </p>
        </div>
        <div className="bg-dark p-3 rounded-4 position-sticky top-0">
          <ul className="nav nav-pills nav-fill">
            {AdmissionsData.map((data, i) => {
              return (
                <li className="nav-item" key={i}>
                  <span
                    className={`nav-link ${active === i && "active_tab"}`}
                    aria-current="page"
                    onClick={() => handleTabChange(i)}
                    aria-disabled="true"
                  >
                    {data.degree}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-4 mx-2 mx-lg-0">
          <h2 className="fw-bold h3 fade-in-custom">
            {AdmissionsData[active].degree}
          </h2>
          <p className="fade-in-custom">{AdmissionsData[active].description}</p>
          <div className="fade-in-custom">
            For more information about <b>{AdmissionsData[active].degree}</b>,
            visit:
            <ul>
              {AdmissionsData[active].links &&
                AdmissionsData[active].links.map((link, i) => {
                  return (
                    <li key={i}>
                      {" "}
                      <a href={link} target="_blank">
                        {link}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
