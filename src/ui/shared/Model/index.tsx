interface T {
  medelId: string;
  title: string;
  body?: any;
  btntext: string;
  onPressOK: any;
}
const AlertModel: React.FC<T> = ({
  title,
  body,
  medelId,
  btntext,
  onPressOK,
}) => {
  return (
    <div className="modal fade" tabIndex={-1} id={medelId} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ zIndex: "9999" }}>
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              data-bs-dismiss="modal"
              data-bs-target={"#" + medelId}
            />
          </div>
          {body && <div className="modal-body">{body}</div>}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              data-bs-target={"#" + medelId}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={onPressOK}
              data-bs-dismiss="modal"
              data-bs-target={"#" + medelId}
            >
              {btntext}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModel;
