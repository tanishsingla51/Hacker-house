
import LandingPage from './pages/LandingPage'
import Pages from './pages/Pages';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className='p-4'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/courses' element={<Pages />} />
          </Routes>
        </BrowserRouter>
    </div> 
  )
}

export default App
