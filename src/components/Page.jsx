import React from "react";

import Summary from "../page/Summary";
import Account from "../page/Account";

const Page = () => {
  return (
    <div className="bg-[#6FE2D21A]">
    <div className="container mx-auto  xl:px-35 lg:px-10">
    <div className="flex max-lg:flex-col-reverse max-sm:gap-4 xl:gap-35 lg:gap-10">
      <div className=" lg:w-1/2 max-lg:w-full">
        <Account/>
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
