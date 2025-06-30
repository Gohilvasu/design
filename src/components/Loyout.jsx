import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PlanNavigate from "./PlanNavigate";
const Loyout = () => {
  const [current, setCurrent] = useState(() => {
    return localStorage.getItem("currentStep") || "0";
  });

  const handleStep = (item) => {
    setCurrent(item);
  };

  useEffect(() => {
    localStorage.setItem("currentStep", current);
  }, [current]);

  return (
    <>
      <div>
        <Header onStep={handleStep} current={current} />
        <PlanNavigate onStep={handleStep} current={current} />
      </div>
      <Outlet />
      
    </>
  );
};

export default Loyout;
