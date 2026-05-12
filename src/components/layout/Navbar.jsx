import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../../styles/navbar.css";

function Navbar() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        
        <div className="navbar__logo">
          <NavLink to="/">
            <img src="./images/logo.png" alt="WEARWOLF" />
          </NavLink>
        </div>

        <div className={`navbar__links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>HOME</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>SHOP</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>

          <NavLink to="/cart" onClick={() => setOpen(false)} className="cart">
            CART
            {totalItems > 0 && (
              <span className="badge">{totalItems}</span>
            )}
          </NavLink>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
}

export default Navbar;