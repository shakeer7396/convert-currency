import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import CountriesCurrency from './CountriesCurrency'
import CurrencyData from './CurrencyData'
import { ReactForm } from './ReactForm'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ReactForm />} />
            <Route path="/currency" element={<CurrencyData />} />
        </Routes>
    </div>
  )
}

export default AllRoutes