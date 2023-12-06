import React from "react";
import { gmap, title } from "../../../constants/basic";
import { Contact } from "../../../constants/footer.data";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="px-3 my-5">
        <h1 className="text-center main_head mb-4">
          Contact <span>Us</span>
        </h1>

        <div className="row mx-3">
          <div className="col-sm-8">
            <iframe
              src={gmap}
              width="100%"
              height={"500px"}
              style={{ border: "none" }}
              allowFullScreen
            />
          </div>
          <div className="col-sm-4" id="contact2">
            <h3 className="fw-bold h1">{title}</h3>
            <hr className="text-left w-50" />
            <h4 className="pt-2">Address</h4>
            <i className="fas fa-globe mr-3" style={{ color: "#000" }} />
            {Contact.address}
            <br />
            <h4 className="pt-2">Mobile</h4>
            <i className="fas fa-phone" style={{ color: "#000" }} />{" "}
            <a href="tel:+"> {Contact.mobile}</a>
            <br />
            <h4 className="pt-2">Email</h4>
            <i className="fa fa-envelope" style={{ color: "#000" }} />{" "}
            <a href="">{Contact.email}</a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
