import "./Jobs.css";
import JobCard from "../JobCard/JobCard";

export default function Jobs() {
  return (
    <div className="container-fluid jobsDiv pb-4" style={{ backgroundColor: "#fbfaff" }}>
      <div className="container">
        <div className="jobsH1Div pt-5">
          <h1 className="jobsH1 ">
            <span className="jobsSpan">Latest And Top</span> Job Openings
          </h1>


{/* jobs cards */}
          <div  className="mt-5 d-flex  gap-4 justify-content-center align-items-center flex-wrap">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}
