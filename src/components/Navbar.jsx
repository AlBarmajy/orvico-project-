import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [isLogged, setIsLogged] = useState(true);
  setIsLogged;
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light ">
        <div className="container ">
          {/* logo */}
          <Link className="  d-flex align-items-center logo me-lg-5" to="#">
            {/* <i className="fa-solid fa-screwdriver-wrench"></i> */}
            <h3 className="m-0">
              {" "}
              <i className="fa-solid fa-screwdriver-wrench"></i> ORVICO
            </h3>
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            {/* Nav Links */}
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0 fs-5 gap-lg-3">
              <li className="nav-item">
                <Link className="nav-link " to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 ms-auto">
              {/* check isLogged ? show profile section  */}
              {isLogged ? (
                //  Profile section
                <div className="btn-group">
                  <button
                    className="btn secondary-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mariam
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link className="dropdown-item " to="">
                        {" "}
                        <button className="btn main-btn">Logout</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <button className="btn main-btn">Login</button>
                  <button className="btn secondary-btn">Register</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
