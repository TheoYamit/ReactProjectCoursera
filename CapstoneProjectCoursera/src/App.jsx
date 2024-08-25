import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Booking from './pages/BookingPage'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Booking' element={<Booking/>}/>
      </Routes>
    </Router>
  )
}

export default App
