import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal--2_30a28cb4-977f-4525-a2c6-e585fc2d3f99_2048x.png',
    'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Thank-you_2048x.png',
    'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Entire-Home-Page-Banner-Recovered_2048x.png',
    'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Homepage-Banner-Makeup-Reveal--1_2048x.png'
  ];

  return (
    <Box
      position={'relative'}
      height={'490px'}
      width={'full'}
      overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
     
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="gray"
        bg="#fff"
        _hover={{ color:"white",
        bg:"#C7B299"}}
        position="absolute"
        p="6"
        left={side}
        top={top}
        transform={'translate(-20%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <MdOutlineArrowBackIos />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="gray"
        bg="#fff"
        p="6"
        // borderRadius="full"
        position="absolute"
        _hover={{ color:"white",
        bg:"#C7B299"}}
        right={side}
        top={top}
      
        transform={'translate(20%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <MdArrowForwardIos />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}