import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface T {
  code: string;
  title: string;
  ltpsc: string;
  description: string;
  userid: string;
}

const CourseCard: React.FC<T> = ({
  code,
  title,
  ltpsc,
  description,
  userid,
}) => {
  const auth = useSelector((state: any) => state.getauth);
  return (
    <>
      <tr className="course_card_head course_row courses_rows">
        <td className="border-0">{code}</td>
        <td className="border-0">{title}</td>
        <td className="text-danger border-0">{ltpsc}</td>
        {auth?.isSuccessful && (
          <td className="text-danger border-0 text-end">
            <div className="dropdown">
              <button
                className="btn btn-danger text-white dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                disabled={auth.data.id !== userid}
              >
                Action
              </button>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link
                    to="#"
                    className="dropdown-item text-info disabled"
                    style={{
                      cursor: "not-allowed",
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="dropdown-item text-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#DeletePublicationModel"
                    // onClick={() => setdeleteid(publications[p]?.id)}
                  >
                    {" "}
                    <i className="fa-solid fa-trash-can"></i> Delete
                  </Link>
                </li>
              </ul>
            </div>
          </td>
        )}
      </tr>
      <tr className="text-muted course_card_desc courses_rows">
        <td colSpan={4}>{description}</td>
      </tr>
    </>
  );
};

export default CourseCard;
