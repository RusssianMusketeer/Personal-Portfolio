import styled from 'styled-components';

export const Hamburger=styled.div`
  display: flex;
  z-index:10;
  align-self: center;
  display:none;

  @media(max-width:600px) {
    display:block;
  }

  .hamburger-react{
    z-index:2;
  }

  `;

  export const Humburger=styled.div`

 
  z-index:2;
  `;

  export const HamburgerContainer=styled.div`
    font-family: 'Public Sans', sans-serif;
    flex-direction: column; 
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    min-width: -webkit-fill-available;
    left: 0;
    right:0;
    bottom:0;
    max-width: 30rem;
    
    top: 0;
    right: 1rem;
    text-align: center;
    z-index: 1;
    display: flex;
    transition: max-height .5s ease-out;
    ${ props => props.hamburgerOpen.hamburgerOpen ? 'max-height:15.8rem' : 'max-height:0'};
    
    background-color: #33323D;
    height: fit-content;
    
    
    a{
      color:white;
      transition: color 0.4s ease; 

      &:hover {
        color: #5FB4A2;
        transition: color 0.4s ease; 
      }
    }

    .burger-top{
      padding-top: 3.8rem;
      padding-bottom:0.7rem;
    }

    .burger{
      padding:0.7rem 0;
    }

    .burger-bottom{
      padding-top:0.7rem;
      padding-bottom:3.1rem;
    }

    @media(max-width:300px){
      min-width: 20rem;
    }

  `;

 



