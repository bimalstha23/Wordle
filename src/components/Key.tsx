import React from 'react'
import "../App.css"
import { useWordle } from '../context/WordleContext'

export const Key = (props: any) => {
  const { Key, bigKey } = props;
  const { onKeyClick, onEnterClick, onBackspaceClick } = useWordle();
  const handleKeyClick = () => {
    if (Key === 'Enter') {
      onEnterClick()
    }
    else if (Key === 'Delete') {
      onBackspaceClick()
    }
    else {
      onKeyClick(Key)
    }
  }
  return (
    <div>
      <div className='key' onClick={handleKeyClick} id={bigKey && "big"}>
        {Key}
      </div>
    </div>
  )
}
