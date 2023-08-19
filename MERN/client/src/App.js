import React from 'react'

import { BrowserRouter } from "react-router-dom";
import WebRouter from './router/WebRouter'; // Cambia el nombre de la importación si es necesario
import AdminRouter from './router/AdminRouter'; // Cambia el nombre de la importación si es necesario
import { AuthProvider } from './contexts/AuthContext'


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AdminRouter />
        <WebRouter />
      </BrowserRouter>
    </AuthProvider>

  )
}
