import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Footer from './components/Footer';

export function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

