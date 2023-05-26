import { Routes, Route } from 'react-router-dom';
import AddressPage from './AddressPage';
import LoadingPage from './LoadingPage';
import PaymentPage from './PaymentPage';
function App() {
    return ( 
    <Routes>
    <Route path="/" element={<AddressPage />} />
    <Route path="/payment" element={<PaymentPage />} />
    <Route path="/loading" element={<LoadingPage />} />
  </Routes>
        
    );
}

export default App;
