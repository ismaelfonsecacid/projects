// src/components/InvitationDetails.js
import React from 'react';
import './InvitationDetails.css';

function InvitationDetails() {
    const eventDate = new Date('2023-11-04T00:00:00'); // Cambia la fecha a la correcta

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
                <div className="detail-label">Vestimenta:</div>
                <div className="detail-content">Blanco y Negro</div>
            </div>
            <div className="invitation-title">
                <h1 className="special-number">20</h1>
                <h1 className="special-number">AÑOS</h1>
            </div>
            <div className="invitation-detail">
                <div className="detail-label">Obligatorio:</div>
                <div className="detail-content">Máscara</div>
            </div>
        </div>
    );
}

export default InvitationDetails;
