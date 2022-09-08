import React from 'react'
import './styles.css'

interface PieceProps {
    num: number
    theme: string
}

const Piece: React.FC<PieceProps> = ({ num, theme }) => {
    return (
        <div className={`piece piece_${num} ${theme}-theme`}>
            {num}
        </div>
    )
}
export default Piece