import styled from 'styled-components';

export const ImageHomepage =styled.div `
    width: 100%;
    margin-top: 3rem;
    position: relative;
    width: 100% !important;
    background-size: cover;
    background-repeat: no-repeat;
    height: 40rem;
    background-image:url("https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/HomePage-image.jpg");
    background-position:center center;

    @media(max-width:1100px) {
        background-image:url("https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/image-homepage-hero(1000px).jpg") ;
        height:27rem;
    }

    @media(max-width:650px) {
        background-image:url("https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/image-homepage-hero(650px).jpg") ;
        height:24rem;
    }

    @media(max-width:500px) {
        background-image:url("https://photos-webapp-portfolio.s3.us-east-2.amazonaws.com/image-homepage-hero(650px).jpg") ;
        height:18rem;
    }


`

  