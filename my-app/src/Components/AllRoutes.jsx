import React from 'react'
import { Route,Routes } from 'react-router-dom'
import CountriesCurrency from './CountriesCurrency'
import { ReactForm } from './ReactForm'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ReactForm />} />
            <Route path="/currency" element={<CountriesCurrency />} />
        </Routes>
    </div>
  )
}

export default AllRoutes