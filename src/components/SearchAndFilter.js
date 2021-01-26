import React, { useState } from 'react'
import '../assets/scss/SearchAndFilter.scss'
import sprite from '../assets/images/sprites.svg'
import { cities } from '../helpers/cities'
import FilterPanel from '../components/FilterPanel'

export default function SearchAndFilter() {
  const [results, setResults] = useState([])
  const [showFilterPanel, setShowFilterPanel] = useState(false)
  const filterResults = (event) => {
    let inputValue = event.target.value
    if (inputValue !== "") {
      let filtered = cities.filter(city => city.name.toLowerCase().includes(inputValue.toLowerCase()))
      setResults(filtered)
    }
    else setResults([])
  }

  const openFilterPanel = () => {
    setShowFilterPanel(true)
  }

  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="bottomHeader">
        <div className="search">
          <input type="text" placeholder="Type location" onChange={filterResults} />
          <a href="#search" className="searchBtn">
            <svg className="icon">
              <use xlinkHref={`${sprite}#icon-Search`}></use>
            </svg>
          </a>
          <div className="resultsContainer">
            <ul className="dropdown">
              {results.length > 0 && results.map(city => (
                <li className="list" key={city.id}>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#filters" className="filters" onClick={openFilterPanel}>
          <svg className="icon">
            <use xlinkHref={`${sprite}#icon-filter`}></use>
          </svg>
          Filters
        </a>

      </div>
      {showFilterPanel && (
        <FilterPanel
          closePanel={() => {
            setShowFilterPanel(false)
          }}
        />
      )}
    </div>
  )
}
