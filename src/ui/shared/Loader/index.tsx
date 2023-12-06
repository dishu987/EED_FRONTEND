import React from "react";
import logo1 from "./../../../assets/news/footer_logo.svg";
import "./style.css";
import { title } from "../../../constants/basic";
const MainLoader: React.FC = () => {
  return (
    <div className="h-100vh d-flex justify-content-center align-items-center w-100 flex-column bg-logo position-fixed top-0 loader_container">
      <img src={logo1} alt="Main_logo" srcSet={logo1} className="loader_anm" />
      <h1 className="fw-bold mt-5 h1 loader_anm anim-typewriter line-1">
        {title}
      </h1>
    </div>
  );
};

export default MainLoader;
