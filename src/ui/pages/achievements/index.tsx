import React, { useState } from "react";
import { fields } from "../../../constants/achievements";
import { handleSearch } from "../../../utils/search.table";
import { useDispatch, useSelector } from "react-redux";
import AchievementsService from "../../../services/auth/achievements";
import { getAchievementsRequestAction } from "../../../store/reducers/slice/achievements/achievements";

const Achievements: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [notfound, setNotFound] = useState<boolean>(false);
  const tableRows = Array.from(document.querySelectorAll("#table tr"));
  const achievements = useSelector((state: any) => state.achievements);
  const auth = useSelector((state: any) => state.getauth);
  const dispatch = useDispatch();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleDelete = async (p_id: any) => {
    if (confirm("Are you sure want to delete?")) {
      setDeleteLoading(true);
      try {
        const res = await AchievementsService.delete(auth?.data?.token, p_id);
        alert(res?.data?.message);
        dispatch(getAchievementsRequestAction());
      } catch {
        alert("Something went wrong!");
      }
      setDeleteLoading(false);
    }
  };
  return (
    <>
      <div className="container py-5">
        <h1 className="main_head text-center">Achievements</h1>
        <br />
        <div className="p-3 shadow-lg rounded-2 fade-in-custom">
          <div className="head">
            <div className="">
              <input
                type="text"
                name="search"
                id="search"
                className="w-100 rounded-2 form-control  p-3"
                style={{
                  boxShadow: "none",
                }}
                value={searchValue}
                placeholder="Search.."
                onChange={(e) =>
                  handleSearch(e, tableRows, setSearchValue, setNotFound)
                }
              />
            </div>
            {notfound && (
              <div
                className="alert alert-danger mt-4 fade-in-custom"
                role="alert"
              >
                Not items matched with
                <span className="text-red fw-bold mx-2">"{searchValue}"</span>
              </div>
            )}
            {deleteLoading ? (
              <div className="alert alert-warning mt-4 mb-0" role="alert">
                Please wait..
              </div>
            ) : null}
            <div className="w-100 overflow-auto">
              <table
                className="table fade-in-custom table-bordered my-4"
                id="table"
              >
                <thead className="bg-dark text-white">
                  <tr>
                    <th scope="col">Sr. No.</th>
                    {fields?.map((field, index) => {
                      return (
                        <th scope="col" key={index}>
                          {field}
                        </th>
                      );
                    })}
                    {auth.isSuccessful && auth.data.is_admin && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {!achievements.isLoading &&
                    achievements.isSuccessful &&
                    achievements?.data?.map((achievement: any, index: any) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{achievement.name}</td>
                          <td>{achievement.category}</td>
                          <td>{achievement.department}</td>
                          <td>{achievement.supervisor}</td>
                          <td
                            className="fw-bold"
                            style={{ color: "var(--shade4)" }}
                          >
                            {achievement.award}
                          </td>
                          {auth.isSuccessful && auth.data.is_admin && (
                            <td>
                              <button
                                className="btn btn-link text-danger"
                                style={{ boxShadow: "none" }}
                                onClick={() => {
                                  handleDelete(achievement?.id);
                                }}
                              >
                                {" "}
                                <i className="fa fa-trash mx-2"></i>
                                Delete
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
