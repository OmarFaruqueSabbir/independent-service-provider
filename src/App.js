
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NavBar from './components/Shared/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>

    </div>
  );
}

export default App;
