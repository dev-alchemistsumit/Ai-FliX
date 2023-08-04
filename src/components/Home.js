import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Trending from "./Trending";
import Viewers from "./Viewers";
import Stream_Exclusive from "./StreamExclusive";
import Advertisement from "./Advertisement";
import Devices from "./Devices";
import MyHeader from "./MyHeader";

const Home = () => {
  return (
    <div>
      <MyHeader />

      <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
        <Trending />
        <Stream_Exclusive />
        <Advertisement />
        <Devices />
      </Container>
    </div>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4% calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://drive.google.com/uc?id=1KGsWMXJz6S2Bj_tj3scTKvDMsO5i-wcJ")
      center center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const HeaderStyle = styled.main`
  margin: 50px;
`;

export default Home;
