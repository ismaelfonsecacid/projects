import React from 'react'

import { BrowserRouter } from "react-router-dom";
import WebRouter from './router/WebRouter'; // Cambia el nombre de la importación si es necesario
import AdminRouter from './router/AdminRouter'; // Cambia el nombre de la importación si es necesario



export default function App() {
  return (

    <BrowserRouter>
      <AdminRouter />
      <WebRouter />
    </BrowserRouter>

  )
}
