import React from "react";
import styled from "styled-components";

const AboutInfo = styled.p`
  font-family: "Raleway", sans-serif;
  strong {
    font-weight: bold;
  }
`;

const AboutInfo2 = styled.p`
  font-family: "Raleway", sans-serif;
`;

const AboutWrapper = styled.div``;

const About = () => {
  return (
    <AboutWrapper>
      <AboutInfo>
        Fruit emporium is founded on a very simple principle:{" "}
        <strong>Fruit is good.</strong>
      </AboutInfo>
      <AboutInfo2>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </AboutInfo2>
    </AboutWrapper>
  );
};

export default About;
