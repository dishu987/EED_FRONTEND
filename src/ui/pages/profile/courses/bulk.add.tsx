import React, { ChangeEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Papa from "papaparse";
import instructions from "./../../../../assets/instructions_add_courses.png";
import CourseService from "../../../../services/auth/courses";

const AddCoursesBulk: React.FC = () => {
  const fileInputRef = useRef(null);
  const auth = useSelector((state: any) => state.getauth);
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<Array<Array<string>>>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      Papa.parse(selectedFile, {
        complete: (result) => {
          // Filter out empty rows
          const nonEmptyRows: any = result.data.filter((row: any) => {
            return Object.values(row).some((value) => value !== "");
          });
          setCsvData(nonEmptyRows);
        },
        header: true, // If CSV file has header row
      });
    }
  };
  const handleSubmit = async () => {
    setLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("csvFile", file);

      try {
        const res = await CourseService.add_bluk(auth.data?.token, formData);
        alert(res?.data?.message);
        console.log(res?.data);
      } catch (error) {
        alert("Error uploading file!");
        console.error("Error uploading file:", error);
      }
    } else {
      alert("No file selected");
    }
    setCsvData([]);
    if (fileInputRef.current) {
      (fileInputRef as any).current.value = null;
    }
    setFile(null);
    setLoading(false);
  };

  return (
    <>
      <div className="fade-in-custom">
        <div
          className="alert alert-warning p-3"
          role="alert"
          style={{ textAlign: "left" }}
        >
          <p className="h5 fw-bold">Instructions</p>
          <ul>
            <li>
              File must be a <strong className="text-danger">.csv</strong> File.{" "}
            </li>
            <li>
              Format of file must be -
              <br />
              <a href={instructions} target="_blank">
                <img
                  src={instructions}
                  alt="instructions"
                  srcSet={instructions}
                  width="70%"
                  className="rounded-3 shadow-sm my-2"
                />
              </a>
            </li>
          </ul>
        </div>
        <div
          className="alert alert-success p-3"
          role="alert"
          style={{ textAlign: "left" }}
        >
          <div className="input-group input-group-lg ">
            <input
              ref={fileInputRef}
              type="file"
              name="csvFile"
              className="form-control form-control-lg"
              id="csvFile"
              accept=".csv"
              onChange={handleFileChange}
            />
            <button
              className={`btn btn-${csvData.length ? "danger" : "secondary"}`}
              onClick={() => {
                if (confirm("Are you sure want to remove?")) {
                  setCsvData([]);
                  setFile(null);
                  if (fileInputRef.current) {
                    (fileInputRef as any).current.value = null;
                  }
                }
              }}
              disabled={csvData.length ? false : true}
            >
              Remove
            </button>
          </div>
        </div>
        {csvData.length > 0 && (
          <div className="my-3">
            <p className="h3 fw-bold text-danger">CSV File Preview: </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {Object.keys(csvData[0]).map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {csvData.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((cell, index) => (
                      <td key={index}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              className="alert alert-info"
              role="alert"
              style={{ textAlign: "left" }}
            >
              It will automatically skip Courses which are already exist.
            </div>
          </div>
        )}

        <button onClick={handleSubmit} className="btn btn-dark p-3 w-100 mt-3">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Import"
          )}
        </button>
      </div>
    </>
  );
};

export default AddCoursesBulk;
