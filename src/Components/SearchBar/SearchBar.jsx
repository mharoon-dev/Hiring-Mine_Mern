import PopularSearchBtn from "../PopularSearchBtn/PopularSearchBtn";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <>
      <div className="container" style={{ borderColor: "red" }}>
        <h1 className="heading mt-5 pt-sm-5">
          Dig. Apply <br /> Prepare Your Future
        </h1>
        <p className="para">
          Hiring Mine connects employer and job seekers, where employers are
          <br />
          the source of the resources and the job seeker can find and apply for
          <br /> their targeted job.
        </p>

        <div className="d-flex justify-content-between justify-content-md-start  mt-3 ">
          <div className="input-group me-3 inputDiv">
            <input
              type="text"
              className="form-control inputValue"
              placeholder="Find Job"
            />
            <span className="input-group-text searchIcon bg-transparent searchBtn">
              <img src="/assets/search icon.png" width="20rem" />
            </span>
          </div>
          <button className="findBtn">Find Jobs</button>
        </div>

        <h1 className="heading2 mt-5">Popular Searches</h1>

        <div className="popularSearchesDiv mt-4 d-flex justify-content-start gap-3 flex-wrap align-items-center"  >
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        <PopularSearchBtn />
        </div>
      </div>
    </>
  );
}
