import { Link, useMatches } from "@remix-run/react";
import { NAME_APP } from "../../../utils/info";

export default function LayoutAdmin({ children }) {
  const matches = useMatches();
  const dataAdmin = matches?.filter(obj => obj?.pathname === "/admin")?.[0]?.data;
  const { user } = dataAdmin;



  return (
    <>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-[#0a192f] sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to={"/admin/"}
          >
            <div className="sidebar-brand-text mx-3">
              {NAME_APP}
              <sup>admin</sup>
            </div>
          </Link>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span>Inicio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/predictions">
              <span>Predicciónes</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <li className="nav-item">
            <Link to="/admin/users" className="nav-link collapsed" href="#">
              <span>Usuarios</span>
            </Link>
          </li>
        </ul>

        <div id="content-wrapper" className="d-flex flex-column bg-[#051122]">
          <div id="content" className="bg-[#051122]">
            <nav className="navbar bg-[#0a192f] navbar-expand navbar-light topbar mb-4 static-top shadow">
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block"></div>
                <li className="nav-item dropdown no-arrow">
                  <div className="nav-link dropdown-toggle" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-white font-bold small">
                      {user?.name || ""}
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src={user?.profile || ""}
                    />
                  </div>
                </li>
              </ul>
            </nav>

            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
