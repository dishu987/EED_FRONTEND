import React from "react";
import { gmap, title } from "../../../constants/basic";
import {
  Contact,
  Legal,
  Opportunities,
  Other_Links,
  Quick_Links,
} from "../../../constants/footer.data";
import logo_full from "./../../../assets/news/logo_full.jpg";
import { theme } from "../../../constants/theme.options";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);
  const handletheme = (e: any) => {
    const link = (document as any).querySelector('link[class="theme"]');
    link.href = `./src/ui/theme/${e.target.value}.css`;
    console.log(e.target.value);
  };
  return (
    <footer
      className="text-center text-lg-start text-white h-100vh d-flex justify-content-between align-items-stretch flex-column"
      style={{ backgroundColor: "var(--dark)" }}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "var(--shade2)" }}
      >
        <div className="me-5">
          <span className="fw-bold">Get connected on social networks</span>
        </div>
        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <img
                src={logo_full}
                alt="logo_iitrpr"
                srcSet={logo_full}
                style={{
                  width: "auto",
                  backgroundColor: "#fff",
                  height: "200px",
                }}
                className="rounded-2 p-1"
              />
              <h6 className="text-uppercase fw-bold h2 mt-4">{title}</h6>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold underline mb-3"
                style={{ color: "var(--shade2)" }}
              >
                Quick Links
              </h6>
              {Quick_Links.map((qlink, i) => {
                return (
                  <p key={i}>
                    <Link
                      to={qlink.link}
                      className="text-white underline-hover"
                    >
                      {qlink.title}
                    </Link>
                  </p>
                );
              })}
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold underline mb-3"
                style={{ color: "var(--shade2)" }}
              >
                Opportunities
              </h6>
              {Opportunities.map((op, i) => {
                return (
                  <p key={i}>
                    <Link to={op.link} className="text-white underline-hover">
                      {op.title}
                    </Link>
                  </p>
                );
              })}
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6
                className="text-uppercase fw-bold underline mb-3"
                style={{ color: "var(--shade2)" }}
              >
                Other Links
              </h6>
              {Other_Links.map((other, i) => {
                return (
                  <p key={i}>
                    <Link
                      to={other.link}
                      className="text-white underline-hover"
                    >
                      {other.title}
                    </Link>
                  </p>
                );
              })}
              {!auth?.isSuccessful && (
                <p>
                  <Link to={"/login"} className="text-white underline-hover">
                    Administrative Login
                  </Link>
                </p>
              )}
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6
                className="text-uppercase fw-bold h3 mb-3"
                style={{ color: "var(--shade2)" }}
              >
                {Contact.title}
              </h6>
              <p>
                <i className="fas fa-home mr-5" /> {Contact.address}
              </p>
              <p>
                <i className="fas fa-envelope mr-5" /> {Contact.email}
              </p>
              <p>
                <i className="fas fa-phone mr-5" />
                {Contact.mobile}
              </p>
              <p>
                <i className="fas fa-print mr-5" /> {Contact.fax}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <iframe
          src={gmap}
          width="100%"
          height={"400px"}
          style={{ border: "none" }}
          allowFullScreen
        />
      </div>
      <div
        className="container text-center pb-4 "
        style={{ backgroundColor: "var(--dark)", color: "var(--light)" }}
      >
        <hr />
        <div className="d-flex justify-content-between  align-items-center">
          <div className="">
            {/* Designed & Developed by{" "}
            <a
              href={Legal.developedby.link}
              className="text-white underline-hover"
            >
              {Legal.developedby.name}
            </a> */}
            <p>
              <select
                name="Theme"
                id=""
                className="lang rounded-2 p-1 mx-1"
                title="theme"
                onChange={handletheme}
              >
                {theme.map((th, i) => {
                  return (
                    <option value={th.value} key={i}>
                      {th.label}
                    </option>
                  );
                })}
              </select>
            </p>
          </div>
          <div>
            {Legal.copyright.text}
            {Legal.copyright.year}
            <a
              className="mx-2 fw-bold underline-hover"
              href={Legal.copyright.link}
              target={Legal.copyright.target}
              style={{ color: "var(--shade2)" }}
            >
              {Legal.copyright.by}
            </a>
          </div>
          <div className="ml-5">Last Updated - {Legal.lastupdated}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
