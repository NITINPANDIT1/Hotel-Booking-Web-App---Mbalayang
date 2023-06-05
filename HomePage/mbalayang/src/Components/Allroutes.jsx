import { Routes, Route } from 'react-router-dom';
import AddressPage from './AddressPage';
import LoadingPage from './LoadingPage';
import PaymentPage from './PaymentPage';
import SignUp from './SignUp';
import Login from './Login';
import Homepage from './Homepage';
import HotelDetailsCard from './details';
import Services from './service';
import BlogPage from './blog.jsx'


function Allroutes() {
    return ( 
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/Details" element={<HotelDetailsCard/>}/>
    <Route path="/address" element={<AddressPage />} />
    <Route path="/payment" element={<PaymentPage />} />
    <Route path="/loading" element={<LoadingPage />} />
    <Route path="/signup" element={<SignUp></SignUp>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
  </Routes>
        
    );
}

export default Allroutes;