import { researchAreas } from "../../../constants/research.areas";

const ResearchAreas: React.FC = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column  py-5">
      <h1 className="text-center main_head mb-5">
        Areas of <span> Research</span>
      </h1>
      <div className="container">
        <p className="mb-3">
          Research Areas The Faculty members of the department are currently
          active in various research areas, listed as under:
        </p>
        <table className="table table-bordered table-hover table-responsive table-striped">
          <thead>
            <tr className="table-dark">
              <td>Sr. No. </td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {researchAreas.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td key={i} className="fw-bold">
                    {item.name}
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

export default ResearchAreas;
