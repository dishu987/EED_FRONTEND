import React, { useEffect, useState } from "react";
import CourseCard from "./course.card";
import CourseService from "../../../services/auth/courses";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface T {}

const CoursePage: React.FC<T> = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [notfound, setNotFound] = useState<boolean>(false);
  const auth = useSelector((state: any) => state.getauth);

  useEffect(() => {
    setSearch("");
    setNotFound(false);
    const handleCourses = async () => {
      setLoading(true);
      const res = await CourseService.getcourses(id);
      console.log(res);
      setCourses(res.data);
      setLoading(false);
    };
    handleCourses();
  }, [id]);
  return (
    <div className="row p-5 fade-in-custom">
      <h1 className="h1 text-center main_head mb-5">
        {id?.toUpperCase()} <br className="d-lg-none" />
        <span>Courses</span>
      </h1>
      <div className="">
        <label htmlFor="search" className="fw-bold h5">
          Search a Course
        </label>
        <input
          type="text"
          name="search"
          id="search"
          className="w-100 rounded-2 form-control  p-3 mb-3"
          style={{
            boxShadow: "none",
          }}
          value={search}
          placeholder="Search.."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="w-full">
        {notfound && (
          <div className="alert alert-danger mt-4 fade-in-custom" role="alert">
            Not items matched with
            <span className="text-red fw-bold mx-2">"{search}"</span>
          </div>
        )}
        <table
          className="table table-bordered table-striped  table-hover mt-0"
          id="courses_table"
        >
          <thead>
            <tr
              className="bg-dark text-white fw-bold"
              style={{ border: "1px solid #000" }}
            >
              <th className="heading h4">Code</th>
              <th className="heading h4">Title</th>
              <th className="heading h4">L-T-P-S-C</th>
              {auth.isSuccessful && <th className="heading h4 text-end"></th>}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              courses &&
              courses?.map((course: any, i) => {
                const { userid, title, description, code, ltpsc } = course;

                const matchesSearch =
                  !search ||
                  title?.toLowerCase().includes(search.toLowerCase()) ||
                  code?.toLowerCase().includes(search.toLowerCase()) ||
                  ltpsc?.toLowerCase().includes(search.toLowerCase()) ||
                  description?.toLowerCase().includes(search.toLowerCase());

                if (matchesSearch) {
                  return (
                    <CourseCard
                      key={i}
                      userid={userid}
                      title={title}
                      description={description}
                      code={code}
                      ltpsc={ltpsc}
                    />
                  );
                }

                return null;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePage;
