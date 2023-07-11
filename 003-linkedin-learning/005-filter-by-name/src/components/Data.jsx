import { useState } from 'react';
import countryData from './CountryData.json'

export default function Data() {
    const countries = countryData.paises;
    const [search, setSearch] = useState('');

    const filteredCountries = countries.filter(country =>
        country.nombre.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <>
            <div>
                <h3>Filtra por: <input onChange={(e) => setSearch(e.target.value)}></input> </h3>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {filteredCountries.map((country, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            backgroundColor: '#f8f8f8'
                        }}
                    >
                        <h2>{country.nombre}</h2>
                        <p><strong>País:</strong> {country.pais}</p>
                        <p><strong>Atracciones:</strong></p>
                        <ul style={{ listStyle: 'none' }}>
                            {country.atracciones.map((attraction, i) => (
                                <li key={i}>{attraction}</li>
                            ))}
                        </ul>
                        <p><strong>Idioma:</strong> {country.idioma}</p>
                        <p><strong>Comidas populares:</strong></p>
                        <ul style={{ listStyle: 'none' }}>
                            {country.comidas_populares.map((food, i) => (
                                <li key={i}>{food}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>



        </>
    )
}