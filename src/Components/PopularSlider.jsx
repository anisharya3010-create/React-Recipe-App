import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Slider = SliderImport.default ?? SliderImport;

const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
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
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div
      style={{
        height: "56vh",
        width: "90%",
        margin: "auto",
        //backgroundColor: "#bd5e5e",
        padding: "1rem",
      }}
    >
      <Slider {...settings}

        style={{

          margin: "1rem",

        }}

      >
        {data.map((d) => (
          <Link to={`${d.idMeal}`}key={d.idMeal}>
          <div className="slider" key={d.idMeal}>
            <img
              src={d.strMealThumb}
              // alt={d.strMeal}
              style={{
                width: "18rem",
                height: "17rem",
                objectFit: "cover",
                margin: "auto",
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

export default PopularSlider;