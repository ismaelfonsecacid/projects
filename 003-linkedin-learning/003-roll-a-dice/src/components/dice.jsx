import { useState } from "react"

export default function Dice() {

    const [number, setNumber] = useState(1);

    function handleClick() {
        setNumber(Math.floor(Math.random() * 6 + 1))
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1>{number}</h1>
            <button style={{ display: 'flex' }} onClick={handleClick}>ROLL</button>
            <img src={`${number}.png`} alt="Dado" />
        </div>

    )
}