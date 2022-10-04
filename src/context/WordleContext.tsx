import React, { useContext, useState, createContext } from 'react'
import { boardContentDefault } from '../config/words';
type WordleContextType = {
    onKeyClick: (key: string) => any;
    onBackspaceClick: () => void
    onClearClick: () => void
    onEnterClick: () => void
    firstRow: string[]
    secondRow: string[]
    thirdRow: string[]
    Board: string[][]
}


type WordleProviderProps = {
    children: React.ReactNode
}

const WordleContext = createContext<WordleContextType>({
    onKeyClick: () => { },
    onBackspaceClick: () => { },
    onClearClick: () => { },
    onEnterClick: () => { },
    firstRow: [],
    secondRow: [],
    thirdRow: [],
    Board: []
})
export const useWordle = () => useContext(WordleContext);

export const WordleContextProvider = ({ children }: WordleProviderProps) => {
    const [Board, setBoard] = useState(boardContentDefault);
    const [attempPos, setAttempPos] = useState(0)
    const [letterPos, setLetterPos] = useState(0)

    const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    const onKeyClick = (letter: string) => {
        console.log("letter", letter)
        if (attempPos <= 4) {
            const newBoard = [...Board];
            newBoard[attempPos][letterPos] = letter;
            setBoard(newBoard);
            setAttempPos(attempPos + 1);
            setLetterPos(letterPos);
        }
        else return;
    }
    const onBackspaceClick = () => {
        if (attempPos > 0) {
            const newBoard = [...Board];
            newBoard[attempPos - 1][letterPos] = '';
            setBoard(newBoard);
            setAttempPos(attempPos - 1);
            setLetterPos(letterPos);
        }
        else return;

    }
    const onClearClick = () => {
        console.log('clear')
    }
    const onEnterClick = () => {
        if(attempPos<= 4) return;
        console.log('enter')
        setLetterPos(letterPos + 1);
        setAttempPos(0);
    }

    const values = {
        onKeyClick,
        onBackspaceClick,
        onClearClick,
        onEnterClick,
        firstRow,
        secondRow,
        thirdRow,
        Board,
    }

    return (
        <WordleContext.Provider value={values}>
            {children}
        </WordleContext.Provider>
    )
}
