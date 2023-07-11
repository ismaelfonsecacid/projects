import React, { useState } from 'react';
import countryData from './CountryData.json';

export default function Data() {
    const countries = countryData.paises;
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');

    const filteredCountries = countries.filter(country =>
        country.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const sortCountries = (data) => {  //set the parameter to sort
        setSortBy(data);
    };

    const sortedCountries = () => {
        let sorted = [...filteredCountries];
        switch (sortBy) {  //switch vs sortby
            case 'hotel':
                sorted.sort((a, b) => a.ranking_hotel - b.ranking_hotel);
                break;
            case 'precio':
                sorted.sort((a, b) => a.ranking_precio - b.ranking_precio);
                break;
            case 'comida':
                sorted.sort((a, b) => a.ranking_comida - b.ranking_comida);
                break;
            default:
                return sorted;
        }
        return sorted;
    };

    return (
        <>
            <div>
                <h3>Filtra por: <input onChange={(e) => setSearch(e.target.value)} /></h3>
                <div>
                    <button onClick={() => sortCountries('hotel')}>Ordenar por ranking de hotel</button>
                    <button onClick={() => sortCountries('precio')}>Ordenar por ranking de precio</button>
                    <button onClick={() => sortCountries('comida')}>Ordenar por ranking de comida</button>
                </div>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {sortedCountries().map((country, index) => (
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
    );
}
