
import Carousel from 'react-bootstrap/Carousel';

function CrossfadeCarousel(props) {
    <>
        <h1> Carusel Test </h1>
        <Carousel fade>
        {props.data.map((item, index) => (
                <Carousel.Item key={index}>
                    <img src={item.image} alt={item.caption} />
                    <Carousel.Caption>
                        <h3>{item.caption}</h3>
                        <p>{item.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    </>
    
}

export default CrossfadeCarousel;