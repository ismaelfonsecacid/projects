import React, { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(10);
    const [timer, setTimer] = useState(null);
    const [stopped, setStopped] = useState(false);

    useEffect(() => {
        if (stopped) {
            const intervalId = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);
            setTimer(intervalId);
        } else {
            clearInterval(timer);
            setTimer(null);
        }

        return () => {
            clearInterval(timer);
        };
    }, [stopped]);

    useEffect(() => {
        if (count < 0) {
          clearInterval(timer);
          setTimer(null);
          setStopped(true);
        }
      }, [count]);


    function onClick() {
        setStopped((prevIsRunning) => !prevIsRunning);
    }

    function onRestart() {
        clearInterval(timer);
        setTimer(null);
        setCount(10);
        setStopped(false);
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight:'100vh',
            flexDirection:'column'

        }}>
            <div style={{ display: "flex"}}>
                <h1>{count}</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button
                    onClick={onClick}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: stopped ? "red" : "green",
                        color: "white",
                        border: "none",
                        marginRight: "10px",
                    }}
                >
                    {stopped ? "Stop" : "Start"}
                </button>
                <button
                    onClick={onRestart}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                    }}
                >
                    Restart
                </button>
            </div>
        </div>
    );
}
