import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { Container, Vstack } from '@chakra-ui/react';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",  }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
const settings = {
      className: "oppa",
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow/>,
      prevArrow:<SamplePrevArrow/>
};
export  default function ProductBags(){
return (
    <> 
        <Slider {...settings}>
         <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/sugar_1_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Plum_Logo_For_Olive_and_Macadamia_Hair_Spa_Kit_160x160.png" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Tru_hair_logo_160x160.png" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/WOC_Beauty_Logo_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/Baiser_India_Logo_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/6256280-43d286588b4beafb0e4a423acf72a620-medium_jpg_5e3480ef-0e7a-4aea-88d0-c48379ad9837_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/brick-new-york-with-symbol-white_46f7f93d-9ac3-4a6b-8827-7341564c001c_160x160.png" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/palmers-logo_33a73358-5f3d-4cd4-ac8c-ecf89a2c72b2_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/LLW1vAyf_400x400_36a490d2-defb-4c90-898d-2af5215e8433_160x160.jpg" alt='monu'/>
          </div>
          <div className="nobita">
              <img src="https://cdn.shopify.com/s/files/1/0052/7551/6995/files/719h_SoVZLL._SX466_160x160.jpg" alt='monu'/>
          </div>
        </Slider>

    </>
)
}