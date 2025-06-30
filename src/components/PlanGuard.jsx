import { Navigate } from "react-router-dom";

const PlanGuard = ({ children }) => {
  const plan = localStorage.getItem("planStep");
  const planDetails = localStorage.getItem("currentStep");
  return planDetails && plan ? children : Navigate("/");
};

export default PlanGuard;
