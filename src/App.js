import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import {
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {


  
  return (<>

    <Routes>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>

    <Footer />
  </>);
}

export default App;
