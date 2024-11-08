import React from "react";
import "./body.css";
import Top from "./Top Section/Top"
import Activity from "./ActivitySection/Activity"
import Listing from "./Listing Section/Listing";

const Body = () => {
  return (
    <>
      <div className="mainContent">
        <Top />
        <div className="bottom flex">
          <Listing/>
          <Activity/>
        </div>
      </div>
    </>
  );
};

export default Body;
