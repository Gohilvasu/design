import React, { useState } from "react";

const ProductFooter = () => {
  const [active, setActive] = useState(false);
  const [about, setAbout] = useState(false);
  const [support, setSupport] = useState(false);
  const [laegal, setLaegal] = useState(false);
  return (
    <div className="bg-[#3A0E7B]">
    <div className="2xl:container max-sm:pt-14 max-sm:pb-6 sm:pt-18  md:pb-8 xl:pt-20 mx-auto  ">
      <div className="flex flex-col items-start max-sm:pt-14 max-sm:pb-6 xl:px-20 max-xl:px-5 mx-auto">
        <div className="flex max-xl:flex-col w-full justify-between max-xl:justify-center md:pb-20">
          <div className="xl:w-45 max-sm:flex max-sm:w-full  max-xl:flex max-xl:justify-center max-xl:mb-12 max-sm:mb-12 ">
            <svg
              className=" max-xl:w-30 max-xl:flex max-xl:justify-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 404.3"
            >
              <g className="c-frame c-frame--19">
                <path
                  d="M362.3 180.3c2.3 15.7 18.3 23 28.1 10 8.6-11.8 5.2-35.7-9.8-38l-2.8.1-2.7.8-2.6 1.4c-8 5.5-11.6 16.1-10.2 25.7zM117.1 292.9c14 4.7 21.3-7.4 16.2-19.5-4.2-10.5-15.6-18.8-27.1-18l-2.7.6-2.3 1.2-1.9 1.7c-8.3 12.4 7.2 30.7 17.8 34zm158.3 85.2c-18.8-45.1-37.3-93.2-56.7-137.9-2.9-4-9.7-1-13 0-6.9 2.1-12 3.2-18.4 5.1l-.8.5-.7.6-.6.7c-.1.3-.4.7-.6 1.7 0 .4-.1.8.1 1.9 14.6 36.3 30.4 74.5 45.2 110.8-12.2 3-25.1 5.3-37.6 7.4l-.8.4-.6.5-.5.6-.4.7c-.1.3-.2.7-.3 1.7 4.3 10.3 8.3 27.9 15.5 27.6 22.6-3.2 46.2-8.8 68-15.7l.8-.5.7-.7c.2-.3.5-.6 1-1.6.1-.4.2-.8.3-1.9l-.1-1-.5-.9zm65.3-113.7c-11.6 5.9-23.8 14.3-37 15l-4.2-.5-3.4-1.3-2.7-1.9-2.2-2.4c-2.9-4.1-4.9-9.6-4.9-14.8l.6-3.3 1.5-3.4 2.6-3.5c9.8-9.7 23.6-14.1 35.4-21.1 4.9 12 10.1 24.7 15 36.8l-.7.4zm61.3 55.3c-18.7-45.5-37.6-93.8-57-138.9l-.7-.6-.8-.5-.8-.3-.9-.1-.9.1-.9.3c-34.4 22.7-68 31.6-83.4 55l-4.4 8.4-2.6 8.9-.7 9.3 1.2 9.8c5.9 24.9 24 41.9 47.1 43.9-11.3 69.6-23.3 71.6 25.8 51.7 5.5-2.1 4.5-14.7 6-19 2.2-13.4 4.5-28.3 6.5-41.8 6.2-3.1 12.7-6.5 18.9-9.9 5.7 13.7 11.3 28.2 17.2 42 .2.3.5.7 1.3 1.4l.8.5.9.3.9.1h1l.9-.2c9.7-6.2 27-12.4 24.6-20.4zm40.1-29.8c-12.4-30.3-25-62.5-38-92.5l-.6-.6-.7-.4-.7-.3-.8-.1-.8.1-.7.3c-5.8 4.7-12 9.5-18 14.2-5.9 5.5 6.6 24.4 8.1 30.9 8.3 20.1 18.8 46.3 27.7 67.6.2.3.5.7 1.2 1.4l.7.4.8.3.8.1.8-.1.8-.3c6.3-4.6 13.2-9.3 18.6-15 .9-1.3 1.3-4 .8-6zM181.4 397.7c-49.2-116.7-28.8-92.2-64.4-93.9l-.7.2-.6.4-.4.5-.3.6-.1.7v.8c8.1 21.8 19.8 48.5 27.7 68.6 5.9 12 8 26.6 15.4 28.4 6.9.2 14.4-.1 21.5-.8l.7-.3.6-.5.5-.6.3-.7.2-.8c0-.4 0-.8-.1-1.8l-.3-.8zM440 59.5c1.9 10.3 8.9 20.6 12.8 30.3-4.2-10.3-8.7-21.2-12.9-31.6v.4c0 .4 0 .2.1.9zm58.9 155.4c-3.1-13.7-7.8-20.2-13.9-36.6-14-33.4-29.7-74.3-45-109.2l-.3-.3-.3-.1h-.2l-.2.2c-.9 4.4-2.3 9.1-4 13.7-.8 4.4 2.1 9.9 3.8 14.2 5.9 14.4 12.2 29.9 18.1 44.3-4.7 11-11.8 21.7-19.3 31.1-7.6-17.4-13.8-36.3-22.2-53l-.6-.4-.6-.3-.6-.1-.6.1-.6.3c-4.4 5.1-9.2 10.2-14 15.2-3.4 7.2 1.5 11.1 4.2 19.6 4.9 12 8.3 20.4 13.3 32.6 14.2 33.3 24.7 63.4 39.1 94.2l.6.4.7.3.7.1.7-.1.7-.3c6.5-7.4 15.9-13.2 14.6-20.8-6.6-18.8-15.2-37.3-22.5-55.8 7.5-9.3 14.6-20 19.3-31.1 8.1 18.4 14.7 38.4 23.6 56.2l.4.3.4.1.3-.1.3-.3c1.8-4.1 3.2-9.1 4-13.7l.1-.7zM106.1 394C63.7 228.6 86.4 262.4 50.9 252h-.4l-.4.2-.3.3-.2.4-.1.5v.6c6.2 24.8 13.8 50.8 20.8 75.5-53.2-101.7-35.7-78.7-56.6-97C9.5 222.2 5 211.2.8 200.8c-.1 13 5.9 22.1 10.7 35.2 7.4 18.4 16.6 40.7 23.8 57.8 15.5 34.1 27.4 72.3 34.6 81h.1l.1-.1c-8.1-24-17.5-49.2-25.3-73.4 49.3 101.6 38.5 87.7 60.3 95.9h.4l.4-.1.3-.3.2-.4.1-.5c-.2-.5-.2-.9-.4-1.9z"
                  style={{ fill: "rgb(112, 226, 210)" }}
                ></path>
                <path
                  d="M433.3 34.4l-1-1.4 7.3 15.3zm49.6 119.9c-16.8-40.1-32.9-83.6-51.7-122.9-1-1.2-1.8-2.5-3.3-3.9l-.2-.1-.1.1c12.3 33.8 31.2 76.4 43 106.7 9.2 20.8 10.8 32.6 22.6 47l-10.3-26.9zM415.3 75c-4.6-1.1-9.6-2-14.5-2.7-4.9-12-10.1-24.7-15-36.8C412.9 38 421.4 50 426.7 70l.1 2.3-.5 1.8-1.2 1.3-2.1.6c-1.9 0-5.8-.6-7.7-1zm65.3 91c-9-20.1-22.7-39.9-34-58.7l1.4-1.8.8-2.3c.7-14.3-5.2-24.6-10.9-39.2C429 44.3 417 20.6 396.6 9.6c-14.7-5.9-31.5-7.4-47.3-7.8l-.7.2-.5.4-.4.6-.3.6-.1.8v.8c12.6 33 28.9 70.9 41.7 102.8 6.6 13.4 13.1 40 20.3 40.6 6.5.3 13.4.8 20.1 1.4l.6-.2.5-.3.3-.4.2-.6c0-.3.1-.6.1-1.5-5.1-14.1-11.7-28.8-17.3-42.9 4.5.6 9.3 1.5 14.1 2.6 48.7 65.7 25.7 44 52.4 60.7h.2l.1-.1.1-.1.1-.2c-.1-.1 0 0-.2-1zM301.9 19.2c3.1 14.1 22 26.4 34.7 18 13.9-13.1-7.2-36.7-21.3-36l-3.1.3-2.9.9-2.5 1.4-2.1 2c-2.9 3.7-3.9 8.6-2.8 13.4zm85.3 124.4c-9.5-23.3-19.9-48.6-29.2-71.4-5.7-11.6-5.8-21.6-13.7-23.5-7.3.3-15.1 1-22.5 2.2l-.8.4-.6.5-.5.6-.4.7-.2.8c0 .4-.1.8.1 1.8 49.5 118 28.9 93.7 66 93.3l.7-.3.6-.4.5-.6c.1-.3.3-.6.5-1.5 0-.4 0-.8-.1-1.8l-.4-.8zm-48.5 5.8C285.5 22.4 284.7 8 276.5 8.8c-8.4 1.5-17.2 3.5-25.6 5.8-.3.2-.7.4-1.5 1.1l-.6.7-.4.8c-.1.4-.2.8-.3 1.9 6.1 17.4 14.4 35.4 21.2 52.7-18.2 4.9-37.2 11.1-54.9 18-7-16.9-14-34.8-21.2-51.7-.3-.3-.5-.7-1.4-1.5-.3-.2-.7-.5-1.8-.9-.7-.2-1.6-.4-3.1-.2-8.4 3.2-17.1 6.9-25.4 10.9-1.3 1-2.7 2.8-2.7 5.3 18.1 46 37.9 94.4 57.2 139.9.3.2.6.6 1.6 1.2l.9.4c.4.1.8.2 2 .2l1-.2c8.2-3.6 16.9-7.3 25.4-10.9.6-.4.7-.5 1.5-1.4.2-.3.5-.7 1-1.7.1-.4.2-.8.3-2-6.4-18.3-15.2-37.3-22.3-55.5 17.6-6.9 36.6-13.1 54.9-18 11.7 25.6 20.6 59.1 27.5 57.6 8.7-1.4 17.8-4.1 26.6-5.8.3-.2.7-.3 1.5-1l.5-.7.4-.8.2-.9.1-.9-.1-1-.3-.8zm-166.6 59C164 159 158.4 105.9 149.6 56.8c-.2-.2-.3-.4-.8-.8-4.5-3.8-10.8 2.5-15.8 4.4-5.2 3.9-14.6 5.1-16.8 12.3 4 29.9 10.7 60.3 15.8 89.9-16.3-22.1-32.8-45.9-49.3-67.9-.2-.1-.5-.3-1.3-.6-.3 0-.6-.1-1.4-.1-.3.1-.6.1-1.4.4-26.4 20.5-24.1 14.3-20 34.8 5.8 27.6 11.1 52.4 16.9 78.2-14.7-22.1-28.8-46.4-43.8-68.3-.2-.1-.4-.2-1.1-.4h-.5l-.5.1-.5.3c-4.3 6.1-11.8 11.6-12.4 19.4 3.2 12.5 11.5 20.3 19.1 34.5C52 218.3 72.7 254.9 92 280.9l.5.1h.5l.5-.1.5-.3c5.1-5.5 10.7-11 16.3-16.3 4.2-4.9-4.7-31.3-4.2-34.2-4.7-23.6-8.1-41.4-12.1-62.7 15.7 22 32.2 45.3 48.2 67.1l.6.5c.2.1.5.3 1.3.6.3 0 .6.1 1.4.1 27.9-17.5 28.8-14.6 26.6-27.3zm-152.6-1c-1.2-10.1-3.2-22-11.3-29.1l-1.5-.7H5.4l-1.1.6-.8 1.3-.6 1.8c-.9 14.2 4.7 31 12.3 39.7l.6.3.5.1h.5l.5-.2.4-.4c2.4-3.4 2-9.1 1.8-13.4zm40.1 137.2c-3.4-8.6-6.9-17.9-10.9-26.4 3.6 8.8 7.4 18.2 11.1 27.2 0-.1 0 .2-.2-.8zm6.6-26c-11.9-32-25.6-65.6-39.5-96.7l-.4-.3-.4-.1-.4.1-.3.3c-4.7 10.6-5.2 16-1.1 24.2 13.2 31 23.6 60.5 37.2 89.5l.3.1.3-.1.2-.2c.7-5.7 4.6-10.6 4.1-16.8z"
                  style={{ fill: "rgb(255, 242, 79)" }}
                ></path>
              </g>
            </svg>
          </div>
          <div className="text-white flex max-xl:flex-wrap items-start justify-between sm:ps-6 xl:ps-0 max-sm:flex-col max-sm:px-5 gap-5">
            <ul className="xl:w-50 max-sm:w-full">
              <div className="max-sm:flex max-sm:items-center max-sm:justify-between">
                <h2
                  className={`sm:text-[#6DE6D5] md:text-base md:font-[maax] max-md:text-xl max-md:font-[maax-mono] max-sm:py-5 ${
                    active ? "text-[#6DE6D5]" : ""
                  }`}
                >
                  USE WHIRLI
                </h2>
                <span
                  onClick={() => setActive(!active)}
                  className="sm:hidden cursor-pointer"
                >
                  <svg
                    data-v-14d85fad
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 v-icon v-accordion__header-icon text-[#3A0E7B] ${
                      active
                        ? "max-sm:transition-all max-sm:rotate-180 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-[#6DE6D5]"
                        : "max-sm:transition-all max-sm:rotate-0 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-white "
                    } v-icon--down v-icon--base u-color-secondary`}
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>
                </span>
              </div>
              <ul
                className={` ${
                  active
                    ? " max-sm:overflow-hidden  max-sm:max-h-235 max-h-150 transition-[max-height] duration-1000 ease-in-out text-white  max-sm:border-b"
                    : " max-sm:overflow-hidden max-h-0 transition-[max-height] duration-1000 ease-in-out text-white max-sm:border-b"
                }`}
              >
                <li className="pt-6 mb-4 text-base font-[maax]">Browse toys</li>
                <li className="mb-4 text-base font-[maax]">Pricing</li>
                <li className="text-base font-[maax] max-sm:mb-4">Gifting</li>
              </ul>
            </ul>

            <ul className="xl:w-50 max-sm:w-full">
              <div className="max-sm:flex max-sm:items-center max-sm:justify-between ">
                <h2
                  className={`sm:text-[#6DE6D5] md:text-base md:font-[maax] max-md:text-xl max-md:font-[maax-mono] max-sm:py-5  ${
                    about ? "text-[#6DE6D5]" : ""
                  }`}
                >
                  ABOUT US
                </h2>
                <span
                  onClick={() => setAbout(!about)}
                  className="sm:hidden cursor-pointer"
                >
                  <svg
                    data-v-14d85fad
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 v-icon v-accordion__header-icon text-[#3A0E7B]  ${
                      about
                        ? " max-sm:overflow-hidden max-sm:transition-all max-sm:rotate-180 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-[#6DE6D5]"
                        : " max-sm:overflow-hidden max-sm:transition-all max-sm:rotate-0 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-white"
                    } v-icon--down v-icon--base u-color-secondary`}
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>
                </span>
              </div>
              <ul
                className={` ${
                  about
                    ? " max-sm:overflow-hidden  max-sm:max-h-235  max-sm:transition-[max-height] max-sm:duration-1000 max-sm:ease-in-out text-white max-sm:border-b"
                    : " max-sm:overflow-hidden max-sm:max-h-0 max-sm:transition-[max-height] max-sm:duration-1000 max-sm:ease-in-out text-white max-sm:border-b"
                }`}
              >
                <li className="pt-6 mb-4 text-base font-[maax]">How it works</li>
                <li className=" mb-4 text-base font-[maax]">Reviews</li>
                <li className="text-base font-[maax] max-sm:mb-4">Blogs</li>
              </ul>
            </ul>

            <ul className="xl:w-50 max-sm:w-full">
              <div className="max-sm:flex max-sm:items-center max-sm:justify-between ">
                <h2
                  className={`sm:text-[#6DE6D5]  md:text-base md:font-[maax] max-md:text-xl max-md:font-[maax-mono] max-sm:py-5 ${
                    support ? "text-[#6DE6D5]" : ""
                  }`}
                >
                  SUPPORT
                </h2>
                <span
                  onClick={() => setSupport(!support)}
                  className="sm:hidden cursor-pointer"
                >
                  <svg
                    data-v-14d85fad
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 v-icon v-accordion__header-icon text-[#3A0E7B]  ${
                      support
                        ? "max-sm:transition-all max-sm:rotate-180 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-[#6DE6D5]"
                        : "max-sm:transition-all max-sm:rotate-0 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-white"
                    } v-icon--down v-icon--base u-color-secondary`}
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>
                </span>
              </div>
              <ul
                className={` ${
                  support
                    ? " max-sm:overflow-hidden  max-sm:max-h-235  max-sm:transition-[max-height] max-sm:duration-1000 max-sm:ease-in-out text-white max-sm:border-b"
                    : " max-sm:overflow-hidden max-sm:max-h-0 max-sm:transition-[max-height] max-sm:duration-1000 max-sm:ease-in-out text-white max-sm:border-b"
                }`}
              >
                <li className="pt-6 mb-4 text-base font-[maax]">Contact Us</li>
                <li className=" mb-4 text-base font-[maax]">Frequently ask questions</li>
                <li className=" mb-4 text-base font-[maax] ">
                  Returns and refund policy{" "}
                </li>
                <li className="md:text-base md:font-[maax] max-md:text-xl max-md:font-[maax-mono] max-sm:mb-4">Careers</li>
              </ul>
            </ul>

            <ul className="xl:w-50 max-sm:w-full">
              <div className="max-sm:flex max-sm:items-center max-sm:justify-between ">
                <h2
                  className={`sm:text-[#6DE6D5]  md:text-base md:font-[maax] max-md:text-xl max-md:font-[maax-mono] max-sm:py-5 ${
                    laegal ? "text-[#6DE6D5]" : ""
                  }`}
                >
                  LAEGAL
                </h2>
                <span
                  onClick={() => setLaegal(!laegal)}
                  className="sm:hidden cursor-pointer"
                >
                  <svg
                    data-v-14d85fad
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 v-icon v-accordion__header-icon text-[#3A0E7B]  ${
                      laegal
                        ? "max-sm:transition-all max-sm:rotate-180 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-[#6DE6D5] "
                        : "max-sm:transition-all max-sm:rotate-0 max-sm:duration-500 max-sm:ease-in-out max-sm:fill-white "
                    } v-icon--down v-icon--base u-color-secondary`}
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>
                </span>
              </div>
              <ul
                className={` ${
                  laegal
                    ? " max-sm:overflow-hidden  max-sm:max-h-235 max-sm:transition-[max-height] max-sm:duration-1000 max-sm:ease-in-out text-white max-sm:border-b"
                    : " max-sm:overflow-hidden max-sm:max-h-0 max-sm:transition-[max-height] max-sm:duration-1000 max-md:ease-in-out text-white max-sm:border-b"
                }`}
              >
                <li className="pt-6 mb-4 text-base font-[maax]">
                  Privacy and Cookie Policy
                </li>
                <li className=" mb-4 text-base font-[maax] max-sm:mb-4">
                  Website Terms of use
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="md:flex md:justify-between md:items-center w-full max-md:flex-col max-md:mt-6">
          <ul className=" flex  md:justify-center  items-center  max-md:mb-14 max-md:justify-center">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="v-icon v-btn-icon__graphic v-icon--medium u-color-white w-8 fill-white"
              >
                <path d="M17.8 10.6v2.5h4.1l-.5 3.9h-3.5v10h-4.3V16.9H10V13h3.5v-3c0-.7.1-1.4.4-2 .6-1.6 1.8-2.5 3.5-2.8.8-.2 1.5-.2 2.3-.2.7 0 2.3.1 2.3.1v3.5h-2.1c-.3 0-.6 0-.8.1-.7.1-1.1.5-1.1 1.2-.2.2-.2.4-.2.7"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="v-icon v-btn-icon__graphic v-icon--medium u-color-white  w-8 fill-white ms-6"
              >
                <path d="M21.9 8.8c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3M16 19.7c-2 0-3.7-1.6-3.7-3.7 0-2 1.6-3.7 3.7-3.7s3.7 1.6 3.7 3.7c0 2-1.7 3.7-3.7 3.7m0-9.3c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6c0-3.1-2.5-5.6-5.6-5.6M16 5c-3 0-3.4 0-4.5.1-1.2.1-2 .2-2.7.5-.7.3-1.3.6-2 1.2-.6.6-1 1.2-1.3 1.9-.3.7-.5 1.5-.5 2.7V16c0 3 0 3.4.1 4.5.1 1.2.2 2 .5 2.7.3.7.7 1.3 1.3 1.9.6.6 1.2 1 1.9 1.3.7.3 1.5.5 2.7.5 1.1.1 1.5.1 4.5.1s3.4 0 4.5-.1c1.2-.1 2-.2 2.7-.5.7-.3 1.3-.7 1.9-1.3.6-.6 1-1.2 1.3-1.9.3-.7.5-1.5.5-2.7.1-1.1.1-1.5.1-4.5s0-3.4-.1-4.5c-.1-1.2-.2-2-.5-2.7-.3-.7-.7-1.3-1.3-1.9-.6-.6-1.2-1-1.9-1.3-.7-.3-1.5-.5-2.7-.5C19.4 5 19 5 16 5m0 2c2.9 0 3.3 0 4.4.1 1.1 0 1.7.2 2 .4.5.2.9.4 1.3.8s.6.8.8 1.3c.2.4.3 1 .4 2 .1 1.1.1 1.5.1 4.4s0 3.3-.1 4.4c0 1.1-.2 1.7-.4 2-.2.5-.4.9-.8 1.3s-.8.6-1.3.8c-.4.2-1 .3-2 .4-1.1.1-1.5.1-4.4.1s-3.3 0-4.4-.1c-1.1 0-1.7-.2-2-.4-.5-.2-.9-.4-1.3-.8s-.6-.8-.8-1.3c-.2-.4-.3-1-.4-2C7 19.3 7 18.9 7 16s0-3.3.1-4.4c0-1.1.2-1.7.4-2 .1-.6.4-1 .7-1.4.4-.3.8-.6 1.3-.8.4-.2 1-.3 2-.4H16"></path>
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                class="v-icon v-btn-icon__graphic v-icon--medium u-color-white w-8 fill-white ms-6"
              >
                <path d="M28 9.2c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.5 2.2-2.7-1 .5-2 .9-3.1 1.2-1-.9-2.3-1.5-3.7-1.5-2.7 0-4.9 2.1-4.9 4.8 0 .4 0 .7.1 1.1-4.1-.2-7.7-2.1-10.1-5-.5.7-.7 1.5-.7 2.4 0 1.7.9 3.1 2.2 4-.8 0-1.6-.2-2.2-.6v.1c0 2.3 1.7 4.3 3.9 4.7-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3C9.6 23.2 7.5 24 5.2 24c-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.3 14-13.7v-.6c1-.7 1.8-1.6 2.5-2.6"></path>
              </svg>
            </li>
          </ul>

          <ul className=" flex  justify-center  items-center md:gap-1.5  max-md:mb-14 max-md:justify-center max-md:gap-1">
            <li>
              <img
                data-v-fce06f30
                data-v-d5734ffa
                alt="We accept Visa payments"
                lazy="loaded"
                title="Accepted payment methods"
                height="28"
                width="44"
                className="v-image v-payment-methods__logo v-image--cover"
                src="/visa.svg"
              />
            </li>
            <li><img
                data-v-fce06f30
                data-v-d5734ffa
                alt="We accept Visa payments"
                lazy="loaded"
                title="Accepted payment methods"
                height="28"
                width="44"
                className="v-image v-payment-methods__logo v-image--cover"
                src="/mastercard.svg"
              /></li>
            <li><img
                data-v-fce06f30
                data-v-d5734ffa
                alt="We accept Visa payments"
                lazy="loaded"
                title="Accepted payment methods"
                height="28"
                width="44"
                className="v-image v-payment-methods__logo v-image--cover"
                src="/amex.svg"
              /></li>
              <li><img
                data-v-fce06f30
                data-v-d5734ffa
                alt="We accept Visa payments"
                lazy="loaded"
                title="Accepted payment methods"
                height="28"
                width="44"
                className="v-image v-payment-methods__logo v-image--cover"
                src="/gpay.svg"
              /></li>
              <li>
              <img
                data-v-fce06f30
                data-v-d5734ffa
                alt="We accept Visa payments"
                lazy="loaded"
                title="Accepted payment methods"
                height="28"
                width="44"
                className="v-image v-payment-methods__logo v-image--cover"
                src="/applepay.svg"
              />
              </li>
          </ul>

          <p className="text-[13px] font-[maax] text-white max-md:text-center">
          © 2025 Whirli. All rights reserved.
        </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductFooter;
