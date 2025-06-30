import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { api_data } from "../api/Data";

const Header = ({onStep , current}) => {

    const location = useLocation();
    const toy = location.pathname

    
    
    const [id, setId] = useState();
  
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const planStep = localStorage.getItem("planStep")
   
    useEffect(() => {
     
     
      setId(localStorage.getItem("id"));
    }, [planStep , id]);
  
    const logOut = () => {
      localStorage.removeItem("user");
      localStorage.removeItem("id");
      localStorage.removeItem("login");
      localStorage.setItem("planStep" , 0)
      localStorage.removeItem("planDetail");
      localStorage.removeItem("username");
  
     
    
      setId(null);
      onStep("0")
      navigate("/");
    };

  
  
  return (
    <div className="header-section">
      <div className=" w-full bg-[#6FE2D2] relative">
        <div className="relative">
          <img src="/Group.png" alt="" className="mx-auto pt-4 xl:pt-9" />
          {toy === "/toy" ? (
            <div className="max-lg:hidden lg:flex lg:justify-end  lg:gap-3.5 absolute top-9 right-10">
              <img
                className="bg-[#3A0E7B] border border-[#3A0E7B] rounded-full p-2"
                src="/user_icon.svg"
                alt="user_icon"
                onClick={() => logOut()}
              />
              <img src="/image_11.png" alt="heart" />
              <img src="/image_12.png" alt="bag" />
            </div>
          ) : (
            " "
          )}
        </div>

        <div className=" max-lg:items-center flex max-lg:flex-nowrap flex-wrap justify-center xl:pt-12">
          <p
            className={`text-[16px] cursor-pointer ${
            ( current === "0" || current === "1") &&  toy !== "/toy" ? " " : "max-sm:hidden"
            } mt-6 mb-6 max-lg:me-4 lg:me-10 xl:me-10 xl:text-[14px] xl:my-0  font-[maax-mono] `}
            onClick={() => {
              if (toy !== "/toy") {
                logOut();
              }
            }}
          >
            <span
             className={
            ( current === "0" || current ==="1") &&  toy !== "/toy"
                  ? "text-[16px] text-[#FFF238] me-3.5 bg-[#3A0E7B]  px-2 py-0.5 font-bold"
                  : "text-[16px] me-3.5 bg-[#FFF238] px-2 py-0.5 font-normal"
              }
            >
              1
            </span>
            <span
              className={
            ( current === "0" || current === "1") &&  toy !== "/toy"
                  ? " text-[#3A0E7B] font-bold"
                  : " text-[#3A0E7B] font-normal"
              }
            >
              Choose your plan
            </span>
          </p>

          <p
            className={`text-[16px] ${
              current === "2" &&  toy !== "/toy" ? " " : "max-sm:hidden"
            } mt-6 mb-6 max-lg:me-4 lg:me-10 xl:me-10 xl:text-[14px] xl:my-0   font-[maax-mono]`}
          >
            <span
              className={
               current === "2" &&  toy !== "/toy" 
                  ? "text-[16px] text-[#FFF238] me-3.5 bg-[#3A0E7B]  px-2 py-0.5 font-bold"
                  : "text-[16px] me-3.5 bg-[#FFF238] px-2 py-0.5 font-normal"
              }
            >
              2
            </span>
            <span
              className={
                current === "2" &&  toy !== "/toy" 
                  ? " text-[#3A0E7B] font-bold"
                  : " text-[#3A0E7B] font-normal"
              }
            >
              Choose your account
            </span>
          </p>
          <p
            className={`${
            toy === "/toy" ? " " : "max-sm:hidden"
            } max-sm:me-0 max-sm:mt-6 max-sm:mb-6 lg:mt-6 xl:mt-0 max-lg:me-0 me-10 text-[14px]  font-[maax-mono]`}
          >
            <span
              className={
              toy !== "/toy"
                  ? "text-[16px] me-3.5 bg-[#FFF238] px-2 py-0.5 font-normal"
                  : "text-[16px] text-[#FFF238] me-3.5 font-bold bg-[#3A0E7B] px-2 py-0.5"
              }
            >
              3
            </span>
            <span
              className={
           toy === "/toy"
                  ? "text-[#3A0E7B]  font-bold  "
                  : "text-[#3A0E7B]  font-normal "
              }
            >
              Start borrowing!
            </span>
          </p>
        </div>
        <div className="text-[#3A0E7B] ]  md:mt-7">
          <h1 className="text-[44px] max-md:text-[28px]  mb-2.5 md:text-5xl font-[maax-mono]  md:mt-6.5 ms-7 me-7 md:mb-5 text-center max-md:mx-5">
            {current === "0" &&  toy !== "/toy"  ? (
              "Ready to start borrowing?"
            ) :  current === "2" &&  toy !== "/toy"  ? (
              "Sign up & checkout"
            ) : current === "1" && current !== "0"  ? (
              <>
                <p className="max-md:leading-8.5 max-md:white">
                  Wait! Upgrade to a 3 month
                  <span className="block md:leading-18">
                    {" "}
                    plan and save 5%?
                  </span>
                </p>
              </>
            ) :  toy === "/toy" || user ? (
              `Welcome, ${user}`
            ) : (
              ""
            )}
          </h1>
          <p className="text-base pb-9 lg:pb-15 font-[maax] max-lg:px-5 xl:pb-16 text-center">
            { current === "0" &&  toy !== "/toy"
              ? "Choose a plan, sign up and place your first order today - it’ll only take a few minutes!"
              :  current === "2" &&  toy !== "/toy"
              ? "Create your account and checkout securely!"
              :  toy === "/toy"
              ? "Your account has been created! Browse some of our recent additions."
              : ""}
          </p>
        </div>
        <div
          className="absolute left-1/2 -z-1 transform -translate-x-1/2 rotate-45 bg-[#6DE6D5]
           w-[50px] h-[50px] -bottom-[25px]
           max-lg:z-10 md:z-10"
        ></div>
      </div>
    </div>
  );
};

export default Header;
