import { useState } from "react";
import "./App.css";
import logo from "./assets/images/logo-inicio.png";

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function App() {
  const [count, setCount] = useState(0);
  const [openedNavBar, setOpenNavBar] = useState(false);
  return (
    <>
      <div className="App">
        <Navbar color="dark" fixed="top" dark expand="md">
          <NavbarBrand href="">
            <NavbarBrand href="/" className="logo-text">
              &lt;JCMR&gt;
            </NavbarBrand>
          </NavbarBrand>
        <NavbarToggler aria-label="Abrir Menu" />
        <Collapse > 
        </Collapse>
        


        </Navbar>
      </div>
    </>
  );
}

export default App;
