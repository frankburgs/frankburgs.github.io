import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router";
import App from './App.jsx'
import Noise from './Noise.jsx';

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/noise" element={<Noise />} />
    </Routes>
  </Router>,
)