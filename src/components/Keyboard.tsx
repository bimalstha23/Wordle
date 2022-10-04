import React from 'react'
import '../App.css'
import { useWordle } from '../context/WordleContext'
import { Key } from './Key'
export const Keyboard = () => {
  const { firstRow, secondRow, thirdRow } = useWordle()
  return (
    <div>
      <div className="line1">
        {firstRow.map((letter, index) => (
          <div key={index} >
            <Key Key={letter} />
          </div>
        ))}
      </div>
      <div className="line2">
        {secondRow.map((letter, index) => (
          <div key={index}>
            <Key Key={letter} />
          </div>
        ))}
      </div>
      <div className="line3">
        <div>
          <Key Key={"Delete"} bigKey />
        </div>
        {thirdRow.map((letter, index) => (
          <div key={index}>
            <Key Key={letter} />
          </div>
        ))}
        <div>
          <Key Key={"Enter"} bigKey />
        </div>

      </div>

    </div>
  )
}
