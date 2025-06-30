import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Plan from "../page/Plan";
import PlaneDetails from "../page/PlaneDetails";
import Page from "../page/Page";

const PlanNavigate = ({onStep , current}) => {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem("planStep");
    return saved !== null ? saved : "0";
  });

  const navigate = useNavigate();
const handlePage = () => {
    setCurrentStep(current);
  };
 
  
  useEffect(() => {
    localStorage.setItem("planStep", current);
  }, [current]);
  const steps = [
    <Plan onNext={handlePage} onStep={onStep} current={current} />,
    <PlaneDetails onNext={handlePage} onStep={onStep} />,
    <Page onNext={() => {
      onStep={onStep}
      handlePage
      navigate("/toy");
      current={current}
     
    }} />,

  ];

  return <div>{steps[current]}</div>;
};

export default PlanNavigate;
