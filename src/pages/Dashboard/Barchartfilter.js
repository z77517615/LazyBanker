import React, { useState } from 'react'
import "./Filter.css"

const filterBarList = ['this year', 'last year', 'the year before']

export default function Barchartfilter({ changeBarFilter }) {
  const [currentFilter, setCurrentFilter] = useState('this year')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeBarFilter(newFilter)
  }

  return (
    <div className="chart-filter">
      <nav>
        <p>Filter by : </p>
        {filterBarList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>
        ))}
      </nav>
    </div>
  )
}