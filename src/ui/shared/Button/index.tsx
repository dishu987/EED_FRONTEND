import React from "react";
import "./style.css";

interface T {
  title: any;
  onClick: () => void;
}

const Button: React.FC<T> = ({ title, onClick }) => {
  return (
    <button className="btn41-43 btn-41" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
