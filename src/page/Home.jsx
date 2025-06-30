import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { slugData } from "../redux/user";


const Home = () => {
  const [data, setData] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useSelector((state) => state.user.user);
  const productData = async () => {
    let data = await axios.get(
      `https://staging.api.whirli.com/api/guest/filter/productFilter?orderBy=most_popular_score&per_page=24&sortedBy=DESC&page=${page}&isDistributor=0`
    );
    setData(data.data.data);
    setHasNext(data.data.data.length === 24);
  };

  useEffect(() => {
    window.scrollTo({left:0, top:900 ,  behavior: "smooth",})
    productData();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setPage((prev) => prev + 1);
    }
  };

  const handleSlug = (data) => {
               dispatch(slugData(data))
             navigate(`/toy/${data}`);
  }
  

  return (
    <div>
      <h2 className="text-[#3A0E7B] lg:text-4xl lg:font-normal max-lg:text-3xl max-sm:text-3xl max-sm:ps-10 max-sm:pe-10 text-center max-sm:mt-20 max-lg:mt-20 lg:mt-40 lg:mb-10 ">
        Browse by age group
      </h2>
      <div className="grid-cols-1  max-lg:grid-cols-4 p-10 gap-4  max-sm:grid-cols-1 lg:max-w-6xl grid lg:grid-cols-5 lg:gap-4 lg:mx-auto">
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 0-3 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 3-6 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 6-9 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 9-12 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 12-15 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 15-18 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 18-24 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 2-3 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 3-5 months</p>
        </div>
        <div className="bg-[#6FE2D2] p-4 lg:p-7 text-center font-bold">
          <p className="text-[#3A0E7B]"> 5-8 months</p>
        </div>
      </div>
      <>
        {data.length !== 0 ? (
          <div className=" p-4 gap-2 max-sm:grid-cols-2 max-lg:grid-cols-3  lg:max-w-6xl grid lg:grid-cols-4 lg:gap-3 lg:mx-auto lg:mt-10">
            {data.map((item, index) => {
              return (
                <div
                  className=" cursor-pointer h-full lg:flex lg:flex-col  lg:h-full max-w-md"
                  key={index}
                  onClick={() => handleSlug(item.slug)}
                >
                  <div className="flex justify-end p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer"
                    >
                      <path d="M20.8 4.6c-1.5-1.5-3.9-1.5-5.4 0L12 8l-3.4-3.4c-1.5-1.5-3.9-1.5-5.4 0s-1.5 3.9 0 5.4l8.8 8.8 8.8-8.8c1.5-1.5 1.5-3.9 0-5.4z" />
                    </svg>
                  </div>

                  <a>
                    {item.assets.map((img) => {
                      return (
                        <img
                          className="max-sm:h-39.5 max-sm:w-50 mx-auto max-sm:p-1 max-md:h-60 max-lg:h-60 w-full lg:h-60 p-4 rounded-lg"
                          src={img.url}
                          alt="image"
                        />
                      );
                    })}
                  </a>
                  <div className="p-2 h-32  lg:p-5 lg:h-full">
                    <a href="#">
                      <h5 className="max-sm:text-[12px]  max-lg:text-md lg:text-lg font-bold tracking-tight text-[#3A0E7B]">
                        {item.name}
                      </h5>
                    </a>
                    {item.product_variants.map((star) => {
                      return (
                        <div className="flex items-center gap-2">
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

                    <p className="mb-1 max-sm:text-xs max-sm:mt-1 max-sm:mb-1  max-lg:text-[12px] lg:text-[16px] font-normal text-gray-500">
                      <span className="bg-[#3A0E7B] text-white border border-[#3A0E7B] rounded-full max-sm:text-[8px] max-sm:me-2 lg:text-[10px] pt-[2px] pb-[2px] pe-[4px] ps-[4px] me-2">
                        W
                      </span>
                      {item.stock} Token
                    </p>
                  </div>
                  <button className="w-full py-2 cursor-pointer lg:w-full lg:py-4  border-3 border-[#3A0E7B] text-[#3A0E7B]">
                    ADD
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 gap-6 lg:max-w-6xl lg:mx-auto  animate-pulse p-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md p-4"
              >
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>

                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>

                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>

                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
      <div className="w-full px-4 flex items-center justify-between py-4 max-w-6xl mx-auto">
  
  <button
    onClick={handlePrev}
    disabled={page === 1}
    className="w-8 h-8 rounded-full cursor-pointer flex items-center justify-center bg-[#3A0E7B] text-white disabled:opacity-40"
  >
    ←
  </button>

 
  <div className="  flex space-x-2 text-sm">
   
    <button
      className={` cursor-pointer w-8 h-8 flex items-center justify-center rounded ${
        page === 1
          ? "bg-[#3A0E7B] text-white"
          : "text-[#3A0E7B] hover:bg-gray-100"
      }`}
      onClick={() => setPage(1)}
    >
      1
    </button>

    
    {page > 4 && <span className="px-1 text-[#3A0E7B]">...</span>}

   
    {Array.from({ length: 5 }, (_, i) => {
      const current = page - 2 + i;
      if (current > 1 && current < 49) {
        return (
          <button
            key={current}
            onClick={() => setPage(current)}
            className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded ${
              page === current
                ? "bg-[#3A0E7B] text-white"
                : "text-[#3A0E7B] hover:bg-gray-100"
            }`}
          >
            {current}
          </button>
        );
      }
      return null;
    })}

    
    {page < 46 && <span className="px-1 text-[#3A0E7B]">...</span>}

    
    <button
      className={` cursor-pointer w-8 h-8 flex items-center justify-center rounded ${
        page === 49
          ? "bg-[#3A0E7B] text-white"
          : "text-[#3A0E7B] hover:bg-gray-100"
      }`}
      onClick={() => setPage(49)}
    >
      49
    </button>
  </div>

 
  <button
    onClick={handleNext}
    disabled={!hasNext}
    className=" w-8 h-8 rounded-full cursor-pointer flex items-center justify-center bg-[#3A0E7B] text-white disabled:opacity-40"
  >
    →
  </button>
</div>

      <Footer />
    </div>
  );
};

export default Home;
