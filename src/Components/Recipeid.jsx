import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'

const Recipeid = () => {
  const { idMeal } = useParams()
  const [data, setData] = useState([]);
  const [active, setActive] = useState('ingredient');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        const data = await api.json();
        setData(data.meals[0])
        console.log(data);
        console.log(data.meals);
        //  setData(data.meals || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [idMeal]);
  //  console.log(useParams());
  return (
    <>
      <Navbar />

      <div
        style={
          {
            width: '90%',
            margin: 'Auto',
            textAlign: 'center',

          }
        }>


        
        {console.log(data.strMealThumb)}
        <div style={
          {
            display: 'flex'

          }
        }>
          <div className='img' style={{ width: '50%', marginTop: '2rem' }} ><h2 style={{color:'black',textDecoration:'underline'}}>{data.strMeal}</h2>
            <img src={data.strMealThumb} alt='' style={{ width: '18rem' ,marginTop:'2rem' }}
            />
          </div>


          <div className='content' style={{ width: '60%' , marginLeft:'10rem',marginTop:'6rem'}}>


            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <button
                onClick={() => setActive('ingredient')}
                style={{
                  padding: '0.8rem 1.5rem',
                  border: '1px solid black',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  backgroundColor: active === 'ingredient' ? '#ff6b35' : '#eee',
                  color: active === 'ingredient' ? 'white' : '#333',
                  transition: '0.3s',
                  boxShadow: active === 'ingredient'
                    ? '0 4px 10px rgba(255, 107, 53, 0.3)' : 'none'

                }}
              >
                Ingredients
              </button>

              <button
                onClick={() => setActive('instruction')}
                style={{
                  padding: '0.8rem 1.5rem',
                   border: '1px solid black',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  backgroundColor: active === 'instruction' ? '#ff6b35' : '#eee',
                  color: active === 'instruction' ? 'white' : '#333',
                  transition: '0.3s',

                  boxShadow: active === 'instruction'
                    ? '0 4px 10px rgba(255, 107, 53, 0.3)'
                    : 'none'

                }}
              >
                Instructions
              </button>
            </div>
            {
              active === 'ingredient' ? (
                <div className='ingredient-container'>
                  <div className='ingredient' >{data.strIngredient1}-{data.strMeasure1}</div>
                  <div className='ingredient'>{data.strIngredient2}-{data.strMeasure2}</div>
                  <div className='ingredient' >{data.strIngredient3}-{data.strMeasure3}</div>
                  <div className='ingredient'>{data.strIngredient4}-{data.strMeasure4}</div>
                  <div className='ingredient'  >{data.strIngredient5}-{data.strMeasure5}</div>
                </div>
              ) : (<div className='ingredient-container'><p className='ingredient'
               
              >
                {data.strInstructions}
              </p></div>)
            }



          </div>
        </div>
      </div>

      <div style={{ marginTop: ' 1rem' }}>
        <TrendingSlider />

      </div>

    </>
  )
}

export default Recipeid
