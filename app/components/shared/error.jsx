export default function ErrorComponent() {
  return (
    <>
      <div className="" id="body">
        <main id="main">
          <header className="Menubar">
            <div>
              <p>Terminal</p>
            </div>
            <div>
              <p className="title_404">500</p>
            </div>
            <div className="Menu_BTN">
              <a href="#" id="min"></a>
              <a href="#" id="max"></a>
              <a href="#" id="close"></a>
            </div>
          </header>
          <div className="Terminal_body" id="Terminal">
            <p>Oops! tuvimos un pequeño error al cargar el contenido</p>
            <br />
            <br />
            <strong>
              Haz{" "}
              <span
                className="cursor-pointer text-blue-300"
                onClick={() => {
                  window.location.reload();
                }}
              >
                clic aquí
              </span>{" "}
              para reintentarlo
            </strong>
            <br />
            <div className="Terminal_code">
              <div className="Terminal_line">
                <div className="code" id="code"></div>
                <span className="arrow">→</span>
                <span className="user-input" id="userInput"></span>
                <label for="Keyboard"></label>
                <input type="text" id="Keyboard" className="keyboard" />
              </div>
            </div>
          </div>
        </main>

        <div className="min_app" id="min_app">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40"
              height="40"
            >
              <path
                fill="#CFD8DC"
                d="M41,6H7C6.4,6,6,6.4,6,7v35h36V7C42,6.4,41.6,6,41,6z"
              />
              <path fill="#263238" d="M8 13H40V40H8z" />
              <path
                fill="#90A4AE"
                d="M13.5 8A1.5 1.5 0 1 0 13.5 11 1.5 1.5 0 1 0 13.5 8zM9.5 8A1.5 1.5 0 1 0 9.5 11 1.5 1.5 0 1 0 9.5 8z"
              />
              <g>
                <path
                  fill="#18FFFF"
                  d="M18.5 26.5l-3.5-2V22l6 3.4v2.1L15 31v-2.5L18.5 26.5zM23 29H33V31H23z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
