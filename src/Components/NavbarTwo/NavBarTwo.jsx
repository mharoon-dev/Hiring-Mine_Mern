import { Link } from "react-router-dom";
import "./NavBarTwo.css";

export default function NavBarTwo() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid pt-md-2">
          <a className="navbar-brand ms-md-5 ps-lg-5 logo " href="#">
            <Link to={"/"}>
            <img src="/assets/logo.png" width="180rem" />
            </Link>
          </a>

          <div className="d-flex justify-content-between   mt-1 searchMain" style={{ width: "60%" }}>
            <div className="input-group me-3" style={{ backgroundColor: "transparent !important" }}>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                className="form-control inputValue h-100"
                placeholder="Find Job"
              />
              <span className="input-group-text searchIcon bg-transparent searchBtn">
                <img src="/assets/search icon.png" width="20rem" />
              </span>
            </div>
          <div className=" me-md-5 pe-md-5">
            <img src="/assets/themeButton.png" width="50rem" />
          </div>
          </div>

        </div>
      </nav>
    </>
  );
}
