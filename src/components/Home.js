import React from "react";
import styled from "styled-components";
import ListingGrid from "./ListingGrid";
import { sellers, items } from "../data";

const HomeWrapper = styled.div`
  font-family: "Raleway", sans-serif;
  line-height: 36px;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 260px 260px 260px;
  gap: 100px 250px; */
`;

const Home = () => {
  return (
    <HomeWrapper>
      <p>
        Fruit emporium sells the finest fruits from around the world and beyond.
      </p>
      <h2>
        <strong>Browse items:</strong>
      </h2>
      <GridWrapper>
        {Object.values(items).map((item) => {
          return <ListingGrid itemList={item} />;
        })}
      </GridWrapper>
    </HomeWrapper>
  );
};
export default Home;
