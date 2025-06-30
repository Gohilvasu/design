import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { planData, userData } from "../redux/user";

const Card = ({id , title, price_month , save , worth , token="80" , image , plan , tokendetails, planBg="bg-[#3A0E7B]" , onNext , onStep}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleData = () =>{
    localStorage.setItem("id" , id);
    dispatch(planData(id))
    onNext("1");
    onStep("1");
  }
  return (
    <>
      <div className="bg-[#3A0E7B] w-[285px]  max-md:min-w-[285px] relative">
        <img className="absolute left-1/2 -translate-x-1/2 -translate-y-11" src={image} alt="ToySack" />
        <span className={`font-[maax] px-1.5  transform rotate-[2deg] font-bold absolute -top-1 -right-3  ${planBg} text-[#3A0E7B] text-[11px]`}>
                    {plan}
                    </span>
        <h1 className="font-[maax-mono] text-[28px] font-normal pt-11.5 text-white text-center">{title}</h1>
        <p className="font-[maax] font-normal text-sm  mt-2.5 text-white text-center px-12.5">
        Good for giving our service a whirl (pun intended)
        </p>
        <p className={`font-[maax-mono] ${id === "Toy-sack" ? "pb-4" : ""} text-3xl font-normal text-[#FFF238] pt-6 text-center`}>
         {price_month}
          <span className=" text-base font-normal">/mo</span>
        </p>
        <p className="font-[maax-mono] text-xs font-normal pb-5.5 text-white text-center ">{save}</p>
        <div className={`flex items-start justify-center ${tokendetails ? "ps-2 pe-2.5" : "px-4"}`}>
          <span className="bg-[#FFF238] text-black rounded-full max-sm:text-[8px] max-sm:me-2 lg:text-[10px] py-[1px] pe-[4px] ps-[4px] me-2">
            W
          </span>
          <p className="font-[maax]  font-normal text-white text-sm leading-4">
            Up to{" "}
            <span className="font-[maax] text-sm font-bold text-white">
              {token} Whirli Tokens{" "} 
            </span>
            available {tokendetails}
          </p>
        </div>
        <h4 className={`font-[maax-mono] text-xs font-normal text-[#FFF238] ps-12.5 ${worth ? "pb-5.5" : "pb-5.5"}`}>{worth}</h4>
        <div className="pb-6.5">
       <button className="py-3 border-1 border-white px-10.5 text-white flex mx-5.5 cursor-pointer" onClick={handleData}>CHOOSE THIS PLAN</button> 
        </div>
      </div>
    </>
  );
};

export default Card;
