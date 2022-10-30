import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Pages/Authentication/Authentication';
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import Cart from "./Pages/Cart/Cart";


function App() {
  return (
    <div className="App">
    <MainNavbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
