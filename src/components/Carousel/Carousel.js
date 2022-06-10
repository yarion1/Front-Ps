import React, { Component } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Carousel } from 'react-carousel-minimal'

const DemoCarousel= () => {

  const data = [
    {
      image: "https://cdn.discordapp.com/attachments/931699948087574538/984492129525055518/pexels-anamul-rezwan-1078884.jpg",
      caption: "Escavadeiras"
    },
    {
      image: "https://cdn.discordapp.com/attachments/931699948087574538/984492202392694814/pexels-pixabay-162553.jpg",
      caption: "Ferramentas"
    },
    {
      image: "https://cdn.discordapp.com/attachments/931699948087574538/984492220226875423/pexels-bidvine-1249611.jpg",
      caption: "Furadeiras"
    },
    {
      image: "https://cdn.discordapp.com/attachments/931699948087574538/984492283971911690/pexels-leticia-ribeiro-2249290.jpg",
      caption: "Máquinas de costura"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return   <Carousel
  data={data}
  time={1300}
  width= "100%"
  height="450px"
  captionStyle={captionStyle}
  radius="5px"
  slideNumber={false}
  slideNumberStyle={slideNumberStyle}
  captionPosition="bottom"
  automatic={true}
  dots={true}
  slideBackgroundColor = "transparent"
  slideImageFit="cover"

  style={{
    textAlign: "center",
    maxWidth: "100%",
    maxHeight: "500px",
    margin: "0px auto",
    
  }}
/>
}


export default DemoCarousel;