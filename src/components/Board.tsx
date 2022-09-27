import React, {  } from 'react'
// import { boardContentDefault } from '../config/words';
import { Letter } from './letter';

export const Board = () => {
    return (
        
            <div className='board'>
                {''}
                <div className="row">
                    <Letter attempPos={0} attempValue={0} />
                    <Letter attempPos={1} attempValue={0} />
                    <Letter attempPos={2} attempValue={0} />
                    <Letter attempPos={3} attempValue={0} />
                    <Letter attempPos={4} attempValue={0} />
                </div>
                <div className="row">
                    <Letter attempPos={0} attempValue={1} />
                    <Letter attempPos={1} attempValue={1} />
                    <Letter attempPos={2} attempValue={1} />
                    <Letter attempPos={3} attempValue={1} />
                    <Letter attempPos={4} attempValue={1} />
                </div>
                <div className="row">
                    <Letter attempPos={0} attempValue={2} />
                    <Letter attempPos={1} attempValue={2} />
                    <Letter attempPos={2} attempValue={2} />
                    <Letter attempPos={3} attempValue={2} />
                    <Letter attempPos={4} attempValue={2} />

                </div>
                <div className="row">
                    <Letter attempPos={0} attempValue={3} />
                    <Letter attempPos={1} attempValue={3} />
                    <Letter attempPos={2} attempValue={3} />
                    <Letter attempPos={3} attempValue={3} />
                    <Letter attempPos={4} attempValue={3} />
                </div>
                <div className="row">
                    <Letter attempPos={0} attempValue={4} />
                    <Letter attempPos={1} attempValue={4} />
                    <Letter attempPos={2} attempValue={4} />
                    <Letter attempPos={3} attempValue={4} />
                    <Letter attempPos={4} attempValue={4} />

                </div>
                <div className="row">
                    <Letter attempPos={0} attempValue={5} />
                    <Letter attempPos={1} attempValue={5} />
                    <Letter attempPos={2} attempValue={5} />
                    <Letter attempPos={3} attempValue={5} />
                    <Letter attempPos={4} attempValue={5} />
                </div>
            </div>
    )
}
