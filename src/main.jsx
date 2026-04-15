import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'
import Noise from './Noise.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/noise" element={<Noise />} />
    </Routes>
  </HashRouter>,
)