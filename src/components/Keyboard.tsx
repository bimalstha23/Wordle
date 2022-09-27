import React from 'react'
import './keyboard.css'
export const Keyboard = () => {
  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  return (
    <div>
      <div className="line1">
        {firstRow.map((letter, index) => (
          <div key={index} className="key">
            {letter}
          </div>
        ))}
      </div>
      <div className="line2">
        {secondRow.map((letter, index) => (
          <div key={index} className="key">
            {letter}
          </div>
        ))}
      </div>
      <div className="line3">
        {thirdRow.map((letter, index) => (
          <div key={index} className="key">
            {letter}
          </div>
        ))}
      </div>

    </div>
  )
}
