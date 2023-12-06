import {
  microelectronicsLabs,
  powerEngineeringLabs,
  signalProcessingLabs,
} from "../../../constants/facilities.research";

const ResearchFacilities: React.FC = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column  py-5">
      <h1 className="text-center main_head mb-5">
        Research <span> Facilities</span>
      </h1>
      <div className="container">
        <p className="mb-3">
          The Department undertakes a continuous process of setting up
          experimental and computational facilities for taking up research &
          development and consultancy activities in various fields as also to
          produce state-of-the-art research output. There are several advanced
          Research Labs available in the Department which ensure the best and
          accurate Research work is obtained from the student as well as the
          faculty members.
        </p>
        <h4 className="fw-bold mb-4">Power Engineering Labs</h4>
        <table className="table table-bordered table-hover table-responsive table-striped mb-4">
          <thead>
            <tr className="table-dark">
              <td>Sr. No. </td>
              <td>Lab Name </td>
              <td>Faculty-in-Charge</td>
              <td>Website</td>
            </tr>
          </thead>
          <tbody>
            {powerEngineeringLabs.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td key={i} className="fw-bold">
                    {item.labName}
                  </td>
                  <td>{item.facultyInCharge}</td>
                  <td>
                    <a href={item.website} target="_blank">
                      Click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4 className="fw-bold mb-4">
          Signal Processing and Communications Labs
        </h4>
        <table className="table table-bordered table-hover table-responsive table-striped mb-4">
          <thead>
            <tr className="table-dark">
              <td>Sr. No. </td>
              <td>Lab Name </td>
              <td>Faculty-in-Charge</td>
              <td>Website</td>
            </tr>
          </thead>
          <tbody>
            {signalProcessingLabs.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td key={i} className="fw-bold">
                    {item.labName}
                  </td>
                  <td>{item.facultyInCharge}</td>
                  <td>
                    <a href={item.website} target="_blank">
                      Click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h4 className="fw-bold mb-4">Microelectronics and VLSI Design Labs</h4>
        <table className="table table-bordered table-hover table-responsive table-striped">
          <thead>
            <tr className="table-dark">
              <td>Sr. No. </td>
              <td>Lab Name </td>
              <td>Faculty-in-Charge</td>
              <td>Website</td>
            </tr>
          </thead>
          <tbody>
            {microelectronicsLabs.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td key={i} className="fw-bold">
                    {item.labName}
                  </td>
                  <td>{item.facultyInCharge}</td>
                  <td>
                    <a href={item.website} target="_blank">
                      Click here
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchFacilities;
