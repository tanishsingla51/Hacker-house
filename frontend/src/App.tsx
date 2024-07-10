
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='p-4'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
    </div> 
  )
}

export default App
