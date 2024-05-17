
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img src="../../logos/brockbritton.png" alt="" />
          <p style={{textAlign: 'center'}}> © Brock Britton 2024 </p>
        </div>
        <div>
          <br />
          <h3> Software Development</h3>
          <p> LinkedIn </p>
          <button> Hire Me! </button>
        </div>
        <div>
          <br />
          <h3> Photography </h3>
          <p> Instagram </p>
          <button> Book Me! </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;