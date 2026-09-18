
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState('')

  // Search
  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.trim() !== '') {
      navigate(`/search/${input}`)
    }
  }

  // Countries available in TheMealDB
  const countries = [
    'British',
    'Canadian',
    'Chinese',
    'Croatian',
    'Egyptian',
    'France',
    'Greek',
    'India',
    'Irish',
    'Italian',
    'Jamaican',
    'Japanese',
    'Kenyan',
    'Malaysian',
    'Mexican',
    'Moroccan',
    'Polish',
    'Portuguese',
    'Russian',
    'Spanish',
    'Thai',
    'Tunisian',
    'Turkish',
    'Ukrainian',
    'Vietnamese'
  ]

  // Country select
  const handleCountryChange = (e) => {

    const country = e.target.value

    if (country !== '') {
      navigate(`/category/${country}`)
    }
  }

  return (
    <>
      <div className="nav">

        {/* LEFT - LOGO */}

        <div className="left">

          <Link to="/" className="link">
            <h1>React Recipe App</h1>
          </Link>

        </div>


        {/* SEARCH */}

        <div className="search">

          <form onSubmit={handleSubmit}>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
            />

          </form>

        </div>


        {/* RIGHT - COUNTRY DROPDOWN */}

        <div className="right">

          <div className="country-box">

            <span className="globe">
              
            </span>

            <select
              onChange={handleCountryChange}
              defaultValue=""
              className="country-dropdown"
            >

              <option value="">
                Countries
              </option>

              {countries.map((country) => (

                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>

              ))}

            </select>

            <span className="arrow">
              ⌄
            </span>

          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar

