import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body{
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap');
    font-family: 'EB Garamond', serif;
    background-color:#FAFAFA;
    overflow-x: hidden;
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