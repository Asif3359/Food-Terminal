import { Outlet } from "react-router-dom";
import './App.css'
import Footer from "./SharedPage/Footer/Footer";
import NavBar from "./SharedPage/Navbar/Navbar";

function App() {

  return (
    <div >
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App
