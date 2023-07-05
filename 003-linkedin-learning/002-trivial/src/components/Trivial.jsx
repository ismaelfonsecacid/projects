import { useState } from "react"
import Questions from "./Questions"

export default function Trivial() {

    const [points, setPoints] = useState(0)

    function addPoint() {
        setPoints(points + 1)
    }
    function reset() {
        setPoints(0)
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <h1>Puntuacion: {points}</h1>
            </div>
            <div>
                <Questions addPoint={addPoint} reset={reset} />
            </div>

        </div>

    )
}