import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HotelDetailsPage from '../component/details'
import Services from '../component/service'
import AddressPage from '../component/AddressPage'
import PaymentPage from '../component/PaymentPage'
import LoadingPage from '../component/LoadingPage'
// import App from '../App'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Services/>}/>
            <Route path="/Details" element={<HotelDetailsPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/address" element={<AddressPage/>}/>
            <Route path="/loading" element={<LoadingPage/>}/>
        </Routes>
    </div>
  )
}