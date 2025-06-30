import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { api_data } from "../api/Data";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { planDuration } from "../redux/user";
import { useNavigate } from "react-router-dom";

const Plan = ({onNext , onStep , current}) => {
  [
    { name: "Toy Sack", price: 14.99 },
    { name: "Toy Box", price: 20.99 },
    { name: "Toy Trunk", price: 27.99 },
    { name: "Toy Chest", price: 40.99 },
  ];

  const dispatch = useDispatch()
  const [selected, setSelected] = useState("monthly");
  useEffect(() => {
    localStorage.removeItem("plan");
    localStorage.removeItem("planDetail");
    localStorage.removeItem("detailsPlan");
  });
  
  let discount = 0;
  const handleInput = (method) => {
    setSelected((prev) => (prev === method ? " " : method));
     dispatch(planDuration(method))
  };
  if (selected === "monthly") {
    discount = 0;
  } else if (selected === "3-monthly") {
    discount = 0.05;
  } else if (selected === "6-monthly") {
    discount = 0.1;
  } else if (selected === "yearly") {
    discount = 0.2;
  }



  return (
    <>
      <div className="xl:flex flex-col  items-center bg-[#e9fcf9] max-md:px-5 md:px-10  ">
        <div className="border-b border-[#3A0E7B] max-sm:gap-25 max-md:gap-50 lg:gap-100 xl:gap-128 flex justify-between items-center pt-14.5">
          <span className="text-[#3A0E7B] font-[maax] text-lg ">
            Tokens Used:
          </span>
          <span className="text-[#3A0E7B] font-[maax] font-bold text-base">
            123/160
          </span>
        </div>
        <p className="text-[#3A0E7B] font-[maax-mono] font-normal text-[26px] pt-8 flex flex-wrap justify-center text-center">
          First, choose your billing period
        </p>
        <div className=" flex gap-4 pt-8 md:pb-15.5 max-xl:overflow-auto max-md:scrollbar-hide md:justify-center">
          <button
            className={`border-1 ${
              selected === "monthly"
                ? "bg-[#3A0E7B] text-white border-[#3A0E7B] font-bold"
                : " text-[#3A0E7B] border-[#3A0E7B]"
            } px-13.5 py-2.5 cursor-pointer font-[maax-mono] text-[13px] `}
            onClick={() => handleInput("monthly")}
          >
            Monthly
          </button>
          <div className="relative">
            <button
              className={`border-1  cursor-pointer ${
                selected === "3-monthly"
                  ? "bg-[#3A0E7B] text-white border-[#3A0E7B]"
                  : " text-[#3A0E7B] border-[#3A0E7B]"
              } max-xl:whitespace-nowrap max-md:px-6 px-6.5 py-2.5 font-[maax-mono] text-[13px]`}
              onClick={() => handleInput("3-monthly")}
            >
              Every 3 months
            </button>
            <span className="font-[maax] px-1.5  transform rotate-2 font-bold absolute -top-2 right-3  bg-[#FFF238] text-[#3A0E7B] text-[11px]">
              Save 5%
            </span>
          </div>
          <div className="relative">
            <button
              className={`border-1 ${
                selected === "6-monthly"
                  ? "bg-[#3A0E7B] text-white border-[#3A0E7B]"
                  : " text-[#3A0E7B] border-[#3A0E7B]"
              } cursor-pointer max-xl:whitespace-nowrap px-6 py-2.5 font-[maax-mono] text-[13px]`}
              onClick={() => handleInput("6-monthly")}
            >
              Every 6 months
            </button>
            <span className="font-[maax] px-1.5 transform rotate-2 font-bold absolute -top-2 right-3  bg-[#FFF238] text-[#3A0E7B] text-[11px]">
              Save 10%
            </span>
          </div>
          <div className="relative">
            <button
              className={`border-1 ${
                selected === "yearly"
                  ? "bg-[#3A0E7B] text-white border-[#3A0E7B]"
                  : " text-[#3A0E7B] border-[#3A0E7B]"
              } cursor-pointer max-xl:whitespace-nowrap px-14.5 py-2.5 font-[maax-mono] text-[13px]`}
              onClick={() => handleInput("yearly")}
            >
              Yearly
            </button>
            <span className="font-[maax] px-1.5  transform rotate-2 font-bold absolute -top-2 right-3 bg-[#FFF238] text-[#3A0E7B] text-[11px]">
              Save 20%
            </span>
          </div>
        </div>
        <div>
          <div className=" md:hidden max-md:flex max-md:justify-between max-md:py-6">
            <span className=" max-md:text-[#444444]">{`<-`}</span>
            <label className=" max-md:text-[#444444]  max-md:font-[maax]  max-md:font-normal  max-md:text-base">
              Swipe to view more periods
            </label>
            <span className=" max-md:text-[#444444]">{`->`}</span>
          </div>
        </div>
      </div>
      <div className=" md:pt-14 md:pb-18.5 max-md:px-5">
        <p className="text-[#3A0E7B] font-[maax-mono] font-normal text-[26px]  text-center max-md:py-6">
          Now choose a plan that suits you
        </p>
        <div className="flex items-center justify-center flex-wrap xl:gap-8 max-md:gap-2  pt-3.5 xl:pb-24 max-md:pb-6 max-md:flex-col max-md:pt-6">
          <p className="font-[maax] font-normal text-sm">
            {" "}
            <span className="bg-[#FFF238] text-black rounded-full max-sm:text-[8px] max-sm:me-2 lg:text-[10px] pt-[2px] pb-[2px] pe-[4px] ps-[4px] me-2">
              &#10003;
            </span>
            <label className="md:me-2 xl:me-0">
              First months deliver is{" "}
              <span className="text-[#3A0E7B] font-bold">FREE!</span>
            </label>
          </p>
          <p className="font-[maax] font-normal text-sm">
            {" "}
            <span className="bg-[#FFF238] text-black rounded-full max-sm:text-[8px] max-sm:me-2 lg:text-[10px] pt-[2px] pb-[2px] pe-[4px] ps-[4px] me-2">
              &#10003;
            </span>{" "}
            <label className="md:me-2 xl:me-0">
              Change or cancel your plan any time
            </label>
          </p>
          <p className="font-[maax] font-normal text-sm">
            {" "}
            <span className="bg-[#FFF238] text-black rounded-full max-sm:text-[8px] max-sm:me-2 lg:text-[10px] pt-[2px] pb-[2px] pe-[4px] ps-[4px] me-2">
              &#10003;
            </span>
            <label htmlFor="Some other kind of benefit here?">
              Some other kind of benefit here?
            </label>
          </p>
        </div>
        {
          <div className="flex max-md:gap-10 md:gap-12 xl:gap-6.5 xl:justify-center max-md:snap-x max-md:overflow-x-auto max-md:scrollbar-hide max-md:overflow-y-visible md:flex-wrap xl:flex-nowrap  max-md:pt-12 max-md:flex-nowrap md:justify-center md:py-16.5 xl:py-0">
            {api_data.map((item) => {
              const discountPrice = (
                item.price -
                item.price * discount
              ).toFixed(2);
              return (
                <Card
                  id={item.id}
                  title={item.title}
                  price_month={
                    selected === "monthly" ? item.price : discountPrice
                  }
                  save={item.save}
                  worth={item.worth}
                  image={item.image}
                  className="max-md:snap-center"
                  tokendetails={item.tokenDes}
                  onNext={onNext}
                  onStep={onStep}
                />
              );
            })}
          </div>
        }
        <div>
          <div className=" md:hidden max-md:flex max-md:justify-between max-md:py-6">
            <span className=" max-md:text-[#444444]">{`<-`}</span>
            <label className=" max-md:text-[#444444]  max-md:font-[maax]  max-md:font-normal  max-md:text-base">
              Swipe to view more periods
            </label>
            <span className=" max-md:text-[#444444]">{`->`}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plan;
