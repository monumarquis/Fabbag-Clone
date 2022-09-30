import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Container, Vstack } from '@chakra-ui/react';
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 4,
  swipeToSlide: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  }
};
export  default function ProductCarousel(){
return (
    <> 
        <Slider {...settings}>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
          <div>
            <div className="lisa">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/What_s-In-The-Bag-2_a24e9113-a52d-4385-bd35-c5aa92b69899_2048x.png" alt='monu'/>
            </div>
            <h3>SUGAR THE MOST ELIGIBLUR CORRECTING PRIMER</h3>
          </div>
        </Slider>

    </>
)
}