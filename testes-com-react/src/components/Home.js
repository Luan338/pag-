import React from "react";
import  styled, { createGlobalStyle } from "styled-components";


  const MainTrailer = styled.iframe`
  width: 100%;
  
  `;

function Home() {
  return (
    <div>
      <MainTrailer  
      width="802" 
      height="451" 
      src="https://www.youtube.com/embed/4lEpxpZqhjc" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></MainTrailer>
    </div>
  );
}

export default Home;