import { useEffect, useState } from "react"

export default function Box() {

    const [x, setX] = useState(50);
    const [y, setY] = useState(50);
    const [x2, setX2] = useState(700);
    const [y2, setY2] = useState(700);
    const move = 20;

    useEffect(() => {
        function handlePress(event) {
            switch (event.key) {
                case 'ArrowUp':
                    setY(prevY => prevY - move)
                    break;
                case 'ArrowDown':
                    setY(prevY => prevY + move)
                    break;
                case 'ArrowLeft':
                    setX(prevX => prevX - move)
                    break;
                case 'ArrowRight':
                    setX(prevX => prevX + move)
                    break;
                case 'D':
                    setX(prevX => prevX + move)
                    break;
                case 'W':
                    setY2(prevY2 => prevY2 - move)
                    break;
                case 'D':
                    setX2(prevX2 => prevX2 + move)
                    break;
                case 'A':
                    setX2(prevX2 => prevX2 - move)
                    break;
                case 'S':
                    setY2(prevY2 => prevY2 + move)
                    break;

            }
        }
        document.addEventListener('keydown', handlePress);

        return () => {
            document.removeEventListener('keydown', handlePress)
        }

    }, []);

    return (
        <>
            <div style={{ border: '1px solid black', width: '50px', height: '50px', backgroundColor: 'rebeccapurple', left: `${x}px`, top: `${y}px`, position: 'absolute' }}>
            </div>
            <div style={{ border: '1px solid black', width: '50px', height: '50px', backgroundColor: 'rebeccapurple', left: `${x2}px`, top: `${y2}px`, position: 'absolute' }}>
            </div>
        </>
    )
}