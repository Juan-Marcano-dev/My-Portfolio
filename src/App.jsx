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
              <NavLink href="#" className="hover-shadow">Sobre Mi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
        <span><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quia tempore voluptates quasi corporis deleniti alias! Porro dolore dolorum distinctio natus laboriosam voluptates neque cupiditate accusamus? Eaque labore aperiam magni?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem omnis explicabo, incidunt nam ipsum praesentium, ullam ducimus necessitatibus eveniet harum ipsam at molestiae id accusantium odio laborum dolore rerum possimus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non quasi molestias ab, magni eius aperiam corrupti rerum error dolores, aliquam mollitia. Ex cum harum nisi. Sint aliquid esse Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni nesciunt placeat eveniet, reprehenderit mollitia saepe quasi eum nihil velit culpa doloremque quos cum inventore beatae quia corrupti blanditiis voluptas?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos dicta impedit suscipit mollitia vel inventore vero maxime architecto quibusdam quas praesentium sunt fugiat dolore, aliquid soluta ab quod hic. Itaque!Loremlore
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio officiis tenetur eveniet vitae, necessitatibus neque omnis dolor temporibus quae? Laborum quo provident nostrum veritatis, excepturi temporibus dolore ullam commodi natus!</p></span>
      <StarsBackground />
      <ScrollEffect />
    </div>
    </div>
  );
}

export default App;
