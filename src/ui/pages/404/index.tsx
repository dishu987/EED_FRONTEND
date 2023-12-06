import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="container w-100 d-flex justify-content-center align-items-center flex-column py-5">
        <h1 className="text-center main_head">
          404 <span> Not Found!</span>
        </h1>
        <br />
        <p style={{ textAlign: "center" }} className="fw-bold h4 mb-5">
          Sorry! Page not found <i className="fa-regular fa-face-frown"></i>.
        </p>
        <Link to={"/"}>
          <Button title="Back to Home" onClick={() => {}} />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
