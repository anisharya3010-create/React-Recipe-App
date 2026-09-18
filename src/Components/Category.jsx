import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import TrendingSlider from './TrendingSlider';
const Category = () => {
  const {name} = useParams();
  // console.log(useParams())

const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
        try {
          const api = await fetch(
            `https:/themealdb.com/api/json/v1/1/filter.php?a=${name}`
          );
  
          const data= await api.json();
          // setData(data.meals[0])
          console.log(data);           
           console.log(data.meals);
          setData(data.meals || []);
        } catch (error) {
          console.error("API Error:", error);
        }
      };
  
      fetchData();
    }, [name]);



  return (
    <>
  <Navbar />
   <div style={{
    width:'90%',
    margin:'auto',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
    gridGap:'rem',
    marginTop:'2rem'
   }}>
     {
      data.filter((d)=>d.strMeal !=="Beef Mandi").map((d) =>(
          
          <Link to={`/${d.idMeal}`} className='link'>
          <div style={{textAlign:'center'}}>
            <div className='img' >
              <img src={d.strMealThumb} alt='' style={{width:'13rem'}}/>


            </div>
            <h3>{d.strMeal}</h3>
          </div>
          </Link>
        )
     ) }

     
   </div>

   <TrendingSlider />
    </>
  )
}

export default Category
