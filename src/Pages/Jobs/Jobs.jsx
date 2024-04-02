import React, { useState } from "react";
import "./Jobs.css";
import { useParams } from "react-router-dom";
import NavBarTwo from "../../Components/NavbarTwo/NavBarTwo";
import JobBigCard from "../../Components/JobBigCard/JobBigCard";
import { useFetchData } from "../../CumstomHook/useDataFetch";
import DetailCard from "../../Components/DetailCard/DetailCard";

export default function Jobs() {
  const [pageNum, setPageNum] = useState(1);
  const { jobName } = useParams();
  const jobs = useFetchData(
    `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=${pageNum}&keyWord=${jobName}&category=`
  );
  return (
    <>
      <NavBarTwo />
      <div className="container" style={{ marginTop: "30px" , position:"relative" }}>
        <div className="row" style={{position:"relative"}}>
          {jobs ? jobs.map((job) => <JobBigCard job={job} />) : "No data Found"}
        </div>
        <div className="row d-flex justify-content-center align-items-center mb-4" style={{position:"relative"}}>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <button
              className="btn"
              onClick={pageNum > 1 ? () => setPageNum(pageNum - 1) : ""}
            >
              previous
            </button>
          </div>
          <div className="col-6 d-flex justify-content-start align-items-center">
            <button className="btn" onClick={() => setPageNum(pageNum + 1)}>
              next
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "0" , right: "10px", top: "0"}}>
          <DetailCard />

        </div>
      </div>
    </>
  );
}
