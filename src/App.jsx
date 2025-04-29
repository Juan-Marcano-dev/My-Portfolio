import { useState } from "react";
import "./App.css";
import StarsBackground from './Components/StarsBackground';
import ScrollEffect from './components/ScrollEffect';
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
  const [openedNavBar, setOpenedNavBar] = useState(false);

  return (
    <div className="App">
      <Navbar className="color-navbar" fixed="top" expand="sm">
        <NavbarBrand href="/" className="logo-text">
          &lt;JCMR&gt;
        </NavbarBrand>

        <NavbarToggler
          aria-label="Abrir Menú"
          aria-expanded={openedNavBar}
          onClick={() => setOpenedNavBar(!openedNavBar)}
        />

        <Collapse isOpen={openedNavBar} navbar >
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#" className="raise">Sobre Mi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="raise">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="raise">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className="raise">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        
      <StarsBackground />
      <ScrollEffect />
    </div>
    </div>
  );
}

export default App;
