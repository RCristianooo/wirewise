import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Verify from './pages/verify';
import { UserData } from './context/userContext';
import { LoadingBig } from './components/Loading';

const App = () => {
  const {user, isAuth, loading} = UserData();
  return (
    <>
      {loading ? (
        <LoadingBig/>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={isAuth ? <Home/> : <Login/>} />
            <Route path='/login' element={isAuth ? <Home/> : <Login/>} />
            <Route path='/verify' element={isAuth ? <Home/> : <Verify/>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App