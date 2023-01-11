import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import TreasureHunt from "./pages/TreasureHunt";
import TicTacToe from "./pages/TicTacToe"

import {
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (<>
  
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Treasurehunt' element={<TreasureHunt />}></Route>
      <Route path='/tictactoe' element={<TicTacToe />}></Route>
    </Routes>

    <Footer />
  </>);
}

export default App;
