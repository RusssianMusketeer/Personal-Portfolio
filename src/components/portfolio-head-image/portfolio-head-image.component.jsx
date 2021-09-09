import React from 'react';
import './portfolio-head-image.styles.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const PortfolioHeadImage =() => (
    <div className="carousel-container" >
        <Carousel  class="carousel-main" showStatus={false} showThumbs={false} showArrows={true}>
                <div>
                    <img className="carousel-image" alt="homepage" src="https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/screen-shot-2021-08-16-at-3_optimized.52.55-pm.png" />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="homepage" src="https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/crown-clothing-ecommerce-store_optimized.herokuapp.com_+(1).png" />
                    
                </div>
                <div>
                    <img className="carousel-image" alt="sneakers" src="https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/Sneakers+whitout-line.png" />
                </div>
            
        </Carousel>
    </div>
);

export default PortfolioHeadImage;