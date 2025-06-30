import React from "react";

const Payment = () => {
  return (
    <div className=" mt-9 ps-4 pe-4 pb-4 xl:max-w-3xl xl:mt-15.5 xl:ms-36.5">
      <h2 className=" text-center xl:text-left text-[26px]  font-mono font-normal leading-8 text-[#3A0E7B]">
        Secure Payment
      </h2>
      <div className="mt-6.5 flex flex-wrap gap-2 ">
        <div className="mb-4.5 flex  justify-between lg:justify-between w-xl xl:mb-6.5">
          <div className="flex items-center  xl:gap-2 ">
            <label className="sm:me-1 me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
              <input
                type="checkbox"
                className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
                id="check7"
                defaultChecked
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
            <a className="sm:text-[13px] text-[14px] leading-4 font-bold xl:me-10 xl:text-[16px] text-[#3A0E7B]  xl:font-mono xl:font-bold xl:leading-5.5">
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

      <div class="mb-6.5 relative  xl:w-full xl:mb-5.5 group">
        <label
          for="floating_email"
          className="text-[16px] font-bold font-maxx  text-[#3A0E7B] mb-40 "
        >
          Card Number
        </label>
        <input
          type="number"
          name="floating_email"
          id="floating_email"
          className="mt-2.5 w-full block py-4.5 text-[15px] ps-7 font-mono font-normal leading-5.5 text-[#3A0E7B] px-0 xl:w-xl text-sm bg-white border-b border-[#3A0E7B] "
          placeholder="John Smith "
          required
        />
      </div>

      <div className="flex flex-wrap  justify-between lg:mb-4  lg:flex-nowrap lg:w-xl xl:flex-nowrap items-center xl:w-xl">
        <div class="  xl:w-full lg:mb-0 xl:mb-5 group">
          <label
            for="floating_email"
            className=" text-[16px] font-bold font-maxx  text-[#3A0E7B] xl:mb-40 "
          >
            Valid until
          </label>
          <input
            type="number"
            name="floating_email"
            id="floating_email"
            className="mt-2 sm:w-[128px] md:w-42 xl:mt-2.5 w-[145px] block py-4.5 lg:me-3 xl:me-3.5 text-[15px] ps-6  font-mono font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-[155px] xl:w-[185px] text-sm bg-white border-b border-[#3A0E7B] "
            placeholder="MM/YY"
            required
          />
        </div>
        <div class="  xl:w-full xl:mb-5 group">
          <label
            for="floating_email"
            className=" text-[16px] font-bold font-maxx  text-[#3A0E7B] xl:mb-40 "
          >
            CVV
          </label>
          <input
            type="number"
            name="floating_email"
            id="floating_email"
            className=" mt-2 sm:w[128px] md:w-42 xl:mt-2.5 w-[145px] block py-4.5 lg:me-3 xl:me-3.5 text-[15px] ps-6 font-mono font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-[155px] xl:w-[185px] text-sm bg-white border-b border-[#3A0E7B] "
            placeholder="CVV "
            required
          />
        </div>
        <div class=" mt-6 mb-4 w-full lg:mb-0 lg:mt-0 xl:mt-0 xl:mb-5 group">
          <label
            for="floating_email"
            className="  text-[16px] font-maxx font-bold text-[#3A0E7B] xl:mb-40 "
          >
            Postcode
          </label>
          <input
            type="number"
            name="floating_email"
            id="floating_email"
            className="mt-2.5 w-full block py-4.5 lg:me-3.5 xl:me-3 text-[15px] ps-6 font-mono font-normal leading-5.5 text-[#3A0E7B] px-0 lg:w-[155px] xl:w-[185px] text-sm bg-white border-b border-[#3A0E7B] "
            placeholder="XX XXX "
            required
          />
        </div>
      </div>

      <div className=" w-full xl:max-w-2xl flex flex-col gap-4 xl:mt-2">
        <div className="flex items-center justify-between text-sm text-[#3A0E7B] font-mono leading-5.5">
          <div className="flex items-center ">
            <label className=" me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
              <input
                type="checkbox"
                className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
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
            <span className=" text-xs xl:text-[16px]">Pay with Apple Pay</span>
          </div>
          <img src="/applepay.svg" alt="Apple Pay" className="h-6" />
        </div>

        <div className="flex items-center justify-between text-sm text-[#3A0E7B] font-mono leading-5.5">
          <div className="flex items-center ">
            <label className="me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
              <input
                type="checkbox"
                className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
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
            <span className="text-xs xl:text-[16px]">Pay with Google Pay</span>
          </div>
          <img src="/gpay.svg" alt="Google Pay" className="h-6" />
        </div>

        <div className="flex items-center justify-between text-sm text-[#3A0E7B] font-mono leading-5.5">
          <div className="flex items-center ">
            <label className="me-4 flex items-top pt-2 max-xl:pt-1 cursor-pointer relative xl:me-5">
              <input
                type="checkbox"
                className="peer h-7 w-7 max-xl:w-4 max-xl:h-4 cursor-pointer transition-all appearance-none shadow hover:shadow-md border border-[#3A0E7B] checked:bg-[#3A0E7B] rounded-full checked:border-[#3A0E7B]"
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
            <span className="text-xs xl:text-[16px]">
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
        <p className=" text-[10px] pb-4 xl:me-10 xl:text-[16px] text-[#3A0E7B] xl:pb-3.5 flex items-center font-maxx font-normal leading-5.5">
          <input
            id="link-checkbox"
            type="checkbox"
            className="me-4 w-4 h-4 xl:h-[28px] xl:w-[28px] xl:me-5 border border-[#3A0E7B]   text-[#3A0E7B] accent-[#3A0E7B] "
          />
          I accept all{" "}
          <a
            href="https://whirli.com/subscription-terms-and-conditions"
            className="underline"
          >
            Subscription Terms and Conditions 
          </a>
           (required)
        </p>
        <button className="text-md mb-9 pt-4 pb-4  bg-[#3A0E7B] border xl:mb-26 border-[#3A0E7B] text-[#FFFFFF] xl:text-lg font-maxx xl:w-xl  xl:pt-5.5 xl:pb-5.5">
          CREATE ACCOUNT & PAY NOW
        </button>
      </div>
    </div>
  );
};

export default Payment;
