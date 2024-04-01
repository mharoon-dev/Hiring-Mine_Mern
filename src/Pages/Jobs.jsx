import React from "react";
import { useFetchData } from "../CumstomHook/useDataFetch";
import { useParams } from "react-router-dom";
import NavBarTwo from "../Components/NavbarTwo/NavBarTwo";

export default function Jobs() {
    const { jobName } = useParams();
//   const jobs = useFetchData(
//     `https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=${jobName}&category=`
//   );
  return (
    <NavBarTwo />
  );
}
