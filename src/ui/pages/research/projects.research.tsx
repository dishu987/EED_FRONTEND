import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ResearchProjectsService from "../../../services/auth/research.projects";
import { useState } from "react";
import { getResearchProjectRequestAction } from "../../../store/reducers/slice/projects/research.projects";

const ResearchProjects: React.FC = () => {
  const projects = useSelector((state: any) => state.research_projects);
  const auth = useSelector((state: any) => state.getauth);
  const dispatch = useDispatch();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleProjectDelete = async (p_id: any) => {
    if (confirm("Are you sure want to delete?")) {
      setDeleteLoading(true);
      try {
        const res = await ResearchProjectsService.delete(
          auth?.data?.token,
          p_id
        );
        alert(res?.data?.message);
        dispatch(getResearchProjectRequestAction());
      } catch {
        alert("Something went wrong!");
      }
      setDeleteLoading(false);
    }
  };
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column  py-5">
      <h1 className="text-center main_head mb-5">
        Research <span> Projects</span>
      </h1>
      {deleteLoading && (
        <div className="spinner-border spinner-border-md mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}{" "}
      <div className="container">
        <table className="table table-bordered table-hover table-responsive table-striped">
          <thead>
            <tr className="table-dark">
              <td>Sr. No. </td>
              <td>Project Title</td>
              <td>Funding Agency</td>
              <td>Accociated Faculty</td>
              {auth.isSuccessful && <td>Action</td>}
            </tr>
          </thead>
          <tbody>
            {!projects.isLoading &&
              projects.data.map((item: any, i: number) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td className="fw-bold">{item?.title}</td>
                    <td>{item?.funding_agency}</td>
                    <td>
                      <Link
                        to={
                          auth.data.id === item?.userid
                            ? "/profile"
                            : `/view/${item?.userid}`
                        }
                      >
                        {auth.data.id === item?.userid
                          ? "My Profile"
                          : item.associated_faculty}
                      </Link>
                    </td>
                    {auth.isSuccessful && (
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-danger text-white dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={auth.data.id !== item?.userid}
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
                              >
                                <i className="fa-solid fa-pen-to-square"></i>{" "}
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item text-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#DeletePublicationModel"
                                onClick={() => handleProjectDelete(item.id)}
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
                );
              })}
            {projects.isLoading && "Loading..."}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchProjects;
