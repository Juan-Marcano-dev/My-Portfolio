import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "../Components/styles/Navbar.scss";
function NavbarSection() {
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

        <Collapse isOpen={openedNavBar} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#aboutMe" className="raise">
                About me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" className="raise">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#skills" className="raise">
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contactMe" className="raise" id="contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSection;
