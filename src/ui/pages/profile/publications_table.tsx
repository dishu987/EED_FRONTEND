import { useEffect, useState } from "react";
import DataTable from "datatables.net-dt";
import PublicationsService from "../../../services/auth/publications";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleShare } from "../../../utils/share.api";
import AlertModel from "../../shared/Model";
import * as XLSX from "xlsx";

const PublicationTableData: React.FC<{ loading1: boolean; refAs: string }> = ({
  loading1,
  refAs,
}) => {
  const auth = useSelector((state: any) => state.getauth);
  const [publications, setPublications] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [deleteid, setdeleteid] = useState<any>(null);
  const handlePublications = async () => {
    try {
      const res = await PublicationsService.getuserpublications(
        auth?.data?.token
      );
      console.log(res);
      if (res.data) {
        setPublications(res.data);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    let x = new DataTable("#example");
    x = x;
    handlePublications();
  }, [loading1]);
  function formatData(data: any) {
    return data.map((item: any) => {
      const { id, userid, ...rest } = item;
      const contributors = item?.contributors
        ?.substring(1, item?.contributors?.length - 1)
        .replace(/"/g, "");
      return {
        ...rest,
        contributors: contributors,
      };
    });
  }

  const exportToXLSX = () => {
    const formatted_data = formatData(publications);
    console.log(formatted_data);
    const ws = XLSX.utils.json_to_sheet(formatted_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(
      wb,
      `publications_${auth?.data?.name}_${auth?.data?.email}.xlsx`
    );
  };
  const handleDeletePublication = async () => {
    try {
      const formData = new FormData();
      console.log(deleteid);
      formData.append("id", deleteid ? deleteid : "NA");
      const res = await PublicationsService.deletepublications(
        auth.data.token,
        formData
      );
      console.log(res);
      if (res?.data.success === 1) {
        alert(res?.data.message);
        handlePublications();
      } else {
        alert(res?.data.message);
      }
    } catch (err) {
      alert("Error while deleting the Publication!!");
    }
    setdeleteid(null);
  };
  return (
    <>
      <div className="w-100 d-flex justify-content-end pb-3">
        <button
          type="button"
          className="btn btn-light w-100"
          onClick={exportToXLSX}
          style={{ boxShadow: "none" }}
        >
          <i className="fa-solid fa-file-export"></i> Export {refAs}(.xlsx)
        </button>
      </div>
      {!loading && (
        <>
          {" "}
          <table
            id="example"
            className="table table-striped"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Year</th>
                <th>Society</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                Object.keys(publications)?.map((p: any, i: any) => {
                  return (
                    <tr key={i}>
                      <td>{publications[p].title} </td>
                      <td>
                        <ul>
                          {p?.contributors != "NA" && (
                            <>
                              {publications[p]?.contributors &&
                                JSON.parse(publications[p]?.contributors)?.map(
                                  (c: any, i: any) => {
                                    if (i < 3) {
                                      return (
                                        <li key={i}>
                                          <span className="p-1 fw-bold">
                                            {c}
                                          </span>{" "}
                                        </li>
                                      );
                                    }
                                  }
                                )}
                              {publications[p]?.contributors &&
                                JSON.parse(publications[p]?.contributors)
                                  .length > 3 && (
                                  <>
                                    <button
                                      type="button"
                                      className="btn btn-link"
                                      style={{ boxShadow: "none" }}
                                      data-bs-toggle="modal"
                                      data-bs-target={`#modalPublication${i}`}
                                    >
                                      More (
                                      {JSON.parse(publications[p]?.contributors)
                                        .length - 3}
                                      )
                                    </button>

                                    <div
                                      className="modal fade"
                                      id={`modalPublication${i}`}
                                      tabIndex={-1}
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="exampleModalLabel"
                                            >
                                              Publication Contributors (
                                              {
                                                JSON.parse(
                                                  publications[p]?.contributors
                                                ).length
                                              }
                                              )
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            />
                                          </div>
                                          <div className="modal-body">
                                            {" "}
                                            <div className="p-3">
                                              <ol>
                                                {p?.contributors != "NA" &&
                                                  JSON.parse(
                                                    publications[p]
                                                      ?.contributors
                                                  )?.map((c: any, i: any) => {
                                                    return (
                                                      <li key={i}>
                                                        <span className="p-1">
                                                          {c}
                                                        </span>{" "}
                                                      </li>
                                                    );
                                                  })}
                                              </ol>
                                            </div>
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                            </>
                          )}
                        </ul>
                      </td>
                      <td>{publications[p].year}</td>
                      <td>{publications[p].society}</td>
                      <td>{publications[p].type}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-warning text-white dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Action
                          </button>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <Link
                                className="dropdown-item text-warning"
                                target="_blank"
                                to={publications[p].link}
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>{" "}
                                Open
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item text-info disabled"
                                style={{
                                  cursor: "not-allowed",
                                }}
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
                                onClick={() => setdeleteid(publications[p]?.id)}
                              >
                                {" "}
                                <i className="fa-solid fa-trash-can"></i> Delete
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="dropdown-item text-success"
                                onClick={() =>
                                  handleShare(
                                    publications[p]?.link,
                                    publications[p]?.title
                                  )
                                }
                              >
                                {" "}
                                <i className="fa-solid fa-share"></i> Share
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Authors</th>
                <th>Year</th>
                <th>Society</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </>
      )}
      <AlertModel
        btntext="Yes"
        medelId="DeletePublicationModel"
        onPressOK={handleDeletePublication}
        title="Are you sure you want to delete this Publication? This action cannot be undone."
      />
    </>
  );
};

export default PublicationTableData;
