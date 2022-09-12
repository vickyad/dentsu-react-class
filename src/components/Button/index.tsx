import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext'
import './styles.css'

interface ButtonInterface {
    children: React.ReactNode
    handleClick: () => void
}

const Button: React.FC<ButtonInterface> = ({ handleClick, children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button className={`button ${theme}-theme`} onClick={handleClick}>
            {children}
        </button>
    )
}
export default Button