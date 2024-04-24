
import '../styles/Header.css';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

function Header() {

  return (
    <>
      <header>
        <h1 id='header-name'> Brock Britton </h1>
        <div id='logo-container'>
            <img id='logo' src="../../public/brockbritton.png" alt="Brock Britton Logo" />
        </div>
        <Container className='nav-container'>
          <Nav bsPrefix='header-nav' className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <NavDropdown title="Development" id="basic-nav-dropdown">
                <NavDropdown.Item bsPrefix='dropdown-item' href="">
                    Overview
                </NavDropdown.Item>
              <NavDropdown.Item href="https://the-no-shoelace-place.uc.r.appspot.com" target="_blank">
                The No Shoelace Place
              </NavDropdown.Item>
              <NavDropdown.Item href="https://brocks-small-games.uc.r.appspot.com" target="_blank">
                Game Solvers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/brockbritton" target="_blank">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Photography" id="basic-nav-dropdown">
            <NavDropdown.Item href="">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Nature
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Urban
              </NavDropdown.Item>
              <NavDropdown.Item href="">
                Sports
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </header>
    </>
  )
}

export default Header;
