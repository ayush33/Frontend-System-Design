import React, { useState } from 'react'
import './App.css'

function App() {
  const [hoverIndex, setHoverIndex] = React.useState(null)  // null = not hovering
  const [selectedRating, setSelectedRating] = React.useState(0)

  function getStar() {
    let renderStar = [];
    for (let i = 1; i <= 5; i++) {
      // If hovering, fill up to hoverIndex; otherwise fill up to selectedRating
      let filled = hoverIndex !== null ? i <= hoverIndex : i <= selectedRating

      renderStar.push(
        <span
          key={i}
          className='star'
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}   // ✅ was setCurrentStar (undefined)
          onClick={() => setSelectedRating(i)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={['star-icon', filled ? 'star-icon-filled' : ''].join(' ')}
            fill={filled ? 'yellowgreen' : 'none'}  // ✅ drive fill from JS, not just CSS
          
            stroke="black"
            strokeWidth="20"
            viewBox="0 0 640 640"
          >
         <path d="M320 32l84.9 172.1 190.1 27.6-137.5 134 32.5 189.7L320 465.1l-170 89.3 32.5-189.7L5 231.7l190.1-27.6z"/>

          </svg>
        </span>
      )
    }
    return renderStar
  }

  return (
    <div className='start-container'>
      <p>Rating: {selectedRating} / 5</p>
      {getStar()}
    </div>
  )
}

export default App