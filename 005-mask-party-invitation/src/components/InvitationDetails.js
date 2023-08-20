// src/components/InvitationDetails.js
import React, { useState, useEffect } from 'react';
import './InvitationDetails.css';

function InvitationDetails() {
    const eventDate = new Date('2023-11-04T19:00:00'); // Fecha del evento
    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const calculateTimeRemaining = () => {
            const now = new Date();
            const timeDifference = eventDate - now;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeRemaining(`${days}${hours}${minutes}`);
        };

        const interval = setInterval(calculateTimeRemaining, 1000);

        calculateTimeRemaining(); // Calcular inicialmente

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="invitation-details">
            <h2>Detalles del Evento</h2>
            <p>¡Te invitamos a una fiesta de cumpleaños en temática de máscaras!</p>
            <p>Fecha: 4 de Noviembre</p>
            <p>Hora: 7:00 PM</p>
            <p>Lugar: Dirección del lugar</p>
            <p>{timeRemaining}</p>
        </section>
    );
}

export default InvitationDetails;
