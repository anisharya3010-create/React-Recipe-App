import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { Link, useParams } from 'react-router-dom'


const Search = () => {

  // console.log(useParams())
  const { searchTerm } = useParams()

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        const data = await api.json();
        // setData(data.meals[0])
        // console.log(data);
        // console.log(data.meals);
        setData(data.meals || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [searchTerm]);
  return (
    <>
     <Navbar />
   <div style={{
    width:'90%',
    margin:'auto',
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(15rem, 1fr))',
    gridGap:'rem',
    marginTop:'2rem',
    overflowX:'hidden'
   }}>
     {
      data.map((d) => {
        return(
          
          <Link to={`/${d.idMeal}`} className='link'>
          <div style={{textAlign:'center'}}>
            <div className='img' >
              <img src={d.strMealThumb} alt='' style={{width:'13rem'}}/>


            </div>
            <h3>{d.strMeal}</h3>
          </div>
          </Link>
        )
      })
    }
     
   </div>

   <TrendingSlider />

    </>
  )
}

export default Search
