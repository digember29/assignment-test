import React, { useState } from 'react'
import '../assets/scss/filterpanel.scss'
import sprites from '../assets/images/sprites.svg'

import { locations, typeOfInternships, highlights, fieldOfInterest } from '../helpers/filtersOptions'

export default function FilterPanel({ closePanel }) {

  const [selectedLocation, setSelectedLocation] = useState(null)
  const [typeOfInternshipSelected, setTypeOfInternshipSelected] = useState(null)
  const [selectedHighlight, setSelectedHighlight] = useState(null)

  const clearFilters = () => {
    setSelectedLocation(null)
    setTypeOfInternshipSelected(null)
    setSelectedHighlight(null)
    closePanel()
  }

  return (
    <div className="aside-panel">
      <div className="filters">
        <div className="filter-header">
          <h6>Filters</h6>
          <a href="#close" onClick={closePanel}>
            <svg className="icon">
              <use xlinkHref={`${sprites}#icon-X`}></use>
            </svg>
          </a>
        </div>
        <div className="filter-type">
          <span>Locations</span>
          <div className="values">
            {locations.map(((location, index) => (
              <button
                className={`button ${index === selectedLocation ? "selected" : ""}`}
                key={index}
                onClick={() => {
                  setSelectedLocation(index)
                }}
              >
                {location}
              </button>
            )))}
          </div>
        </div>
        <div className="filter-type">
          <span>Type of internships</span>
          <div className="values">
            {typeOfInternships.map((internship, index) => (
              <button
                className={`button ${index === typeOfInternshipSelected ? "selected" : ""}`}
                key={index}
                onClick={() => {
                  setTypeOfInternshipSelected(index)
                }}
              >
                {internship}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-type">
          <span>Fields of Interest</span>
          <div className="values">
            <select className="select">
              <option value="">Choose your first preference</option>
              {fieldOfInterest.map((item => (
                <option key={item}>{item}</option>
              )))}
            </select>
          </div>
          <div className="values">
            <select className="select">
              <option value="">Choose your second preference</option>
              {fieldOfInterest.map((item => (
                <option key={item}>{item}</option>
              )))}
            </select>
          </div>
          <div className="values">
            <select className="select">
              <option value="">Choose your third preference</option>
              {fieldOfInterest.map((item => (
                <option key={item}>{item}</option>
              )))}
            </select>
          </div>
        </div>

        <div className="filter-type">
          <span>Highlights</span>
          <div className="values">
            {highlights.map((highlight, index) => (
              <button
                className={`button ${index === selectedHighlight ? "selected" : ""} `}
                key={index}
                onClick={() => {
                  setSelectedHighlight(index)
                }}
              >
                {highlight}</button>
            ))}
          </div>
        </div>

      </div>
      <div className="apply-filters">
        <button onClick={clearFilters}>Clear All</button>
        <button onClick={closePanel}>Apply filters</button>
      </div>
    </div>
  )
}
