import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Booking from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
      </Routes>
    </Router>
  )
}

export default App
