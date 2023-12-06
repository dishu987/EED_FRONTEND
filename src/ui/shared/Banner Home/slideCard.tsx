import React from "react";
import "./style.css";
import Button from "../Button";
import { slide_content } from "../../../constants/content.website";

interface T {
  data: {
    title?: string;
    subtitle?: string;
    image?: string;
  };
}

const SlideCard: React.FC<T> = ({ data }) => {
  return (
    <>
      <div
        className="banner_container "
        style={{
          backgroundImage: `url(${data?.image})`,
        }}
      >
        <div className="content ">
          <div className="subhead h3 ">{slide_content[0]}</div>
          <div className="heading h1">{slide_content[1]}</div>
          <div className="action_btn">
            <Button title="About" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideCard;
