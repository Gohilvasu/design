import React, { use, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepComplete, userData } from "../redux/user";

const Account = ({onNext , onStep , current}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
    month: "",
    cvv: "",
    postcode: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    month: "",
    cvv: "",
    postcode: "",
    alldata: ""
  });

  const [selected , setSelected] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [checked, setCheked] = useState(false);
  const [cardChecked, setCardCheked] = useState(false);

  const [checkError, setCheckError] = useState([]);
  const [cardCheckError, setCardCheckError] = useState("");

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let postcodeRegex = /^[A-Za-z0-9]{6}$/;
  let expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  let dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("number")
  })
  const handleShowPassword = () => {
    if (formData.password.length > 0) {
      setShowPassword(!showPassword);
    }
  };
  const handleInput = (method) => {
   setSelected((prev) => (prev === method ? " " : method))
  }
  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const handleInputChnage = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.username.length === 0) {
      errors.name = "Please enter your name";

    
    } else {
      errors.name = " ";
    }
    if (checked === false) {
     
      setCheckError("Input box is not checked");
    } else {
      setCheckError(" ");
    }
    if (cardChecked === false) {
    
      setCardCheckError("Input box is not checked");
    } else {
      setCardCheckError(" ");
    }

    if (formData.number.length === 0 ) {
     
      errors.number = "Enter your card number";
    } else if (formData.number.length >= 15 || formData.number.length === 16) {
      errors.number = " ";
    } else if(formData.number.length < 15 || formData.number.length > 16) {
      
      errors.number = "Enter your valid card number";
    }
    // mm/yy

    if (!formData.month.match(expiryRegex)) {
      errors.month = "Invalid expiry format. Use MM/YY.";
    
    } else {
      errors.month = "";
     
    }

    // cvv

    if (formData.cvv.length === 0) {
      errors.cvv = "Please enter CVV";
     
    } else if (/^\d{3}$/.test(formData.cvv)) {
      errors.cvv = "";
    
    } else if(formData.cvv.length < 3) {
      errors.cvv = "CVV must be 3 digits";
     
    }
    // postcode
    if (formData.postcode.length === 0) {
      errors.postcode = "Please enter postcode";
       
    } else if (formData.postcode.match(postcodeRegex)) {
      errors.postcode = "";
     
    } else if(formData.postcode.length < 6  || formData.postcode.length > 6) {
      errors.postcode = "Postcode must be 6 characters";
       
    }

    if (formData.email.length === 0) {
      errors.email = "Please enter your email";
     
    } else if (formData.email.match(regex)) {
      errors.email = "";
   
    } else if (formData.email !== regex) {
      errors.email = "Email is not valid";
    
    }

    if (formData.password.length === 0) {
      errors.password = "Enter password";
      
    } else if (formData.password.length >= 8 ) {
      errors.password = "";
    
    } else if (formData.password.length !== 8) {
      errors.password = "Enter 8 character password";
     
    }
    if (
      formData.email.match(regex) &&
      formData.password.length >= 8 &&
      formData.username.length !== 0 &&
      formData.number.length === 16 &&
      formData.month.match(expiryRegex) &&
      /^\d{3}$/.test(formData.cvv) &&
     formData.postcode.match(postcodeRegex) &&
     checked &&
     cardChecked
    ) {
      
      localStorage.setItem("user" , formData.username)
      dispatch(userData(formData.username));
      document.cookie = "name= " + formData.email + "@5080";
      onNext(3)
      
      dispatch(stepComplete());
      navigate("/toy");
      
      document.getElementById("login_form").reset();
    }
    
    if(!formData.name &&
      !formData.email&&
      !formData.password&&
      !formData.number &&
      !formData.month &&
      !formData.cvv &&
      !formData.postcode
     ){
      errors.alldata = "Enter all details"
    }
    setFormError(errors);
  };

  return (
    <>
      <div className=" pt-4  max-sm:px-4 max-lg:px-14 sm:mt-16.5 sm:max-w-full lg:max-w-3xl lg:pt-4 lg:pb-0 xl:flex xl:flex-col xl:items-baseline xl:py-0">
        <h2 className="  text-center text-[26px] xl:p-0 xl:text-left font-[maax-mono] cursor-pointer font-normal leading-8 text-[#3A0E7B]">
          Create your account
        </h2>
        <div className="pt-6 grid grid-cols-3 gap-2 xl:w-full max-sm:flex max-sm:flex-wrap">
       
          <button className="xl:text-xs lg:text-[9px] max-sm:order-1 sm:text-[11px] border border-[#3A0E7B] h-16.5 font-[maax-mono] w-full flex justify-center gap-1 cursor-pointer items-center">
         
            <img src="/apple.png" className="w-5 h-5" alt="" />
            <p className="uppercase text-[#3A0E7B]">sign up with apple</p>
          </button>
          <button className=" xl:text-xs lg:text-[9px] max-sm:order-3 border sm:text-[11px] border-[#3A0E7B] h-16.5 font-[maax-mono] w-full flex justify-center gap-1 cursor-pointer items-center">
            <img src="/facebook.png" className="w-5 h-5" alt="" />
            <p className="uppercase text-[#3A0E7B]">sign up with facebook</p>
          </button>
          <button className="xl:text-xs lg:text-[9px] max-sm:order-2 border sm:text-[11px] border-[#3A0E7B] h-16.5 font-[maax-mono] w-full flex justify-center gap-1 cursor-pointer items-center">
            <img src="/google.png" className="w-5 h-5" alt="" />
            <p className="uppercase text-[#3A0E7B]">sign up with GOOGLE</p>
          </button>
        </div>
        <p className=" pt-2.5 pb-2.5 w-full px-17 text-center xl:pt-4.5 xl:pb-4.5 text-sm font-normal leading-5.5 xl:w-xl">
          or
        </p>

        <div className="flex items-center xl:w-full">
          <button
            onClick={toggleForm}
            className="max-sm:px-14 text-md w-full px-17 h-[65px] lg:px-20 sm:px-40 xl:text-md border cursor-pointer text-[#3A0E7B] border-[#3A0E7B] xl:xl:text-sm font-[maax-mono]   xl:pt-5.5 xl:pb-4.5"
          >
            SIGN UP WITH EMAIL
          </button>
        </div>
        {showForm && (
          <>
            <div className="mb-6.5 max-sm:mb-6 max-sm:mt-6 relative  xl:w-full xl:mb-8  max-lg:mt-11 max-lg:mb-8 xl:mt-11 group">
              <label
                for="floating_email"
                className="text-[16px] font-bold font-[maax]  text-[#3A0E7B] mb-40 "
              >
                First name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                className="focus:outline-none focus:border-b-2 focus:border focus:border-[#3A0E7B] mt-2.5 w-full block py-4.5 text-[15px] max-lg:px-4 max-sm:px-8 ps-7 font-[maax] font-normal leading-5.5 text-[#3A0E7B] px-0  text-sm bg-white border-b border-[#3A0E7B] "
                placeholder="John Smith "
                onChange={handleInputChnage}
                required
              />
              {formError.name && (
                <div id="Email-error" style={{ color: "red" }}>
                  {formError.name}
                </div>
              )}
            </div>
            <div className="mb-6.5 relative max-sm:mb-6  xl:w-full max-lg:mb-8 xl:mb-8 group">
              <label
                for="floating_email"
                className="text-[16px] font-bold font-[maax]  text-[#3A0E7B] mb-40 "
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="focus:outline-none focus:border-b-2 focus:border focus:border-[#3A0E7B] mt-2.5 w-full block py-4.5 text-[15px] ps-7 font-[maax] max-lg:px-4 max-sm:px-8 font-normal leading-5.5 text-[#3A0E7B] px-0 text-sm bg-white border-b border-[#3A0E7B] "
                placeholder="John Smith@gmail.com "
                onChange={handleInputChnage}
                required
              />
              {formError.email && (
                <div id="Email-error" style={{ color: "red" }}>
                  {formError.email}
                </div>
              )}
            </div>
            <div className="mb-6.5 relative  xl:w-full xl:mb-0 group">
              <label
                for="floating_email"
                className="text-[16px] font-bold font-[maax]  text-[#3A0E7B] mb-40 "
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                className=" focus:outline-none focus:border-b-2 focus:border focus:border-[#3A0E7B] mt-2.5 w-full block py-4.5 text-[15px] ps-7 font-[maax] max-lg:px-4 max-sm:px-8 font-normal leading-5.5 text-[#3A0E7B] px-0  text-sm bg-white border-b border-[#3A0E7B] "
                placeholder="********"
                onChange={handleInputChnage}
                required
              />
              <div
                className="absolute top-13 right-2 flex gap-2 items-center"
                onClick={handleShowPassword}
              >
                <i className="fa-solid fa-eye text-gray-400"></i>
                <p>{showPassword ? "Hide" : "Show"}</p>
              </div>
              {formError.password && (
                <div id="Password-error" style={{ color: "red" }}>
                  {formError.password}
                </div>
              )}
              <p className="xl:text-sm xl:mt-4.5 max-sm:mt-4.5 sm:text-sm sm:mt-4.5  text-[#3A0E7B] font-normal">
                Password rules go here***
              </p>
            </div>
           
          </>
        )}
         <div className="max-sm:w-xs  max-lg:px-2  mt-2.5 xl:w-full flex  flex-col xl:mt-13.5">
              {checkError && (
                <p id="Email-error" style={{ color: "red" }}>
                  {checkError}
                </p>
              )}
              <p className="text-[14px] pb-4 xl:me-10 xl:text-[16px] text-[#3A0E7B] xl:pb-5.5 font-maxx font-normal leading-5.5 flex items-center ">
              <label className="flex items-top pt-2 me-4.5 max-sm:pt-1 cursor-pointer relative">
                        <input
                          type="checkbox"
                          className="peer h-7 w-7 max-sm:w-4 max-sm:h-4  cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] checked:border-[#3A0E7B]"
                          checked={checked}
                          onChange={(e) => setCheked(e.target.checked)}
                          id="check7"
                    
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
                Email me about my Whirli account*{" "}
              </p>

              <p className=" text-[14px] xl:text-[16px] pb-2.5 text-[#3A0E7B] xl:pb-5.5 font-[maax] font-normal leading-5.5 flex items-center">
              <label className="flex items-top pt-2 me-4.5 max-sm:pt-1 cursor-pointer relative">
                        <input
                          type="checkbox"
                          className="peer h-7 w-7 max-sm:w-4 max-sm:h-4  cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] checked:border-[#3A0E7B]"
                          id="check7"
                        
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
                Email me about discounts, offers, new toys, and information
                about Whirli{" "}
              </p>
              <p className=" text-[10px] xl:text-[13px]  text-[#3A0E7B]  font-[maax] font-normal xl:leading-5.5">
                *We only email you to help you get the best value out of
                Whirli. 
                <a
                  href="https://whirli.com/privacy-policy"
                  className="border-b"
                >
                  Read our full privacy policy.img{" "}
                </a>
              </p>
            </div>
      </div>
      <div className="  mt-9 pb-4 max-sm:ps-4 max-sm:pe-4 max-lg:ps-15 max-lg:pe-15 xl:max-w-3xl xl:mt-15.5">
        <h2 className=" text-center lg:text-left xl:text-left text-[26px]  font-[maax-mono] font-normal leading-8 text-[#3A0E7B]">
          Secure Payment
        </h2>
        <div className="mt-6.5 flex flex-wrap gap-2 ">
          <div className="max-xl:mb-4.5 flex  justify-between lg:justify-between md:w-full w-xl ">
            <div className="flex items-center ">
              <label className=" me-4 flex items-top pt-2 pb-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
                <input
                  type="checkbox"
                  className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
                  id="check7"
                  checked={selected === "card"}
                  onChange={() => handleInput("card")}
                />
                <span className="absolute  text-white hover:text-sky-500 opacity-0 peer-checked:opacity-100 top-5.5 max-xl:top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
              <a className="sm:text-[13px] text-[14px] leading-4 font-bold font-[maax] xl:me-10 xl:text-[16px] text-[#3A0E7B]  xl:font-[maax] xl:font-bold xl:leading-5.5">
                Credit/debit card
              </a>
            </div>
            <div className="flex items-center justify-end lg:gap-2.5 xl:gap-2">
              <img src="/visa-bw.svg" alt="visa" />
              <img src="mastercard-bw.svg" alt="mastercard" />
              <img src="discover-bw.svg" alt="discover" />
              <img src="diners.svg" alt="diners" />
            </div>
          </div>
        </div>

        {selected === "card" && (
          <>
            <div className="mb-6.5 relative  xl:w-full xl:mb-5.5 group xl:mt-6.5">
              <label
                for="floating_email"
                className="text-[16px] font-bold font-[maax]  text-[#3A0E7B] mb-40"
              >
                Card Number
              </label>
              <input
                type="tel"
                name="number"
                maxLength={16}
                value={formData.number}
                className="focus:outline-none focus:border-b-2 focus:border  focus:border-[#3A0E7B] mt-2.5 w-full block py-4.5 text-[15px] ps-7 font-[maax] font-normal leading-5.5 text-[#3A0E7B] px-0 xl:w-[595px] text-sm bg-white border-b border-[#3A0E7B] "
                placeholder="John Smith "
                onChange={handleInputChnage}
                required
              />
              {formError.number && (
                <div id="Email-error" style={{ color: "red" }}>
                  {formError.number}
                </div>
              )}
            </div>

            <div className=" max-lg:gap-2 lg:gap-2 max-sm:gap-1 max-lg:mb-7.5 flex flex-wrap md:flex-row sm:flex-col max-sm:flex-wrap max-lg:flex-nowrap lg:mb-4  lg:flex-nowrap  xl:gap-0 xl:flex-nowrap  xl:w-[595px]">
              <div className="flex gap-2.5 md:w-3/4 max-sm:w-full">
                <div className=" sm:w-full max-sm:w-1/2 xl:w-full lg:mb-0 xl:mb-5 group">
                  <label
                    for="floating_email"
                    className=" text-[16px] font-bold font-[maax]  text-[#3A0E7B] xl:mb-40 "
                  >
                    Valid until
                  </label>
                  <input
                    type="text"
                    name="month"
                    value={formData.month}
                    className="focus:outline-none focus:border-b-2 focus:border  focus:border-[#3A0E7B] mt-2  max-sm:w-full md:w-full sm:w-full xl:mt-2.5 block py-4.5 text-[15px] ps-6 font-[maax] font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-full xl:w-[185px] text-sm bg-white border-b border-[#3A0E7B] "
                    placeholder="MM/YY"
                    onChange={handleInputChnage}
                    required
                  />
                  {formError.month && (
                    <div id="Email-error" style={{ color: "red" }}>
                      {formError.month}
                    </div>
                  )}
                </div>
                <div className=" sm:w-full max-sm:w-1/2 xl:w-full xl:mb-5 group">
                  <label
                    for="floating_email"
                    className=" text-[16px] font-bold font-[maax]  text-[#3A0E7B] xl:mb-40 "
                  >
                    CVV
                  </label>
                  <input
                    type="tel"
                    name="cvv"
                    maxLength={3}
                    value={formData.cvv}
                    className="focus:outline-none focus:border-b-2 focus:border focus:border-[#3A0E7B] mt-2  max-sm:w-full md:w-full sm:w-full xl:mt-2.5 block py-4.5  xl:me-3.5 text-[15px] ps-6 font-[maax] font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-full xl:w-[185px] text-sm bg-white border-b border-[#3A0E7B] "
                    placeholder="CVV "
                    onChange={handleInputChnage}
                    required
                  />
                  {formError.cvv && (
                    <div id="Email-error" style={{ color: "red" }}>
                      {formError.cvv}
                    </div>
                  )}
                </div>
              </div>
              <div className="max-sm:mt-6 max-lg:mt-0 max-lg:mb-0 mt-6 mb-4 md:w-1/3 max-sm:w-full lg:mb-0 lg:mt-0 xl:mt-0 xl:mb-5 group">
                <label
                  for="floating_email"
                  className="  text-[16px] font-[maax] font-bold text-[#3A0E7B] xl:mb-40 "
                >
                  Postcode
                </label>
                <input
                  type="tel"
                  name="postcode"
                  maxLength={6}
                  value={formData.postcode}
                  className="focus:outline-none focus:border-b-2 focus:border focus:border-[#3A0E7B] mt-2.5 max-lg:mt-2 sm:w-full max-sm:w-full md:w-full block py-4.5 text-[15px] ps-6 font-[maax] font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-full text-sm bg-white border-b border-[#3A0E7B] "
                  placeholder="XX XXX "
                  onChange={handleInputChnage}
                  required
                />
                {formError.postcode && (
                  <div id="Email-error" style={{ color: "red" }}>
                    {formError.postcode}
                  </div>
                )}
              </div>
            </div>

            
          </>
        )}
        <div className=" w-full xl:max-w-2xl flex flex-col gap-4 xl:mt-2">
              {/* Apple Pay */}
              <div className="flex items-center justify-between text-sm text-[#3A0E7B] font-[maax] leading-5.5">
                <div className="flex items-center ">
                  <label className=" me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
                    <input
                      type="checkbox"
                      className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
                      checked={selected === "apple"}
                      onChange={() => handleInput("apple")}
                      id="check7"
                    />
                    <span className="absolute  text-white hover:text-sky-500 opacity-0 peer-checked:opacity-100 top-5.5 max-xl:top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  <span className=" text-xs sm:text-sm xl:text-[16px]">
                    Pay with Apple Pay
                  </span>
                </div>
                <img src="/applepay.svg" alt="Apple Pay" className="h-6" />
              </div>

              {/* Google Pay */}
              <div className="flex items-center justify-between text-sm text-[#3A0E7B] font-[maax] leading-5.5">
                <div className="flex items-center ">
                  <label className="me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
                    <input
                      type="checkbox"
                      className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
                      checked={selected === "google"}
                      onChange={() => handleInput("google")}
                      id="check7"
                    />
                    <span className="absolute  text-white hover:text-sky-500 opacity-0 peer-checked:opacity-100 top-5.5 max-xl:top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  <span className="text-xs  sm:text-sm xl:text-[16px]">
                    Pay with Google Pay
                  </span>
                </div>
                <img src="/gpay.svg" alt="Google Pay" className="h-6" />
              </div>

              {/* Klarna */}
              <div className="flex items-center justify-between text-sm text-[#3A0E7B] font[maax] leading-5.5">
                <div className="flex items-center ">
                  <label className="me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
                    <input
                      type="checkbox"
                      className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
                      checked={selected === "klarna"}
                      onChange={() => handleInput("klarna")}
                      id="check7"
                    />
                    <span className="absolute  text-white hover:text-sky-500 opacity-0 peer-checked:opacity-100 top-5.5 max-xl:top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                  <span className="text-xs  sm:text-sm xl:text-[16px]">
                    Pay with 4 interest-free payments of XXX with Klarna{" "}
                    <a href="#" className="underline">
                      Learn more
                    </a>
                  </span>
                </div>
                <img src="/Klarna.png" alt="Klarna" className="h-6" />
              </div>
            </div>
            <div className=" mt-6 xl:w-3xl flex item-center flex-col xl:mt-10.5">
              <div className=" text-[10px] pb-4 xl:me-10 xl:text-[16px] text-[#3A0E7B] xl:pb-3.5 flex items-center font-[maax] font-normal leading-5.5">
              <label className="flex items-top me-4.5 pt-2 pb-2 max-sm:pt-1 cursor-pointer relative">
                        <input
                          type="checkbox"
                          className="peer h-7 w-7 max-sm:w-4 max-sm:h-4  cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] checked:border-[#3A0E7B]"
                          onChange={(e) => setCardCheked(e.target.checked)}
                          id="check7"
                     
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
                I accept all{" "}
                <a
                  href="https://whirli.com/subscription-terms-and-conditions"
                  className="underline"
                >
                  Subscription Terms and Conditions 
                </a>
                 (required)
              </div>
              {cardCheckError && (
                <p id="Email-error" style={{ color: "red" }}>
                  {cardCheckError}
                </p>
              )}
            </div>

        <button
          className=" text-md w-full  h-[65px] lg:px-20 sm:px-40 xl:text-md border cursor-pointer bg-[#3A0E7B] text-[white] border-[#3A0E7B] xl:xl:text-sm font-[maax-mono]   xl:pt-5.5 xl:pb-4.5"
          onClick={submitValue}
        >
          CREATE ACCOUNT & PAY NOW
        </button>
        {formError.alldata && (
                  <div className="pt-1 text-center" id="Email-error" style={{ color: "red" }}>
                    {formError.alldata}
                  </div>
                )}
      </div>
    </>
  );
};

export default Account;
