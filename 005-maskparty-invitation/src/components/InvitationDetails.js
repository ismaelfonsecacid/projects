// src/components/InvitationDetails.js
import React, { useState, useEffect } from 'react';
import './InvitationDetails.css';
import Confetti from 'react-confetti';
function InvitationDetails() {
    const eventDate = new Date('2023-11-04T00:00:00'); // Cambia la fecha a la correcta


    const [showAutoConfetti, setShowAutoConfetti] = useState(false); // Nuevo estado
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());


    const confettiColors = ['#FFFFFF', '#000000', '#808080', '#D2B48C'];

    function calculateTimeRemaining() {
        const now = new Date();
        const timeDiff = eventDate - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const autoConfettiTimer = setInterval(() => {
            setShowAutoConfetti(true);
            setTimeout(() => {
                setShowAutoConfetti(false);
            }, 4000); // Oculta el confeti automático después de 3 segundos
        }, 7000); // Activa el confeti automático cada 10 segundos

        return () => clearInterval(autoConfettiTimer);
    }, []);


    const generateGoogleCalendarLink = () => {
        const startTime = eventDate.toISOString().replace(/-|:|\.\d+/g, '');
        const endTime = new Date(eventDate.getTime() + (2 * 60 * 60 * 1000))
            .toISOString()
            .replace(/-|:|\.\d+/g, '');

        const eventDetails = {
            text: 'Cumpleaños de Sara',
            details: '¡Ven a celebrar el cumpleaños de Sara con nosotros!',
            location: 'Calle Santa Barbara',
            dates: `${startTime}/${endTime}`,
        };

        const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&dates=${eventDetails.dates}`;

        window.open(calendarLink, '_blank');
    };

    return (
        <div className="invitation-details-container">
            {showAutoConfetti && <Confetti colors={confettiColors} />}
            <div className="invitation-detail">
                <div className="detail-label">Fecha:</div>
                <div className="detail-content">4 de Noviembre</div>
                <button className="add-to-calendar-button" onClick={generateGoogleCalendarLink}>
                    Añadir a Google Calendar
                </button>
            </div>
            <div className="invitation-detail">
                <div className="detail-label">Lugar:</div>
                <div className="detail-content">Calle Santa Barbara</div>
            </div>
            <div className="invitation-detail">
                <div className="detail-label">Dresscode :</div>
                <div className="detail-content">Blanco o Negro</div>
            </div>
            <div className="invitation-title">
                <h1 className="special-number">20</h1>
                <h1 className="special-number" style={{ marginBottom: '20px' }}>AÑOS</h1>
            </div>
            <div className="invitation-detail">
                <div className="detail-label">Obligatorio el uso de máscaras</div>
            </div>
            <div>
                <img src='/img/mask.jpg' className='img' alt="Máscara" />
            </div>
            <div className="countdown">
                <p className="countdown-label">Tiempo restante:</p>
                <div className="time-squares">
                    <div className="time-square">
                        <p className="time-number">{timeRemaining.days}</p>
                        <p className="time-label">Días</p>
                    </div>
                    <div className="time-square">
                        <p className="time-number">{timeRemaining.hours}</p>
                        <p className="time-label">Horas</p>
                    </div>
                    <div className="time-square">
                        <p className="time-number">{timeRemaining.minutes}</p>
                        <p className="time-label">Minutos</p>
                    </div>
                    <div className="time-square">
                        <p className="time-number">{timeRemaining.seconds}</p>
                        <p className="time-label">Segundos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvitationDetails;
