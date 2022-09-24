import React from 'react'

export const Letter = (props: any) => {
    const { Letterpos, Attempvalue } = props
    return (
        <div className='letter'>
            <div>{Letterpos}</div>
        </div>
    )
}
