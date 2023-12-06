import React from "react";
import { title } from "../../../constants/basic";
import { Link } from "react-router-dom";
const AboutUs: React.FC = () => {
  return (
    <>
      <div className="my-5">
        <div className="h5 text-center main_head ">
          <span>Welcome to</span>
          <br />
          <small>{title}</small>
        </div>
        <div className="container my-5">
          <p>
            Department imparts the knowledge in three programs, a Bachelors
            programme with a total intake of 60 students per academic year, a
            Master of Technology and a Doctoral (Ph.D.) programme to upskill
            technical and research excellence in specialized avenues of
            Electrical Engineering.
          </p>

          <br />
          <div className="w-100">
            <h1
              className="h3 fw-bold underline"
              style={{ width: "fit-content" }}
            >
              Objectives
            </h1>
            <ul className="my-5 list-unstyled">
              <li className="d-flex">
                <div className="mx-2">
                  <i className="fa-regular fa-lightbulb"></i>
                </div>
                To upskill the undergraduate and postgraduate students in
                Electrical Engineering.
              </li>
              <li className="d-flex">
                <div className="mx-2">
                  <i className="fa-regular fa-lightbulb"></i>
                </div>
                To come up with excellent research in broad areas of Electrical
                Engineering.
              </li>
            </ul>
          </div>
          <p>
            The undergraduate program delivers the wide knowledge of Electrical
            Engineering in four broad areas like communication technology,
            control technology, electronics, and power & energy. To enhance the
            students with wide knowledge, the department provides different
            elective courses which are designed for the interested students. In
            addition to the undergraduate program, the department plays a vital
            role to bring forth the world-class postgraduates and researchers.
            The Masters program provides the students with a strong knowledge of
            three different areas of Electrical Engineering that are Signal
            Processing and Communication, Power Engineering and VLSI. There are
            around 120 research scholars working to solve the challenging
            problems in different areas of Electrical Engineering. The
            department always upgrades the experimental and computational
            facilities for taking up research & development and consultancy
            activities in various fields so as to produce state-of-the-art
            research output.
          </p>
          <p>
            Faculty members of the department are active in several research
            areas, such as; Renewable Energy, Communication, Signal and Image
            processing, Power Systems, High Voltage Engineering,
            Nano-Dielectrics, Space Charges in Dielectrics, interconnect design
            for chips, multi-core architecture, materials for high-speed
            circuits, Analog, RF and Mixed-Signal VLSI Circuits and Systems,
            Computer Vision, Deep Learning and Medical Image Processing.
          </p>
          <Link
            to="https://iitrpr.ac.in/ee/images/custom/about/sideview.jpg"
            target="_blank"
          >
            <img
              className="w-100 overlay_black rounded-4  my-3 hover-scale-down"
              src="https://iitrpr.ac.in/ee/images/custom/about/sideview.jpg"
              alt=""
              srcSet="https://iitrpr.ac.in/ee/images/custom/about/sideview.jpg"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
