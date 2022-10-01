import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Container, Vstack } from '@chakra-ui/react';
const settings = {
     className: "center",
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 4000,
      cssEase: "linear"
};
export  default function ProductBags(){
return (
    <> 
        <Slider {...settings}>
            <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-1_large.gif" alt='monu'/>
            <p>Jul'22 The Beauty Bundle Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
          <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-2---Skincare-3_large.gif" alt='monu'/>
            <p>Jun'22 The Make It Reign Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
          <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Skincare-2-With-BONUS_large.gif" alt='monu'/>
            <p>May'22 The AweSummer May Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
          <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-3_large.png" alt='monu'/>
            <p>Mar'22 The Empow-HER Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
          <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal-2_large.gif" alt='monu'/>
            <p>Feb'22 The Colour Me Cupid Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
          <div className="jungkook">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/products/Women_sPage-Skincare-Reveal--3_large.png" alt='monu'/>
            <p>Jan'22 The Beauty Resolution Fab Bag</p>
            <p> from Rs. 599.00</p>
          </div>
        </Slider>

    </>
)
}