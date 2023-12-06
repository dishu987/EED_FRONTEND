import React from "react";
import "./style.css";
import Button from "../Button";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CourseOfferedData } from "../../../constants/course.offered";

const CoursesOffered: React.FC = () => {
  return (
    <div
      className="px-4 py-5 border-bottom1"
      id="custom-cards"
      style={{ backgroundColor: "var(--dark)" }}
    >
      <h2 className="pb-2 main_head text-center text-white">
        Courses <span>Offered</span>
      </h2>
      <p className="text-center text-secondary fw-bold">
        <small>
          {" "}
          See the breakdown of various courses offered respectively in below
          programmes
        </small>
      </p>
      <div className="d-flex align-items-stretch h-100 w-100 justify-content-center gap-5 my-5 flex-wrap">
        {CourseOfferedData.map((course, index) => {
          return (
            <div
              className="card-width card card-cover overflow-hidden  text-white bg-dark rounded-5 shadow-lg  overlay_black hover-scale-up"
              style={{
                backgroundImage: `url(${course.image})`,
                height: "100% !important",
                padding: "0",
                border: "1px solid #000",
              }}
              key={index}
            >
              <div
                className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1"
                style={{ zIndex: "5" }}
              >
                <h2 className="pt-5  mb-4 display-7 lh-1 fw-bold h-100 text-center">
                  {course.name}
                </h2>
              </div>

              <Button
                title="Open"
                onClick={() => {
                  location.href = course.path;
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesOffered;
