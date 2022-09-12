import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext'
import { PieceProps } from './types'
import './styles.css'

const Piece: React.FC<PieceProps> = (props) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`piece piece_${props.num} ${theme}-theme`}>
            {props.num}
        </div>
    )
}
export default Piece