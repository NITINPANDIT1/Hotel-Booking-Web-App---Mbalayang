import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HotelDetailsPage from '../component/details'
import Services from '../component/service'
// import App from '../App'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Services/>}/>
            <Route path="/Details" element={<HotelDetailsPage/>}/>
        </Routes>
    </div>
  )
}