import React from 'react'
import { useWordle } from '../context/WordleContext'
export const Letter = (props: any) => {
    const {Board} = useWordle();
    const { attempPos, letterPos } = props
    const letter = Board[attempPos][letterPos];
    console.log(attempPos, letterPos)
    return (
        <div className='letter'>
            {letter}
        </div>
    )
}
