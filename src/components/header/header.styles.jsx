import styled from 'styled-components';

export const Navbar=styled.nav`
height: 50px;
`; 

export const HeaderContainer=styled.div`

width: 100%;
align-items: center;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0 auto;
padding-top:15px;
z-index: 20;
position: relative;
`;

export const MenuBurger=styled.div`
align-self: center;
margin-right: 4.5%;
`;

export const LogoContainer=styled.div`
height: 100%;
width: 70px;
z-index:2;
margin-left: 4.5%;

.green-logo{
    height:85px;
    margin-top: 10px;

    @media(max-width:525px){
        height:65px; 
    }

    @media(max-width:425px){
        height:55px; 
    }
}

svg{
    height:50px;
    width: fit-content;

    @media(max-width:400px){
        height:40px;
    }

}

path{
    fill: ${ props => props.hamburgerOpen ? '#FAFAFA' : '#33323D'};
    transition: fill 0.5s ease-in-out;
    
}
line{
    stroke:${ props => props.hamburgerOpen ? '#FAFAFA' : '#33323D'};
    transition: fill 0.5s ease-in-out;
}

`;

export const OptionsContainer=styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
margin-right: 4.5%;

@media(max-width:750px){
    width: 70%;
}

@media(max-width:600px){
    display:none;
}

a{
    padding: 10px 0;
    padding-left:20px;
    padding-right:5px;
    cursor: pointer;
    font-size: 0.8rem;
    letter-spacing: 2px;
    line-height: 1.4rem;
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    transition: color 0.4s ease;
    white-space: nowrap;
    
    &:hover {
        color: #5FB4A2;
        transition: color 0.4s ease;
      }
  }
}
`;





