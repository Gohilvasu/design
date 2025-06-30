import React, { useState } from "react";
import { api_data } from "../api/Data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Summary = () => {
  let discount = 0;
  const details = JSON.parse(localStorage.getItem("planDetail"));
  const discountData = (
    details?.price -
    details?.price * discount
  ).toFixed(2);
  
  const [select , setSelect] = useState(true)
  const [discountPrice , setDiscountprice] = useState(Number(discountData * 3))
  const planPeriod = useSelector((state) => state.user.plan);

  
  
  if (planPeriod === "3-monthly") {
    discount = 0.05;
  } else if (planPeriod === "6-monthly") {
    discount = 0.1;
  } else if (planPeriod === "yearly") {
    discount = 0.2;
  }
  
 
   
  
  const handlePrice = (e) =>{
    setSelect((prev) => (!prev) )
   if(select){
    const nextUpdate = (discountPrice + 7.99)
setDiscountprice(nextUpdate)
   }else{
    const nextUpdate = (discountPrice - 7.99)
    setDiscountprice(nextUpdate)
   }
  
  }
  return (
    <div className="order-1 lg:order-2   sm:mt-16.5  mt-10  lg:px-6 lg:p-0 p-4 max-lg:p-0 sm:flex sm:flex-col sm:items-center xl:p-0 xl:mt-15.5">
       {api_data.map((item , index) => (item.id === details.id && <> 
      <h2 className=" sm:mb-0  text-center text-[26px] mb-16.5  xl:mb-0 xl:text-left font-[maax-mono] font-normal xl:leading-5.5 text-[#3A0E7B]">
        Plan Summary
      </h2>
      <div className=" max-lg:max-w-full max-lg:ms-14 max-sm:ms-4 max-sm:me-4 max-lg:me-14 sm:mt-4 mt-9  bg-[#FFFFFF] ">
        <div className="flex flex-wrap max-md:flex-nowrap max-lg:flex-col">
          <div className="flex max-lg:justify-between">

            <div className="  ms-2 mt-4 xl:ms-6 xl:mt-7">
              <img
                className="bg-[#3A0E7B] sm:p-4  sm:w-25 sm:h-25 w-[77px] h-[77px] p-2 xl:w-[79px] xl:h-[79px] xl:p-4"
                src={item.image}
                alt="boximage"
              />
            </div>
            <div className=" lg:ms-14 sm:ms-16 md:ms-20 ms-2 xl:ms-5.5 ">
              <div className=" flex items-baseline ">
                <div className=" mt-5.5 xl:mt-10">
                  <h4 className=" text-md font-[maax-mono] xl:text-lg text-[#3A0E7B]">
                   {item.title}
                  </h4>{" "}
                  <p className="mt-4 mb-3 xl:me-10 text-[12px] text-[#3A0E7B] font-normal font-[maax] xl:mt-2 xl:mb-4">
                    <span className="text-[12px] font-bold text-[#3A0E7B] w-[10px] h-[12px] me-1 bg-[#FFF238] px-0.5 5">
                      W
                    </span>
                    Includes{" "}
                    <span className="font-bold text-[background: #3A0E7B]">
                      {" "}
                      {item.token} Whirli Tokens
                    </span>
                  </p>
                </div>
                <div className=" mt-4 xl:mt-11 xl:ms-3.5 ">
                  <h5 className="text-md lg:text-[18px] xl:text-[20px] text-[#3A0E7B] font-normal font-[maax-mono] xl:leading-5.5">
                  £{item.method === "monthly" ? item.price :  discountData}
                  </h5>
                  <p className=" text-[10px] leading-2 xl:text-[12px] text-[#3A0E7B] font-normal font-[maax-mono] xl:leading-5.5">
                    billed monthly
                  </p>
                </div>
              </div>

              <ul className="sm:ms-0 ms-4.5 text-[12px] text-[#3A0E7B] xl:font-normal font-[maax] list-disc">
                <li>Additional feature goes here</li>
                <li>Additional feature goes here</li>
                <li>Additional feature goes here</li>
              </ul>
            </div> 
          </div>

          <div className="max-sm:ps-4 max-sm:pe-4 pt-4 pb-4 xl:pt-5.5 xl:pb-6.5 pe-6.5 ps-6.5 ">
            <div className="flex pt-4 xl:items-center justify-between  border-t xl:pt-6.5">
            <label className="flex items-top pt-2 me-4.5 max-sm:pt-1 cursor-pointer relative">
                        <input
                          type="checkbox"
                          className="peer h-7 w-7 max-sm:w-4 max-sm:h-4  cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] checked:border-[#3A0E7B]"
                          id="check7"
                          checked={!select}
                          onClick={handlePrice}
                          
                        />
                        <span className="absolute  text-white hover:text-sky-500 opacity-0 peer-checked:opacity-100 top-5.5 max-sm:top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </label>
              <div className="max-w-xs">
                <p className=" text-sm text-[#3A0E7B] flex gap-2 xl:text-lg font-normal font-[maax-mono] xl:leading-5.5">
                  Add delivery booster?
                  <span>
                    <img src="/i.png" alt="i image" />
                  </span>
                </p>
                <p className=" text-[11px] text-[#3A0E7B] xl:text-[13px] font-normal  font-[maax] xl:leading-3.5">
                  Additional{" "}
                  <span className="text-[#3A0E7B]  font-bold font-[maax] leading-5.5" >
                    £7.99
                  </span>{" "}
                  / month for unlimited free standard deliveries and standard
                  returns
                </p>
              </div>
              <img
                className="w-6 h-6 xl:ms-10 xl:w-9 xl:h-9"
                src="truck-image.png"
                alt="truck image"
              />
            </div>
            <p className=" text-[11px] max-lg:text-[12px] max-sm:text-[11px] lg:text-[10px] pt-4 pb-4 mt-4 text-[#3A0E7B] max-lg:justify-between xl:text-[13px] font-normal h-[22px] font-[maax] leading-4 border-t border-b flex sm:justify-between md:justify-between lg:justify-between xl:justify-between items-center xl:mt-7 xl:pt-5.5 xl:pb-5.5">
              Do you have a gift card, promo or referral code?{" "}
              <span className="max-sm:text-2xs sm:text-sm lg:text-xl text-[#3A0E7B] rotate-180 lg:pt-2">
              &#94;
              </span>
            </p>
            <span></span>
            <div className=" flex items-center ">
              <div className="mt-4 xl:mt-5.5">
                <div className="flex  justify-between">
                  <h4 className=" text-md mb-4 xl:text-lg text-[#3A0E7B] font-[maax-mono] font-normal leading-4 xl:mb-4.5">
                    Total to pay today
                  </h4>
                  <h5 className=" text-[16px] xl:text-[20px] text-[#3A0E7B] font-normal font-[maax-mono] leading-4">
                  
                  £{item.method === "monthly" ? Number(item.price) * 3  :  Number(discountPrice).toFixed(2)}/3mo
                  </h5>
                </div>
                <ul className=" text-[11px] max-lg:text-[12px] max-sm:text-[11px]  text-[#3A0E7B] font-normal font-[maax]">
                  <li className="mb-4.5">
                    Based on the plan you have chosen, you will be
                    charged £38.99 every month.  You can return toys and cancel
                    at any time to stop payments.
                  </li>
                  <li className="xl:mb-6.5">
                    As you have chosen to pay monthly, you will NOT get your
                    full Whirli Token allowance until you complete a 3 month
                    introductory period. More information
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-between mt-4 max-sm:px-4.5  max-sm:gap-0 sm:w-full max-lg:px-14 xl:mt-6.5">

        <img
          className="w-16 h-16 sm:w-auto sm:h-auto xl:w-auto xl:h-auto"
          src="/fdb1dc4.png"
          alt="logo-images"
        />
        <img
          className="w-16 h-15 sm:w-auto sm:h-auto xl:w-auto xl:h-auto"
          src="/990be1a.png"
          alt="logo-images"
        />
        <img
          className="w-16 h-16 sm:w-auto sm:h-auto xl:w-auto xl:h-auto"
          src="/3863840.png"
          alt="logo-images"
        />
        <img
          className="w-16 h-16 sm:w-auto sm:h-auto xl:w-auto xl:h-auto"
          src="/c6fffe9.png"
          alt="logo-images"
        />
      </div>{" "}
      <div className="flex items-center max-md:ms-16 max-md:me-16 max-lg:ms-16 max-lg:me-16 lg:ms-2 lg:me-2 xl:ms-3 xl:me-3 lg:w-full  max-lg:ps-0 max-lg:pe-4 max-sm:ps-0 max-sm:pe-0 max-sm:ms-4 max-sm:me-4   mt-3 xl:mt-8.5 bg-white border border-gray-200 rounded-lg shadow-sm xl:flex-row xl:max-w-xl hover:bg-gray-100 ">
        <img
          className="object-cover w-[93px]  h-[105px] xl:h-fit xl:w-fit"
          src="/child.png"
          alt=""
        />
        <div className="flex flex-col justify-between leading-4 xl:ms-[26px] mt-0">
          <p className="pb-2 max-lg:text-[12px] max-sm:text-[11px] sm:pb-1  text-[11px]  max-lg:w-full sm:px-4  ms-1 xl:pb-3 xl:pe-3.5 xl:px-0 xl:me-0 font-normal xl:text-[13px] text-[#3A0E7B] font-[maax]">
            “We've been using Whirli since our baby was only a couple of weeks
            old, and it's been amazing! The ability to swap toys for every stage
            of development (or boredom!) is brilliant”
          </p>

          <div className="flex items-center justify-between max-sm:px-0 max-xl:px-4 ms-1 xl:gap-3 xl:ms-0 xl:w-full">
            <p className="text-[11px] xl:text-xs text-[#3A0E7B] font-bold font-[maax]">
              Andrea S, GB
            </p>
            <p className="text-[10px] xl:text-xs text-gray-400 font-medium font-[maax]">
              Verified Review
            </p>

            <img
              className=" sm:ms-2 xl:ms-5 w-[43px] h-[10px] xl:w-[89px] xl:h-[19px]"
              src="/star.png"
              alt="star-image"
            />
          </div>
        </div>
      </div>
      </>)) }
    </div>
  );
};

export default Summary;
