import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import RatingBar from "../components/RatingBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "/swiper-custom.css";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const name = useSelector((state) => state.user.slug);
  const [details, setDetails] = useState(null);
  const [active, setActive] = useState(false);
  const [review, setReview] = useState(false);
  const [skill, setSkill] = useState(false);

  const productData = async () => {
    let data = await axios.get(
      `https://staging.api.whirli.com/api/guest/products/${name}?with=productVariants%3Broute%3Bassets.transforms`
    );

    setDetails(data.data.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    productData();
  }, [name]);
  return (
    <>
      <ProductHeader />
      <div className="2xl:container mx-auto">
        <div className=" lg:items-start max-lg:mt-18 lg:mx-11  lg:mb-2 lg:flex lg:justify-between lg:pb-12 max-lg:pb-2">
          <div className="max-md:w-full lg:w-2/5 lg:flex lg:justify-center ">
            <div className="max-lg:flex max-lg:justify-center">
              <div className=" max-lg:w-md cursor-pointer  lg:w-md overflow-x-auto flex space-x-4 snap-x snap-mandatory scrollbar-hide ">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={20}
                  slidesPerView={1}
                  className="max-md:w-full lg:w-md mx-auto  sm:w-100 max-sm:w-75  overflow-hidden sm:h-120 max-sm:h-90 "
                >
                  {details?.assets?.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img.url}
                        alt={`Product image ${index + 1}`}
                        className="object-contain w-full h-auto"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="max-lg:flex max-lg:justify-center max-sm:w-full max-md:mb-4 max-lg:mb-4 lg:w-2/5  ">
            <div className="relative">
              <Link to="/toy">
                <span className="  cursor-pointer flex text-[#3A0E7B] mb-10 text-base font-[maax]">
                  {" "}
                  <svg
                    data-v-524bed36
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className=" me-1 rotate-90 fill-[#3A0E7B] w-6 v-icon v-toy-description__back-icon v-icon--left v-icon--base u-color-secondary"
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>{" "}
                  Back
                </span>
              </Link>
              <div className=" max-sm:w-full max-md:ps-4 max-lg:ps-6 ">
                <h1 className="  max-md:mb-4 max-md:font-normal max-lg:text-2xl max-lg:mb-4 md:text-[48px] text-[#3A0E7B] max-lg:w-full font-[maax-mono] lg:leading-14">
                  {details?.name}
                  <div className=" inline-block lg:mx-10 max-lg:mx-6">
                    <div className="border-[#eee] p-2 border rounded-full">
                      <div className="lg:w-8 lg:h-8 sm:w-5 sm:h-5 max-sm:w-3.5 max-sm:h-3.5 flex items-center justify-center text-[#3a0e7b]">
                        <i className="fa-regular fa-heart lg:text-2xl sm:text-base max-sm:text-sm"></i>
                      </div>
                    </div>
                  </div>
                </h1>

                <div className="flex items-start gap-4 pt-6 pb-2">
                  <span>
                    <input
                      id="lp-price-radio-group-0"
                      aria-describedby="lp-price-radio-group-0-error"
                      aria-label
                      aria-labelledby
                      name="pricing"
                      tabIndex="0"
                      type="radio"
                      className=" text-[#3A0E7B] accent-[#3A0E7B]   v-radio-btn__input"
                      value="£129.49"
                      defaultChecked
                    ></input>{" "}
                  </span>{" "}
                  <div className="flex items-start flex-col text-[#3A0E7B] font-[maax] relative">
                    <p className=" text-base font-bold ">
                      {details?.tokens} Tokens
                    </p>
                    <div className="max-lg:flex max-lg:flex-wrap max-lg:gap-1 flex justify-between lg:items-end max-lg:items-center">
                      <div className="max-lg:flex max-lg:flex-wrap max-lg:gap-1">
                        <p className="text-base font-bold ">
                          From £10.79 per month on an
                        </p>
                        <span className="text-base font-bold relative ">
                          {" "}
                          Annual Toy Sack plan{" "}
                        </span>
                      </div>

                      <span className=" text-xs font-bold underline">How?</span>
                    </div>
                  </div>
                </div>

                <ul className=" text-[13px] text-[#3A0E7B] leading-6 lg:w-full font-[maax]">
                  <li className="flex items-start">
                    <span className="me-4">-{`>`}</span>
                    <span>
                      Borrowing this item on a Toy Sack plan will leave you with{" "}
                      <br /> £50/50 tokens to spend on other products
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="me-4">-{`>`}</span>
                    <span>Borrow up to £80 worth of toys per swap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="me-4">-{`>`}</span>
                    <span>Unlimited swaps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="me-4">-{`>`}</span>
                    <span>Plastic-free, recyclable and reusable packaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="me-4">-{`>`}</span>
                    <span>Delivered to your door</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="max-md:mb-6 max-lg:mb-6 lg:w-lg bg-[#3A0E7B]   text-white font-normal mx-auto text-center">
          <button className=" text-base max-md:p-5 max-lg:p-5 lg:p-5 cursor-pointer">
            ADD
          </button>
        </div>
        <div className="lg:w-full lg:px-24 text-[#3A0E7B] lg:pt-10 lg:pb-24 ">
          <div className="max-md:px-5 max-lg:px-5 lg:pb-0.5  max-lg:pb-0.5">
            <div
              className="max-md:p-5 max-lg:p-5 lg:w-full bg-[#f9f9f9] lg:p-5 "
              onClick={() => setActive(!active)}
            >
              <ul className=" cursor-pointer flex items-center justify-between text-base font-[maax-mono]">
                <li>PRODUCT DESCRIPTION</li>
                <li className="cursor-pointer w-6 ">
                  <svg
                    data-v-14d85fad
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`v-icon v-accordion__header-icon text-[#3A0E7B] fill-[#3A0E7B] ${
                      active
                        ? "transition-all rotate-180 duration-500 ease-in-out"
                        : "transition-all rotate-0 duration-500 ease-in-out"
                    } v-icon--down v-icon--base u-color-secondary`}
                  >
                    <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`max-md:px-5 max-lg:px-5 lg:px-5  ${
              active
                ? " overflow-hidden  max-sm:max-h-235 max-h-200 transition-[max-height] duration-1000 ease-in-out"
                : " overflow-hidden max-h-0 transition-[max-height] duration-1000 ease-in-out"
            }`}
          >
            <div className=" lg:pt-24  lg:pb-24  max-lg:pb-0.5">
              <div className=" max-md:pt-14 max-lg:pt-14 max-md:px-5 max-lg:flex-col max-md:flex-col flex items-start justify-between">
                <div className="max-md:mb-2 max-lg:mb-2 lg:ps-6 lg:w-2/4">
                  <h2 className=" max-md:text-3xl max-md:mb-6 max-lg:pb-6 max-lg:text-[28px]  lg:text-[32px] lg:pb-6 font-[maax-mono]">
                    Description
                  </h2>
                  <p className="max-md:leading-4.5 max-md:text-gray-600 text-base text-gray-500 font-[maax] mb-6">
                    {details?.description}
                  </p>
                  <p className=" text-[#3A0E7B] leading-6 xl:w-full">
                    {details?.features.split("|").map((item, index) => (
                      <p className="font-bold text-base font-[maax]">
                        <span className="me-4"> {"->"}</span>
                        {item}
                      </p>
                    ))}
                  </p>
                </div>
                <div className="lg:ps-6 lg:w-1/3">
                  <h2 className="max-md:text-3xl max-md:mb-6 max-lg:text-[28px] max-lg:pb-6 lg:text-[32px] lg:pb-6  font-[maax-mono]">
                    Product Information
                  </h2>
                  {details?.product_variants.map((item) => (
                    <ul className="max-md:leading-6 text-[#4d4d4d] lg:font-bold text-base font-[maax]">
                      <li>
                        Manufacturer minimum age: &nbsp;{" "}
                        <span className="font-normal">3 years+</span>
                      </li>
                      <li>
                        Whirli recommended age: &nbsp;{" "}
                        <span className="font-normal">12 - 15 months</span>
                      </li>
                      <li>
                        Whirli SKU REF code: &nbsp;{" "}
                        <span className="font-normal">{item.sku}</span>
                      </li>
                      <li>
                        Manufacturer: &nbsp;{" "}
                        <span className="font-normal">A.B. Gee</span>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:px-5 max-lg:px-5">
            <div
              className=" cursor-pointer max-md:p-5 max-lg:p-5 lg:w-full bg-[#f9f9f9] lg:p-5 "
              onClick={() => setSkill(!skill)}
            >
              <ul className="flex items-center justify-between text-md">
                <li>
                  <div className="flex items-center gap-2">
                    <p className="  lg:me-2 text-base font-[maax-mono] uppercase">
                      Learning through play skills
                    </p>
                  </div>
                </li>
                <li className="cursor-pointer w-6">
                  <span>
                    <svg
                      data-v-14d85fad
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`v-icon v-accordion__header-icon text-[#3A0E7B] fill-[#3A0E7B] ${
                        skill
                          ? "transition-all rotate-180 duration-500 ease-in-out"
                          : "transition-all rotate-0 duration-500 ease-in-out"
                      } v-icon--down v-icon--base u-color-secondary`}
                    >
                      <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`max-md:px-5 max-lg:px-5 lg:px-5 pb-0.5 ${
              skill
                ? "overflow-hidden  max-h-150 transition-[max-height] duration-1000 ease-in-out"
                : " overflow-hidden max-h-0 transition-[max-height] duration-1000 ease-in-out"
            }`}
          >
            <div className=" lg:py-8">
              <div className=" max-md:pt-14 max-sm:pt-0 max-lg:pt-14 max-md:px-6 max-lg:flex-col max-md:flex-col flex items-start justify-between">
                <div className="max-md:mb-2 max-lg:mb-2  lg:w-full">
                  <div className="flex items-start flex-col gap-2">
                    <h2 className=" font-normald mb-2 lg:text-[32px]  max-lg:text-[28px] font-[maax-mono]">
                      Learning through play skills
                    </h2>
                    <p className="text-[#4d4d4d] text-base font-bold font-[maax] mb-4">
                      Primary skill:&nbsp;
                      <span className="font-normal">
                        {
                          details?.primary_skill?.association
                            ?.primary_description
                        }
                      </span>
                    </p>
                    <p className="text-[#4d4d4d] text-base font-bold font-[maax] mb-4">
                      Additional skill:&nbsp;
                      <span className="font-normal">
                        {
                          details?.primary_skill?.association
                            ?.additional_description
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:px-5 max-lg:px-5 max-lg:pb-14">
            <div
              className=" cursor-pointer max-md:p-5 max-lg:p-5 lg:w-full bg-[#f9f9f9] lg:p-5"
              onClick={() => setReview(!review)}
            >
              <ul className="flex items-center justify-between text-md">
                <li>
                  {" "}
                  {details?.product_variants.map((star) => {
                    return (
                      <div className="flex items-center gap-2">
                        <p className="lg:me-2 text-base font-[maax-mono]">
                          REVIEWS
                        </p>
                        <ReactStars
                          count={5}
                          size={20}
                          value={star.aggregate_rating}
                          edit={false}
                          isHalf={true}
                          activeColor="#ffd700"
                        />
                        <span className="max-sm:text-xs">
                          ({star.total_reviews})
                        </span>
                      </div>
                    );
                  })}
                </li>
                <li className="cursor-pointer w-6">
                  <span>
                    <svg
                      data-v-14d85fad
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className={`v-icon v-accordion__header-icon text-[#3A0E7B] fill-[#3A0E7B] ${
                        review
                          ? "transition-all rotate-180 duration-500 ease-in-out"
                          : "transition-all rotate-0 duration-500 ease-in-out"
                      } v-icon--down v-icon--base u-color-secondary`}
                    >
                      <path d="M4 11.6l8 8 8-8-1.4-1.3-5.6 5.6V4.5h-2v11.4l-5.5-5.6L4 11.6z"></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`max-md:px-5 max-lg:px-5 lg:px-5 ${
              review
                ? "overflow-hidden  max-h-150 transition-[max-height] duration-1000 ease-in-out"
                : " overflow-hidden max-h-0 transition-[max-height] duration-1000 ease-in-out"
            }`}
          >
            <div className=" lg:pt-24 ">
              <div className=" max-md:pt-14 max-sm:pt-0 max-lg:pt-14 max-md:px-6 max-lg:flex-col max-md:flex-col flex items-start justify-between">
                <div className="max-md:mb-2 max-lg:mb-2 lg:ps-6 lg:w-full">
                  {details?.product_variants.map((star) => {
                    return (
                      <div className="flex items-start flex-col gap-2">
                        <h2 className=" font-normald mb-2 lg:text-[32px]  max-lg:text-[28px] font-[maax-mono]">
                          Customer reviews{details?.name}
                        </h2>
                        <RatingBar
                          ratings={star.ratings}
                          aggregate_rating={star.aggregate_rating}
                          totalReviews={star.total_reviews}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductFooter />
    </>
  );
};

export default ProductDetails;
