import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaCode } from "react-icons/fa";

const CategorySlider = () => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };
    
    return (
        <div className="w-[78%] md:w-full mx-auto ">
            <div>
                <Slider className="" {...settings}>
                   <div>
                   <div className="flex items-center  gap-3 border p-5 rounded-lg ">
                        <div className="flex items-center mt-5">
                            <FaCode className="size-10 ml mb-4 hover:text-[#4b68fd]"></FaCode>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold hover:text-[#4b68fd]">Developers/Engineers</h1>
                            <p className="hover:text-[#4b68fd] text-gray-600">1685 Jobs Available</p>
                        </div>
                    </div>
                   </div>
                    {/* 2 */}
                    <div>
                   <div className="flex items-center  gap-3 border p-5 rounded-lg ">
                        <div className="flex items-center mt-5">
                            <FaCode className="size-10 ml mb-4 text-[#9fadf3]"></FaCode>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold hover:text-[#4b68fd]">Developers/Engineers</h1>
                            <p className="hover:text-[#4b68fd] text-gray-600">1685 Jobs Available</p>
                        </div>
                    </div>
                   </div>
                    {/* 3 */}
                    <div>
                   <div className="flex items-center  gap-3 border p-5 rounded-lg ">
                        <div className="flex items-center mt-5">
                            <FaCode className="size-10 ml mb-4 hover:text-[#4b68fd]"></FaCode>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold hover:text-[#4b68fd]">Developers/Engineers</h1>
                            <p className="hover:text-[#4b68fd] text-gray-600">1685 Jobs Available</p>
                        </div>
                    </div>
                   </div>
                    {/* 4 */}
                    <div>
                   <div className="flex items-center  gap-3 border p-5 rounded-lg ">
                        <div className="flex items-center mt-5">
                            <FaCode className="size-10 ml mb-4 hover:text-[#4b68fd]"></FaCode>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold hover:text-[#4b68fd]">Developers/Engineers</h1>
                            <p className="hover:text-[#4b68fd] text-gray-600">1685 Jobs Available</p>
                        </div>
                    </div>
                   </div>
                    {/* 5 */}
                    <div>
                   <div className="flex items-center  gap-3 border p-5 rounded-lg ">
                        <div className="flex items-center mt-5">
                            <FaCode className="size-10 ml mb-4 hover:text-[#4b68fd]"></FaCode>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold hover:text-[#4b68fd]">Developers/Engineers</h1>
                            <p className="hover:text-[#4b68fd] text-gray-600">1685 Jobs Available</p>
                        </div>
                    </div>
                   </div>
                </Slider>
            </div>
        </div>
    );
};

export default CategorySlider;