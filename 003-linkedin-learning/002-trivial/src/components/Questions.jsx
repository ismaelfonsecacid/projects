import React, { useState } from "react";

const preguntas = [
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        respuesta: "Océano Pacífico",
    },
    {
        pregunta: "¿Cuál es el país más poblado del mundo?",
        opciones: ["China", "India", "Estados Unidos", "Rusia"],
        respuesta: "China",
    },
    {
        pregunta: "¿Cuál es el ave más grande del mundo?",
        opciones: ["Águila", "Cóndor", "Pingüino Emperador", "Avestruz"],
        respuesta: "Avestruz",
    },
    {
        pregunta: "¿En qué año se celebró la primera Copa Mundial de Fútbol?",
        opciones: ["1930", "1950", "1970", "1990"],
        respuesta: "1930",
    },
    {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        opciones: ["Aluminio", "Hierro", "Cobre", "Plomo"],
        respuesta: "Aluminio",
    },
    {
        pregunta: "¿Cuál es el instrumento musical de viento más antiguo?",
        opciones: ["Trompeta", "Flauta", "Tuba", "Oboe"],
        respuesta: "Flauta",
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        respuesta: "Leonardo da Vinci",
    },
    {
        pregunta: "¿Cuál es el monte más alto del mundo?",
        opciones: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley"],
        respuesta: "Monte Everest",
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        opciones: ["Fémur", "Tibia", "Húmero", "Cráneo"],
        respuesta: "Fémur",
    },
    {
        pregunta: "¿Cuál es el idioma más hablado en el mundo?",
        opciones: ["Inglés", "Español", "Mandarín", "Hindi"],
        respuesta: "Mandarín",
    },
];

export default function Questions({ addPoint, reset }) {
    const [qIndex, setQIndex] = useState(0);
    const [disabledButton, setDisabledButton] = useState(true);
    const [showAnswer, setShowAnswer] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answered, setAnswered] = useState(Array(preguntas.length).fill(false));

    function onClick(opcionIndex, event) {
        event.preventDefault();
        const optSelected = preguntas[qIndex].opciones[opcionIndex];
        const checkAnswer = preguntas[qIndex].respuesta;
        if (optSelected === checkAnswer) {
            addPoint();
        }
        if (qIndex === preguntas.length - 1) {
            // Última pregunta, reiniciar el ciclo
            setQuizCompleted(true);
        }
        setShowAnswer(true);
        setAnswered((prevAnswered) => {
            const updatedAnswered = [...prevAnswered];
            updatedAnswered[qIndex] = true;
            return updatedAnswered;
        });
        setDisabledButton(false);
    }

    function onClickCheck() {
        setShowAnswer(false);
        setAnswered((prevAnswered) => {
            const updatedAnswered = [...prevAnswered];
            updatedAnswered[qIndex] = false;
            return updatedAnswered;
        });
        setQIndex(qIndex + 1);
        setDisabledButton(true);
    }

    function onClickRestart() {
        setQIndex(0);
        setShowAnswer(false);
        setAnswered(Array(preguntas.length).fill(false));
        setQuizCompleted(false);
        reset();
    }

    return (
        <>
            <div>
                {preguntas[qIndex] && (
                    <div>
                        <h3>{preguntas[qIndex].pregunta}</h3>
                        <ul>
                            {preguntas[qIndex].opciones.map((opcion, opcionIndex) => (
                                <li
                                    key={opcionIndex}
                                    onClick={(event) => onClick(opcionIndex, event)}
                                    style={{
                                        backgroundColor: answered[qIndex] ? '#f5f5f5' : '',
                                        pointerEvents: answered[qIndex] ? 'none' : 'auto',
                                    }}
                                >
                                    <a href="/" disabled={answered[qIndex]}>
                                        {opcion}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {showAnswer && (
                            <div
                                style={{
                                    marginTop: "20px",
                                    padding: "10px",
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                                }}
                            >
                                <p style={{ marginBottom: "0" }}>La respuesta correcta es: {preguntas[qIndex].respuesta}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {quizCompleted ? (
                <button
                    onClick={onClickRestart}
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s ease",
                        marginTop: "20px",
                    }}
                >
                    Reiniciar
                </button>
            ) : (
                <button
                    onClick={onClickCheck}
                    disabled={disabledButton}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "4px",
                        fontSize: "16px",
                        cursor: disabledButton ? "not-allowed" : "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s ease",
                        marginTop: "20px",
                        opacity: disabledButton ? "0.7" : "1",
                    }}
                >
                    Siguiente pregunta
                </button>
            )}
        </>
    );
}
