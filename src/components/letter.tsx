import React from 'react'

export const Letter = (props: any) => {
    const { attempPos, Attempvalue } = props
    console.log(attempPos, Attempvalue)
    return (
        <div className='letter'>
            <div>{attempPos}</div>
        </div>
    )
}
