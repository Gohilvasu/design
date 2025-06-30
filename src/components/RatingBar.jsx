import React from "react";
import ReactStars from "react-stars";


  

  const parseBreakdown = (ratingObj) => ({
    1: ratingObj["1_star"] || 0,
    2: ratingObj["2_star"] || 0,
    3: ratingObj["3_star"] || 0,
    4: ratingObj["4_star"] || 0,
    5: ratingObj["5_star"] || 0,
  });
  
 
  const getPercentages = (breakdown, total) => {
    const percentages = {};
    for (let i = 5; i >= 1; i--) {
      percentages[i] = total > 0 ? Math.round((breakdown[i] / total) * 100) : 0;
    }
    return percentages;
  };
  
  const RatingBar = ({ ratings, aggregate_rating, totalReviews }) => {
    const breakdown = parseBreakdown(ratings);
    const percentages = getPercentages(breakdown, totalReviews);
  
    return (
      <div className="max-w-sm">
        <div className="flex items-center gap-2 mb-2">
          <ReactStars
            count={5}
            size={20}
            value={parseFloat(aggregate_rating)}
            edit={false}
            isHalf={true}
            activeColor="#ffd700"
          />
          <span className="text-lg font-bold text-gray-600">
            {aggregate_rating} out of 5
          </span>
          <img src="/i.png" alt="info" />
        </div>
        <p className="text-lg text-gray-600 mb-4">{totalReviews} total reviews</p>
  
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-2 mb-2">
            <span className="text-lg">{star} star</span>
            <div className="flex-1 bg-gray-300 h-5.5 max-sm:w-38 max-xl:w-3xs xl:w-3xs">
              <div
                className="bg-yellow-400 h-5.5"
                style={{ width: `${percentages[star]}%` }}
              />
            </div>
            <span className="w-8 text-sm text-right text-gray-600">
              {percentages[star]}%
            </span>
          </div>
        ))}
      </div>
    );
  };
export default RatingBar;
