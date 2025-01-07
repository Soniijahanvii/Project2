import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "John",
    review: "Amazing product!Highly recommend.",
    profilePhoto:
      "https://img.freepik.com/premium-photo/man-portrait-american-flag-patriotic-pride-heritage-background-male-model-stars-stripes-traditional-usa-freedom-representation-celebration-human-rights_590464-394935.jpg?uid=R181352641&ga=GA1.1.1458633077.1704454199&semt=ais_hybrid",
  },
  {
    name: "Emma",
    review: "Great value for money. Very satisfied!",
    profilePhoto:
      "https://img.freepik.com/premium-photo/top-latest-trends-shot-young-woman-with-dreadlocks-piercings-posing-outdoors_590464-21714.jpg?uid=R181352641&ga=GA1.1.1458633077.1704454199&semt=ais_hybrid",
  },
  {
    name: "Tom",
    review: "The quality is fantastic, will buy again.",
    profilePhoto:
      "https://img.freepik.com/premium-photo/teenage-guy-pink-hoodie-standing-front-camera-home-environment_274679-26993.jpg?uid=R181352641&ga=GA1.1.1458633077.1704454199&semt=ais_hybrid",
  },
  {
    name: "Lucy",
    review: "Excellent service, and the product is perfect.",
    profilePhoto:
      "https://img.freepik.com/premium-photo/portrait-young-man-looking-away_1048944-24484099.jpg?uid=R181352641&ga=GA1.1.1458633077.1704454199&semt=ais_hybrid",
  },
  {
    name: "Mike",
    review: "Quick delivery and great quality.",
    profilePhoto:
      "https://img.freepik.com/premium-photo/professional-photoshoot-pose-male-stock-image-portrait-paris-high-res-free-jpg_883241-11077.jpg?uid=R181352641&ga=GA1.1.1458633077.1704454199&semt=ais_hybrid",
  },
];

const SideScroll = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="mt-10 mb-20 ">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-10 ml-2 mt-5 text-center relative"
          >
            <div className="mt-10 bg-blue-300 p-5 rounded-xl shadow-lg ml-8">
              <div class="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-center ml-36 mt-10  absolute -top-0 ">
                <img
                  src={review.profilePhoto}
                  alt={`${review.name}'s profile`}
                  className="w-28 h-28 rounded-full  object-cover border-2 border-gray-200"
                />
              </div>

              <div className="bg-white p-10 rounded-lg shadow-lg w-80 text-center h-full mt-5 ml-14 mb-4 ">
                <div className="flex justify-center animate-marquee whitespace-nowrap mb-10 "></div>
                <p className="font-bold text-xl text-gray-800 mb-4 ">
                  {review.name}
                </p>
                <p className=" text-gray-600 text-lg mb-5">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SideScroll;
