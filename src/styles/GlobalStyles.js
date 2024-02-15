import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background-image: url("https://res.cloudinary.com/dtsltqjuw/image/upload/v1707097518/MazunteSurf/sand-2050026_1280_sxspwj.jpg");
    //background-repeat: no-repeat; 
    background-size: cover;
  
  }

    a {
    text-decoration: none;
    }



    li {
    list-style: none;
    }

`;
