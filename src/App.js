
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Notfound from './components/Shared/Notfound/Notfound';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<AboutMe />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut />
        </RequireAuth>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
