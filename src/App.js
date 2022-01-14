import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';

const HatsPage = ({barang}) => (
  <div className='hats'>
    <h1>Halaman {barang}</h1>
  </div>
);

const HatsDetailPage = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <div className='hats'>
      <h1>Halaman Topi ke {params.hatId}</h1>

      <button onClick={() => navigate('/')}>ke homepage</button>
      <button onClick={() => navigate(-2)}>balik 2 halaman ke belakang</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPage barang="Baju" />} />
        <Route path="shop/hats" element={<HatsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
