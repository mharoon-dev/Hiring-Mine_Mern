import "./NavBarTwo.css";

export default function NavBarTwo() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid pt-2">
          <a className="navbar-brand ms-lg-5 ps-lg-5 logo " href="#">
            <img src="/assets/logo.png" width="180rem" />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}



          <div className="d-flex justify-content-between justify-content-md-start  mt-1 w-50 searchMain">
          <div className="input-group me-3  searchDiv">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="form-control inputValue"
              placeholder="Find Job"
            />
            <span className="input-group-text searchIcon bg-transparent searchBtn">
              <img src="/assets/search icon.png" width="20rem" />
            </span>
          </div>
          {/* find button */}
          <button 
            className="findBtn2"
            onClick={() => handleSearch()}>
            Find Jobs
          </button>

        </div>

            <div className=" me-md-5 pe-md-5">
              <img
                src="/assets/themeButton.png"
                width="50rem"
              />
            </div>
          </div>
      </nav>
    </>
  );
}
