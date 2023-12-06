import React, { useEffect, useState } from "react";
import "./style.css";
import UserProfileService from "../../../services/auth/profile";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../../../utils/api.constants";
import { Link } from "react-router-dom";
import EditProfile from "./edit.profile";
import PublicationTableData from "./publications_table";
import AddPublication from "./publications/add";
import { FormatEmail } from "../../../utils/format.email";
import AddResearchProjects from "./research projects/add";
import AddAchievements from "./achievements/add";

const ProfilePage: React.FC = () => {
  const auth = useSelector((state: any) => state.getauth);

  const [profile, setProfile] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const handleProfile = async () => {
      try {
        const res = await UserProfileService.getprofile(auth?.data?.token);
        if (res?.data?.success === 1) {
          setProfile(res.data?.user);
          if (res.data?.user.profile_image == "#") {
            alert(
              "You are a new user, update yours profile by Edit Profile Section!!"
            );
          }
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    handleProfile();
  }, []);

  return (
    <>
      <section className="section about-section gray-bg m-5" id="about">
        <div className="">
          <div className="row align-items-start">
            <div className="col-lg-4">
              <div className="about-avatar py-4">
                <a
                  target="_blank"
                  href={
                    !loading
                      ? BACKEND_URL + "/users/" + profile.profile_image
                      : "data:image/png;base64,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"
                  }
                >
                  <img
                    src={
                      !loading && profile.profile_image != "#"
                        ? BACKEND_URL + "/users/" + profile.profile_image
                        : "data:image/png;base64,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"
                    }
                    title=""
                    alt=""
                    className="w-50 shadow-lg hover-scale-up rounded-2"
                  />
                </a>
              </div>

              <div className="about-text go-to">
                <h3 className="dark-color">{profile?.name}</h3>
                <h6 className="theme-color lead">
                  <span className="badge bg-secondary mx-1">
                    {profile?.designation}
                  </span>
                  {profile?.is_admin ? (
                    <span className="badge bg-success fw-bold">Admin</span>
                  ) : null}
                </h6>
                <p>
                  <strong>Subject:</strong>
                  <span className="mx-1">{profile?.subject}</span>
                </p>
                <div className="d-flex flex-row gap-2 my-3 flex-wrap">
                  <p>
                    <div className="dropdown">
                      <button
                        className="btn btn-warning text-white dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions
                      </button>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <p className="mx-2 fw-bold m-0 p-0">
                            General Actions
                          </p>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>

                        <li>
                          <Link
                            to={"#"}
                            className="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#addProjectModal"
                          >
                            Add Research Project
                          </Link>
                        </li>
                        <li>
                          <Link to="/add-news" className="dropdown-item">
                            Add News
                          </Link>
                        </li>
                        <li>
                          <Link to="/add-course" className="dropdown-item">
                            Add Course
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        {profile?.is_admin ? (
                          <>
                            <li>
                              <p className="mx-2 fw-bold m-0 p-0">
                                Admin Actions
                              </p>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <Link to="/users" className="dropdown-item">
                                Manage Users
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={"#"}
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#addAchievementModal"
                              >
                                Add Achievements
                              </Link>
                            </li>
                            <li>
                              <Link to="/faculty-add" className="dropdown-item">
                                Add Faculty(Manually)
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/faculty-add-bulk"
                                className="dropdown-item"
                              >
                                Add Faculty(Bulk)
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/students-add"
                                className="dropdown-item"
                              >
                                Add Students
                              </Link>
                            </li>
                            <li>
                              <Link to="/staff-add" className="dropdown-item">
                                Add Staff
                              </Link>
                            </li>
                          </>
                        ) : null}
                      </ul>
                    </div>
                  </p>
                  <p>
                    <Link
                      to={loading ? "NA" : "/change-password"}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-key"></i> Change Password
                    </Link>
                  </p>
                  <p aria-disabled="true">
                    <Link
                      to={"#"}
                      className="btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#editProfileModal"
                    >
                      <i className="fa-regular fa-pen-to-square"></i> Edit
                      Profile
                    </Link>
                  </p>
                </div>

                <p>
                  <strong>Research Interests:</strong>
                  <span className="mx-1"> {profile?.research_interests}</span>
                </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Homepage</label>
                      <p>
                        <a
                          target="_blank"
                          href={
                            loading
                              ? "NA"
                              : profile?.homepage === "NA"
                              ? "#"
                              : profile?.homepage
                          }
                        >
                          {profile?.homepage}
                        </a>
                      </p>
                    </div>
                    <div className="media">
                      <label>Mobile</label>
                      <p>{profile?.mobile}</p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>IIT Ropar</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media overflow-auto">
                      <label>Email</label>
                      <a target="_blank" href={"mailto:" + profile?.email}>
                        {loading ? "" : FormatEmail(profile?.email)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 rounded-3 shadow-sm border-1 border-dark p-3">
              <div className="col-sm-12 d-flex justify-content-between align-items-center">
                {" "}
                <h1 className="h3 text-secondary my-3 fw-bold">Publications</h1>
                <div className="gap-1 d-flex">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#addPublicationModal"
                  >
                    <i className="fa-solid fa-plus"></i> Add
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fa-solid fa-refresh"></i>
                  </button>
                </div>
              </div>

              <div className="col-sm-12 w-100 overflow-auto">
                <PublicationTableData loading1={loading} refAs="Publications" />
              </div>
            </div>
            {/* <div className="col-lg-12 rounded-3 shadow-sm border-1 border-dark p-3">
              <div className="col-sm-12 d-flex justify-content-between align-items-center">
                {" "}
                <h1 className="h3 text-secondary my-3 fw-bold">My Courses</h1>
                <div className="gap-1 d-flex">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#addPublicationModal"
                  >
                    <i className="fa-solid fa-plus"></i> Add New
                  </button>
                  <button type="button" className="btn btn-secondary">
                    <i className="fa-solid fa-refresh"></i>
                  </button>
                </div>
              </div>

              <div className="col-sm-12 w-100 overflow-auto">
                <PublicationTableData loading1={loading} refAs="Courses" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        tabIndex={-1}
        id="editProfileModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-target="#editProfileModal"
              />
            </div>
            <div className="modal-body">
              <EditProfile profile={profile} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex={-1}
        id="addPublicationModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">New Publication</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-target="#addPublicationModal"
              />
            </div>
            <div className="modal-body">
              <AddPublication />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex={-1}
        id="addProjectModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">New Project</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-target="#addProjectModal"
              />
            </div>
            <div className="modal-body">
              <AddResearchProjects />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex={-1}
        id="addAchievementModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">New Award</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                data-bs-target="#addAchievementModal"
              />
            </div>
            <div className="modal-body">
              <AddAchievements />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
