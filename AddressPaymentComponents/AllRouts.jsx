import { Routes, Route } from 'react-router-dom';
import AddressPage from './AddressPage';
import PaymentPage from './PaymentPage';
function App() {
    return ( 
    <Routes>
    <Route path="/" element={<AddressPage />} />
    <Route path="/payment" element={<PaymentPage />} />
  </Routes>
        
    );
}

export default App;
