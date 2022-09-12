import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../theme/ThemeContext"
import { useEvent } from "../../utils/keyDownEvent"
import { handleSwipeDown, handleSwipeLeft, handleSwipeRight, handleSwipeUp } from "../../utils/movements"
import Board from "../Board"
import GameOverMessage from "../GameOverMessage"
import Header from "../Header"
import './styles.css'

const Game = () => {
    const UP_ARROW = 38
    const DOWN_ARROW = 40
    const LEFT_ARROW = 37
    const RIGHT_ARROW = 39

    const [gameState, setGameState] = useState(new Array(16).fill(0))
    const [dummy, setDummy] = useState<number[]>([])
    const [gameOver, setGameOver] = useState(false)

    const { theme } = useContext(ThemeContext)

    const initialize = () => {
        let newGrid = [...gameState]
        newGrid = addNumber(newGrid)
        newGrid = addNumber(newGrid)
        setGameState(newGrid)
    }

    const resetGame = () => {
        let emptyGrid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        emptyGrid = addNumber(emptyGrid)
        emptyGrid = addNumber(emptyGrid)
        setGameState(emptyGrid)
        setGameOver(false)
    }

    const isGameOver = () => {
        setDummy(handleSwipeLeft(gameState))
        if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
            return false
        }

        setDummy(handleSwipeDown(gameState))
        if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
            return false
        }

        setDummy(handleSwipeRight(gameState))
        if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
            return false
        }

        setDummy(handleSwipeUp(gameState))
        if (JSON.stringify(gameState) !== JSON.stringify(dummy)) {
            return false
        }

        return true
    }

    const addNumber = (currentGrid: number[]) => {
        let newGrid = [...currentGrid]
        let added = false
        let left_spaces: number[] = [] // array with indexes of currentGrid's empty spaces

        newGrid.forEach((value, index) => {
            if (value === 0) {
                left_spaces.push(index)
            }
        })

        if (left_spaces.length === 0) {
            if (isGameOver()) {
                setGameOver(true)
            }
            return newGrid
        }

        while (!added) {
            let position = Math.floor(Math.random() * left_spaces.length)
            newGrid[left_spaces[position]] = Math.random() > 0.5 ? 2 : 4
            added = true
        }
        return newGrid
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        let newGrid = [...gameState]
        switch (event.keyCode) {
            case UP_ARROW:
                newGrid = handleSwipeUp(gameState)
                break;
            case DOWN_ARROW:
                newGrid = handleSwipeDown(gameState)
                break;
            case LEFT_ARROW:
                newGrid = handleSwipeLeft(gameState)
                break;
            case RIGHT_ARROW:
                newGrid = handleSwipeRight(gameState)
                break;
            default:
                break;
        }
        newGrid = addNumber(newGrid)
        setGameState(newGrid)
    }

    useEffect(() => {
        initialize()
    }, [])

    useEvent("keydown", handleKeyDown)

    return (
        <div className={`game ${theme}-theme`}>
            <Header />
            {gameOver && <GameOverMessage handleClick={resetGame} />}
            <Board currentState={gameState} />
        </div>
    )
}
export default Game