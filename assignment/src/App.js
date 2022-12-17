
import { BrowserRouter, Route,  Link, Routes } from "react-router-dom";
// import Card from "./components/card";
import NavBar from './components/navbar';
import Layout from "./pages/layout";
import "./App.css"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

      <Routes>
          <Route path='*' element={<Layout/>} />
    </Routes>
    </BrowserRouter>
    
    <footer className="mt-5" style={{height:"88px", width:"100%"}}>
        <div className="row d-flex justify-content-center align-items-center" style={{width:"100%", maxWidth:"640px", height:"88px"}}>
          <img src="https://www.altcoinbuzz.io/wp-content/uploads/2020/06/Pillar-Introduces-Pillar-Balboa_-A-Community-Owned-Wallet-Ecosystem.jpg" alt="" style={{height:"24px", width:"146px"}}/>
        </div>
    </footer>
     </div>
  );
}

export default App;
