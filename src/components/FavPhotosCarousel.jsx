
import Carousel from 'react-bootstrap/Carousel';
import leopardInGrass from "../assets/favPhotos/IMG_100-5.jpg";
import smWaterfall from "../assets/favPhotos/IMG_9421.jpg";
import lamplight from "../assets/favPhotos/IMG_1486-2.jpg";
import lionEyes from "../assets/favPhotos/IMG_100.jpg";
import SpanishPeaks from "../assets/favPhotos/IMG_0683-2.jpg";
import Moon from "../assets/favPhotos/IMG_0781-2.jpg";
import BCFootball from "../assets/favPhotos/IMG_1011.jpg";
import BCHockey from "../assets/favPhotos/IMG_3320-Enhanced-NR.jpg";
import stockbridgeStars from "../assets/favPhotos/IMG_4953.jpg";
import turtles from "../assets/favPhotos/IMG_8243.jpg";
import BCBasketball from "../assets/favPhotos/IMG_8818.jpg";
import SeattleSkyline from "../assets/favPhotos/IMG_9230.jpg";
import sanIsland from "../assets/favPhotos/IMG_9284.jpg";
import cometNeowise from "../assets/favPhotos/IMG_9327.jpg";
import lightTrails from "../assets/favPhotos/IMG_9673.jpg";


import '../styles/Photography.css';
//import * as FavPhotos from '../../favPhotos/*.jpg'; 

function FavPhotosCarousel() {
  const favPhotos = {
    leopardInGrass: [leopardInGrass, "African Leopard"],
    smWaterfall: [smWaterfall, "Ousel Falls, Montana"],
    lamplight: [lamplight, "Lamplight"],
    lionEyes: [lionEyes, "African Lion"],
    SpanishPeaks: [SpanishPeaks, "Big Sky, Montana"],
    Moon: [Moon, "Moon"],
    BCFootball: [BCFootball, "Boston College Football"],
    BCHockey: [BCHockey, "Boston College Hockey"],
    stockbridgeStars: [stockbridgeStars, "Stockbridge Stars"],
    turtles: [turtles, "Twin Turtles"],
    BCBasketball: [BCBasketball, "Boston College Basketaball"],
    SeattleSkyline: [SeattleSkyline, "Seattle Skyline"],
    sanIsland: [sanIsland, "San Juan de Gaztelugatxe, Spain"],
    cometNeowise: [cometNeowise, "Comet Neowise"],
    lightTrails: [lightTrails, "Winding Roads"]
  };
  return (
    <Carousel slide={true} indicators={false} pause={false}>
      {Object.entries(favPhotos).map(([key, photoDetails], index) => (
        <Carousel.Item style={{ color: "white" }} key={index}>
          <h3 className=''>{photoDetails[1]}</h3>
          <img src={photoDetails[0]} alt={key} />
          <Carousel.Caption></Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FavPhotosCarousel;