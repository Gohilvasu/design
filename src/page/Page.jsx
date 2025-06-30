import React from "react";
import Account from "./Account";
import Summary from "./Summary";
import Footer from "../components/Footer";

const Page = ({onNext , onStep , current}) => {
 
  const toy = location.pathname

  return (
    <div className={`bg-[#6FE2D21A] ${current === "0" || toy === "/toy" ? "hidden" : ""}`}>
    <div className="container mx-auto  xl:px-35 lg:px-10">
    <div className="flex max-lg:flex-col-reverse max-sm:gap-4 xl:gap-35 lg:gap-10">
      <div className=" lg:w-1/2 max-lg:w-full">
        <Account onStep={onStep} current={current} onNext={onNext} />
      </div>
      <div className=" lg:w-1/2 max-lg:w-full">
        <Summary />
        </div>
     
    </div>
     <Footer/>
   </div>
   </div>
  );
};

export default Page;
