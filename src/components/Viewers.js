import styled from "styled-components";
import React from "react";
import sci_fi from "../assets/img slider/genres/sci-fi.jpg";
import action from "../assets/img slider/genres/action.png";
import thriller from "../assets/img slider/genres/thriller.png";
import drama from "../assets/img slider/genres/drama.jpg";
import love_story from "../assets/img slider/genres/love_story.png";
import horror from "../assets/img slider/genres/horror.jpg";

const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    
  }
`;

const Image = styled.img`
  width: 100%;
  height: 85%;
  padding: 5%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: transform 0.2s ease-in-out;
  border-radius: 3%;

  &:hover {
    transform: scale(1.05);
  }
`;

function Genres() {
  const imageData = [sci_fi, action, thriller, drama, love_story,horror];

  return (
    <Container >
      {imageData.map((imageSrc, index) => (
        <Image  className=" hover:border-2 p-3   hover:border-white" key={index} src={imageSrc} alt={`Image ${index} `} />
      ))}
    </Container>
  );
}

export default Genres;