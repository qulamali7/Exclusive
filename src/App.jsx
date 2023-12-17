import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="/" element={<Home/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}  

export default App;
