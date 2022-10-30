import {Link} from "react-router-dom"
import "./MainNavbar.scss"
import { useSelector } from 'react-redux';

function MainNavbar() {
  const cartElement= useSelector(state=>state.cart.cart)
  console.log(cartElement)

  return (
    <>
      <div className="Nav-container">
           <Link to="/"> <h2 className="Nav-brand">MyntArt</h2> </Link>
        <div className="nav-links">
            <Link to="/"> <h3> Home</h3> </Link>
            <Link to="/cart"> <h3> Cart({cartElement.length})</h3> </Link>
            <Link to="/SignIn"><h3>Sign In</h3> </Link>
        </div>
      </div>
    </> 
  );
}

export default MainNavbar;