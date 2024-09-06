import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Verify from './pages/verify';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/verify' element={<Verify/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App