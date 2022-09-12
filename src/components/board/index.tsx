import React from 'react'
import Piece from '../Piece'
import { BoardProps } from './types'
import './styles.css'

const Board: React.FC<BoardProps> = ({ currentState }) => {
    return (
        <>
            <div className="board">
                {currentState.map((digit, index) =>
                    <Piece num={digit} key={`piece_${index}`} />
                )}
            </div>
        </>
    )
}
export default Board