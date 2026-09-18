import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Slider = SliderImport.default ?? SliderImport;

const TrendingSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        );

        const data = await api.json();
        
        // console.log(result.meals);
        setData(data.meals || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    //  dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear",
    
  };

  return (
    <div
      style={{
        height: "26vh",
        width: "99%",
        margin: "auto",
      //backgroundColor: "#bd5e5e",
        padding: "1rem",
        overflowX:'hidden'
        
      }}
    >
      <Slider {...settings}
      
       style={{
       
        marginTop: "1rem",
       
      }}
      
      >
        {data.map((d) => (

          <Link to={`/${d.idMeal}`}key={d.idMeal}>
          <div className="slider2" key={d.idMeal}
         
          
          
          >
            <img
              src={d.strMealThumb}
              // alt={d.strMeal}
              style={{
                width: "10rem",
                height: "7rem",
                //  objectFit: "cover",
                //  margin: "auto",
              }}
            />

            <h3
              style={{
                textAlign: "center",
                color: "white",
                marginTop: "10px",
              }}
            >
              {/* {d.strMeal} */}
            </h3>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingSlider;