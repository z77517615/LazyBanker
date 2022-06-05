import React, { useState } from 'react'
import "./Filter.css"

const filterList = ['this month','30days', '90days', 'half a year', 'year']

export default function Filter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState('this month')

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter)
    changeFilter(newFilter)
  }

  return (
    <div className="chart-filter">
      <nav>
        <p>Filter by  : </p>
        {filterList.map((f) => (
          <button key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? 'active' : ''}
          >{f}</button>
        ))}
      </nav>
    </div>
  )
}