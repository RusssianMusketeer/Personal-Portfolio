import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
body{
    font-family: 'Public Sans Regular';
    background-color:#FAFAFA;
}
p{
    font-family: 'Public Sans', sans-serif;
}
a {
    text-decoration: none;
    color: #33323D;
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth !important;
}

h1,h2,h3 {
    font-family: 'Ibarra Real Nova', serif;
}

`