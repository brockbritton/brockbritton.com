
import '../styles/Header.css';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const subDirectory = pathname.split('/')[1];
  let logoPath = '';
  if (subDirectory === 'development') {
    logoPath = '../../logos/bbd-logo.png';
  } else if (subDirectory === 'photography') {
    logoPath = '../../logos/bbp-logo.png';
  } else {
    logoPath = '../../logos/brockbritton.png';
  }
  return (
    <>
      <header>
        <h1 id='header-name'> Brock Britton </h1>
        <div id='logo-container'>
            <img id='logo' src={logoPath} alt="Brock Britton Logo" />
        </div>
        <Container className='nav-container'>
          <Nav bsPrefix='header-nav' className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Development" id="basic-nav-dropdown" renderMenuOnMount={true}>
                <NavDropdown.Item bsPrefix='dropdown-item' href="/development">
                    Overview
                </NavDropdown.Item>
              <NavDropdown.Item href="/development/the-no-shoelace-place" >
                The No Shoelace Place
              </NavDropdown.Item>
              <NavDropdown.Item href="/development/game-solvers">
                Game Solvers
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/brockbritton" target="_blank">
                GitHub
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Photography" id="basic-nav-dropdown" renderMenuOnMount={true}>
            <NavDropdown.Item href="/photography">
                Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="/photography/nature">
                Nature
              </NavDropdown.Item>
              <NavDropdown.Item href="/photography/Urban">
                Urban
              </NavDropdown.Item>
              <NavDropdown.Item href="/photography/sports">
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
