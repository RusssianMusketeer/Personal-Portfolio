import React from 'react';
import './portfolio-head-image.styles.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const PortfolioHeadImage =({image}) => (
    <div className="carousel-container" >
        {console.log(image)}
        <Carousel  class="carousel-main" showStatus={false} showThumbs={false} showArrows={true}>
                <div>
                    <img className="carousel-image" alt="homepage" src={image.image_1} />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="homepage" src={image.image_2} />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="sneakers" src={image.image_3} />
                </div>
            
        </Carousel>
    </div>
);

export default PortfolioHeadImage;