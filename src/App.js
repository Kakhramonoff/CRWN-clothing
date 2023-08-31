import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './routes/Navigation';
import Auth from './pages/Auth/Auth';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Auth />}/>
      </Route>
    </Routes>
  );
}

export default App;
