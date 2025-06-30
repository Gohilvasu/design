import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api_data } from "../api/Data";
import { useSelector } from "react-redux";

const PlaneDetails = ({onNext , onStep}) => {
  // const { id } = useParams();
  const planName = useSelector((state) => state.user.planData);
  const id = localStorage.getItem("id")
  const navigate = useNavigate();
  const planDetail = api_data.find((item) => item.id === id);
  const planPeriod = useSelector((state) => state.user.plan);
  
  const handleData = () => {
    localStorage.setItem("username", "signup");
    localStorage.setItem("planDetail", JSON.stringify(planDetail));
   onNext(2);
   onStep("2")
  };
 

 
  let discount = 0;

  if (planPeriod === "3-monthly") {
    discount = 0.05;
  } else if (planPeriod === "6-monthly") {
    discount = 0.1;
  } else if (planPeriod === "yearly") {
    discount = 0.2;
  }

  const discountPrice = (
    planDetail.price -
    planDetail.price * discount
  ).toFixed(2);
 
  return (
    <>
      <div className="bg-[#3A0E7B]">
        <div className="lg:flex flex-col lg:items-center lg:justify-center  md:pt-38.5  max-lg:px-5 ">
          <div className="md:flex md:items-center md:justify-center  md:gap-18 max-md:flex-col max-md:gap-6 max-lg:items-center max-lg:justify-center max-md:pt-28">
            {api_data.map((item, index) => {
              return (
                id === item.id && (
                  <>
                    <div className=" lg:w-1/2  max-lg:pb-6 ">
                      <div
                        className="bg-[#2D0D5D] md:w-[285px]  max-lg:min-w-[285px] relative max-md:flex max-md:flex-col max-md:items-center"
                        key={item.id}
                      >
                        <img
                          className="absolute left-1/2 transform -translate-x-1/2 -top-11"
                          src={item.image}
                          alt="ToySack"
                        />
                        <span className="font-[maax] px-1.5  transform rotate-[2deg] font-bold absolute -right-3  bg-[#FFF238] text-[#3A0E7B] text-[11px]">
                          Selected Plan
                        </span>
                        <h1 className="font-[maax-mono] text-[28px] font-normal pt-11.5 text-white text-center">
                          {item.title}
                        </h1>
                        <p className="font-[maax] text-sm font-normal  mt-2.5 text-white text-center ps-13 pe-13">
                          {item.des}
                        </p>
                        <p className="font-[maax-mono] text-[28px] font-normal text-[#FFF238] pt-6 pb-6.5 text-center">
                          £
                          {item.method === "monthly"
                            ? item.price
                            : discountPrice}
                          <span className=" text-base font-normal">/mo</span>
                        </p>
                        <div
                          className={`flex md:flex-col items flex-wrap  ${
                            item.tokenDes ? "max-md:ps-2" : "max-md:ps-5.5"
                          }`}
                        >
                          <div className="flex items-start justify-center ps-2">
                            <span className="bg-[#FFF238] text-black rounded-full max-lg:text-[8px] max-lg:me-2 max-lg:py-[2px] max-lg:px-[5px]  lg:text-[10px] lg:py-[1px] lg:px-[4px] me-2">
                              W
                            </span>
                            <p className="font-[maax]  font-normal text-white text-sm ">
                              Up to{" "}
                              <span className="font-[maax] text-sm font-bold text-white">
                                {item.token} Whirli Tokens{" "}
                              </span>
                              available{item.tokenDes}
                            </p>
                          </div>
                          <h4 className="font-[maax-mono] text-xs font-normal text-[#FFF238] max-md:ps-6 max-md:pt-0.5 md:ps-12.5 pb-9">
                            {item.worth}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 max-lg:pb-9">
                      <div className="max-md:flex max-md:flex-col max-md:items-center">
                        <label className="md:text-[28px] max-sm:text-xl max-md:text-2xl whitespace-nowrap font-[maax-mono] font-normal max-lg:pb-1.5  text-white">
                          Upgrade to 3 month plan
                        </label>
                        <p className="text-sm max-sm:text-xs max-md:text-sm font-[maax] font-normal text-white ">
                          Good for giving our service a whirl (pun intended)
                        </p>
                        <div className=" max-sm:text-lg max-md:text-2xl max-md:text-center font-normal text-[#FFF238] pt-6 max-lg:pt-2">
                         <span className="font-[maax-mono] text-[28px] max-md:text-xl"> {item.method === "monthly"
                            ? item.price
                            : discountPrice}</span>
                          <span className=" text-base max-lg:text-sm font-normal">
                            /mo
                          </span>
                          <p className="font-[maax-mono] text-xs font-normal pb-5.5 text-white max-lg:pb-4 ">
                            Save £xx.xx per month
                          </p>
                          <div className="flex flex-col">
                            <div className="flex items-start max-lg:items-center  max-lg:pb-4.5">
                              <span className="bg-[#FFF238] text-black rounded-full  max-sm:text-[8px] max-md:text-[10px] max-lg:me-1.5 max-lg:py-[2px] max-lg:px-[5px]  md:text-[10px] lg:py-[0.5px] lg:px-[5px] me-2">
                                W
                              </span>
                              <p className="font-[maax] font-normal text-white text-sm max-sm:text-xs max-md:text-sm">
                                Up to{" "}
                                <span className="font-[maax] text-sm font-bold text-white">
                                  80 Whirli Tokens{" "}
                                </span>
                                available
                              </p>
                              <h4 className="font-[maax-mono] text-xs max-md:text-[10px] font-normal text-[#FFF238] max-lg:ps-1 lg:ps-2.5 lg:pb-5.5">
                                Worth (£80)
                              </h4>
                            </div>
                          </div>
                          <button className="py-3 border-1 cursor-pointer border-white max-md:w-full md:px-15 text-white lg:flex  text-base">
                            yes - upgrade for £3.96
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              );
            })}
          </div>
          <div className="text-center  pt-19 pb-23 max-md:pt-10 max-md:pb-10">
            <span
              className="font-[maax-mono] text-[13px] cursor-pointer  font-normal max-lg:text-xs   border-b border-white text-white   capitalize"
              onClick={handleData}
            >
              no thanks, i dont want to upgrade
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaneDetails;
