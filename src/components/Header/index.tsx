import { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext'
import Button from '../Button'
import './styles.css'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className='header'>
            <h1 className={`title ${theme}-theme`}>2048</h1>
            <Button handleClick={toggleTheme}>
                Change theme!
            </Button>
        </div>
    )
}
export default Header