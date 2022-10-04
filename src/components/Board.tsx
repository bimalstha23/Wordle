import React, {  } from 'react'
// import { boardContentDefault } from '../config/words';
import { Letter } from './letter';

export const Board = () => {
    return (
        
            <div className='board'>

                {''}
                <div className="row">
                    <Letter attempPos={0} letterPos={0} />
                    <Letter attempPos={1} letterPos={0} />
                    <Letter attempPos={2} letterPos={0} />
                    <Letter attempPos={3} letterPos={0} />
                    <Letter attempPos={4} letterPos={0} />
                </div>
                <div className="row">
                    <Letter attempPos={0} letterPos={1} />
                    <Letter attempPos={1} letterPos={1} />
                    <Letter attempPos={2} letterPos={1} />
                    <Letter attempPos={3} letterPos={1} />
                    <Letter attempPos={4} letterPos={1} />
                </div>
                <div className="row">
                    <Letter attempPos={0} letterPos={2} />
                    <Letter attempPos={1} letterPos={2} />
                    <Letter attempPos={2} letterPos={2} />
                    <Letter attempPos={3} letterPos={2} />
                    <Letter attempPos={4} letterPos={2} />

                </div>
                <div className="row">
                    <Letter attempPos={0} letterPos={3} />
                    <Letter attempPos={1} letterPos={3} />
                    <Letter attempPos={2} letterPos={3} />
                    <Letter attempPos={3} letterPos={3} />
                    <Letter attempPos={4} letterPos={3} />
                </div>
                <div className="row">
                    <Letter attempPos={0} letterPos={4} />
                    <Letter attempPos={1} letterPos={4} />
                    <Letter attempPos={2} letterPos={4} />
                    <Letter attempPos={3} letterPos={4} />
                    <Letter attempPos={4} letterPos={4} />

                </div>
                <div className="row">
                    <Letter attempPos={0} letterPos={5} />
                    <Letter attempPos={1} letterPos={5} />
                    <Letter attempPos={2} letterPos={5} />
                    <Letter attempPos={3} letterPos={5} />
                    <Letter attempPos={4} letterPos={5} />
                </div>
            </div>
    )
}
