import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navigation from './routes/Navigation';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='auth' element={<Auth />}/>
        {/* <Route path='contact' element={<Contact />}/> */}
      </Route>
    </Routes>
  );
}

export default App;
