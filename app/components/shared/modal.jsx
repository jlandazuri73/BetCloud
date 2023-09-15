export default function Modal({ title, children }) {
    return (
      <div className="modalApp">
        <div className="contentModalApp rounded-lg">
          <div className="headerModalApp">
            <div className="headerModalApp-c-c">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="z-10">{title}</p>
            <div className="headerModalApp-c-c">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="bodyModalApp">
            <div className="content-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
  