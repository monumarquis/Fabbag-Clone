import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Heading,
  Text,
  Container,
  VStack,
  Divider
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { ImQuotesLeft } from 'react-icons/im';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Testimonials() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title:" This is my second month and I am already addicted. Can't wait for my third bag. It feels like someone with so much love who loves pampering you. Thank you Fab bag. Amazing products Thank you with gratitude.",
      text:
        "Kirthana",
      image:
        'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
    },
    {
        title:"I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.",
        text:
          "Shikha",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },  
       {
        title:"I am highly impressed with the idea of surprising the customers by leaving them to guess, whats inside the Bag. Surprises brings excitement and I am always excited to receive my Fab Bag. First of all I should say that the Bags are awesome and each time I got my Fab Bag, I was really happy to find whats inside it. Really satisfied! :)",
        text:
          "Anushree",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:" I love each and every Fab Bag that I receive each month past three years. I am so much in love with fab bags and all the lovely products and cute little pouches that I get. I love Fab Bag.",
        text:
          "Munira",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:" I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.",
        text:
          "Niranjana",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:" I've been a regular Fab Bag subscriber for many years now and I must say that the Fab Bag team comes up with something or the other as a special attraction in the bag every month.  As always, thank you Fab Bag for making my day with this bag!!!",
        text:
          "Poonam",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:"I am getting addicted to Fab Bag's. The first one I had ordered was simply to check it out as my friend had recommended. I am not someone who spends a lot of time thinking about beauty products and I am clueless when it comes to such matters. Which is why the Fab Bag's are perfect for me. This August Fab Bag had everything I needed! The product curation is perfect. It's like having my own personal shopper for beauty products and such pretty bags too.",
        text:
          "Saileena",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:" The products are amazing and I am just in love with the bag! Kudos to you team!",
        text:
          "Niranjana",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
      {
        title:"I like the fact that they offer high-quality products. Every single product from the bag stands out. It is a MUST TRY for every girl out there.",
        text:
          "Sikha",
        image:
          'https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Testimonial-Final_2048x.png',
      },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
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
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPositionX="fixed"
            backgroundAttachment="fixed"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.2xxl" height="600px" position="relative">
                {/* <Center> */}
                <VStack  mb="20" spacing="7">
                    <Heading as="h1" fontWeight="bold" mt="2">TESTIMONIALS</Heading>
                    <Divider orientation='horizontal' borderColor="#ECC94B" maxW="300px" sx={{borderBottomWidth:2.5}} />
                    <ImQuotesLeft size="100"></ImQuotesLeft>
                </VStack>
                
                    {/* </Center> */}
              <VStack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(10%, -20%)"
                >
                    
                <Heading  mt="30" fontSize={{ base: 'sm', md: 'md', lg: 'xl' }} fontWeight="500" w='100%'>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} fontfamily="sans-erif" color="GrayText">
                  -{card.text}
                </Text>
              </VStack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}