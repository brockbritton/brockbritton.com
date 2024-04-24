

import '../styles/Home.css';
import Image from 'react-bootstrap/Image';

function Home() {

  return (
    <>
    <div id='profile-intro'>
        <Image src="../../profile-circle.png" id="profile-image" roundedCircle />
        <br />
        <br />
        <h1> Welcome to my Portfolio!</h1>
        <br />
        <h3> 
            My name is Brock Britton. Technology is my passion. 
            I love the ability tech gives me to build and create solutions to real-world challenges.
            Through precise execution, I bring projects to life with a seamless blend of creativity and technical prowess.
            Enjoy!
        </h3>
    </div>
    <br />
    <br />
    <br />
    <div id='home-logo-displays'>
        <div id='software-dev-home'>
            <img src="../../bbd-logo.png" alt="" />
            <h3> Software Development </h3>
            <p> I am a proficient developer adept in frontend interface design and development, game engineering, and debugging techniques. </p>
            <button> View Projects </button>
        </div>
        <div id='software-dev-home'>
            <img src="../../bbp-logo.png" alt="" />
            <h3> Photography </h3>
            <p>I specialize in the art of long exposure photography, skillfully preserving the essence of time within each captivating image. </p>
            <button> View Projects </button>
        </div>
    </div>
    
    </>
  )
}

export default Home;
