import React, { useState } from "react";
import AddStudentsBulk from "./add.bulk";
import AddStudent from "./add.manually";

const AddStudents: React.FC = () => {
  const [addMethod, setAddMethod] = useState<number>(0);
  return (
    <>
      <div className="container w-100 d-flex justify-content-start align-items-start flex-column py-5">
        <div className="container card shadow-lg rounded-2 p-3 col-sm-12">
          <div className="h1 text-center mb-4">Add Students</div>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(e: any) => {
              setAddMethod(e.target.value);
            }}
          >
            <option value={0} selected>
              Select Method..
            </option>
            <option value={1}>Manually</option>
            <option value={2}>Bulk(by .csv file)</option>
          </select>{" "}
          {addMethod == 0 && (
            <p className="h3 fw-bold text-danger">Please select a method</p>
          )}
          {addMethod == 1 && <AddStudent />}
          {addMethod == 2 && <AddStudentsBulk />}
        </div>
      </div>
    </>
  );
};

export default AddStudents;
