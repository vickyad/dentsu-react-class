import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext'
import { ButtonProps } from './types'
import './styles.css'

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button className={`button ${theme}-theme`} onClick={handleClick}>
            {children}
        </button>
    )
}
export default Button