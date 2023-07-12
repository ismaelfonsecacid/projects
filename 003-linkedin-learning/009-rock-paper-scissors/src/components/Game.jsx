import { useState } from "react"

export default function Game() {
    const options = ['Rock', 'Paper', 'Scissors']

    const [hSelect, setHSelect] = useState('')
    const [pcSelect, setPcSelect] = useState('')
    const [pcScore, setPcScore] = useState(0)
    const [hScore, setHScore] = useState(0)
    const [showResults, setShowResults] = useState(false)
    const [gameResults, setGameResults] = useState('')
    const [disabled, setDisabled] = useState(true)

    function pcOption() {
        const random = Math.floor(Math.random() * 3)
        setPcSelect(options[random])
    }

    function userOption(e) {
        setDisabled(false)
        setShowResults(false)
        pcOption()
        setHSelect(e.target.value)
    }
    function startGame() {
        setShowResults(true)
        setDisabled(true)
        checkResults()

    }
    function checkResults() {
        if (hSelect === pcSelect) {
            setGameResults('DRAW')

        } else if (hSelect === 'Rock') {
            if (pcSelect === 'Paper') {
                setGameResults('PC WIN')
                setPcScore(prev => prev + 1)
            }
            else {
                setGameResults('YOU WIN')
                setHScore(prev => prev + 1)
            }

        } else if (hSelect === 'Scissors') {
            if (pcSelect === 'Rock') {
                setGameResults('PC WIN')
                setPcScore(prev => prev + 1)
            }
            else {
                setGameResults('YOU WIN')
                setHScore(prev => prev + 1)
            }
        } else {
            if (pcSelect === 'Scissors') {
                setGameResults('PC WIN')
                setPcScore(prev => prev + 1)
            }
            else {
                setGameResults('YOU WIN')
                setHScore(prev => prev + 1)
            }
        }
    }

    function toEmoji(opt) {
        switch (opt) {
            case 'Rock':
                return '🪨';

            case 'Paper':
                return '📄';

            case 'Scissors':
                return '✂️'
        }
    }

    return (

        <>
            <div>
                <h1>SCORE:</h1>
                <p><strong>Computer</strong>: {pcScore} </p>
                <p><strong>Me</strong>: {hScore}</p>
            </div>
            <div>
                {options.map((i) => (
                    <button value={i} key={i} onClick={userOption}>{i}</button>
                ))}
            </div>
            <div>
                <button onClick={startGame} disabled={disabled}>PLAY</button>
            </div>


            <div>
                {showResults && (
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h1>🙎🏼‍♂️Your option: {toEmoji(hSelect)}</h1>
                            </div>
                            <div>
                                <h1>💻PC option: {toEmoji(pcSelect)}</h1>
                            </div>
                        </div>
                        <div>
                            <h1>RESULT</h1>
                            <h4 style={{ color: 'red' }}>{gameResults}</h4>
                        </div>
                    </div>


                )}
            </div>
        </>


    )
}