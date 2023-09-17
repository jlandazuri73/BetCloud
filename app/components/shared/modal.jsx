export default function Modal({ show, setShow, title, children }) {
  return (
    show && (
      <div className="modalApp">
        <div
          className="contentModalApp rounded-lg top-0 absolute"
          style={{ height: "auto" }}
        >
          <div className="headerModalApp">
            <div className="headerModalApp-c-c">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="z-10">{title}</p>
            <button
              onClick={() => setShow(false)}
              className="bg-red-500 w-10 rounded flex items-center justify-center h-4/5 transition"
            >
              <i className="fa-solid fa-xmark" style={{ fontSize: "20px" }}></i>
            </button>
          </div>
          <div className="bodyModalApp">
            <div className="content-body">{children}</div>
          </div>
        </div>
      </div>
    )
  );
}
