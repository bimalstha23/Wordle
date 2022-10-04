import React, { useCallback,useEffect } from 'react'
import '../App.css'
import { useWordle } from '../context/WordleContext'
import { Key } from './Key'
export const Keyboard = () => {
  const { firstRow, secondRow, thirdRow, onBackspaceClick, onEnterClick, onKeyClick,attempPos } = useWordle()
  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key=== 'Backspace') onBackspaceClick();
      else if (event.key === 'Enter') onEnterClick();
      else
        firstRow.forEach((letter) => {
          if (letter.toUpperCase() === event.key.toUpperCase()) onKeyClick(letter)
        })
      secondRow.forEach((letter) => {
        if (letter.toUpperCase() === event.key.toUpperCase()) onKeyClick(letter)
      })
      thirdRow.forEach((letter) => {
        if (letter.toUpperCase() === event.key.toUpperCase()) onKeyClick(letter)
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempPos],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    }
  }, [handleKeyboard])


  return (
    <div className='keyboard' onKeyDown={(e)=>handleKeyboard}>
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
