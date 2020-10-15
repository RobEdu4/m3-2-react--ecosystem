import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { items } from "../data";

const ItemWrapper = styled.div`
  height: 260px;
  min-width: 200px;
  max-width: 300px;
  border-radius: 20px;
  margin: 40px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 24%;
  box-shadow: 0px 0px 119px -40px rgba(31, 28, 31, 1);
  box-shadow: 0px 0px 123px -48px rgba(56, 52, 56, 1);
`;

const ItemImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 20px;
`;

const ItemTitle = styled.h2``;

const Divider = styled.div`
  height: 3px;
  width: 70px;
  background-color: #eaeaee;
  padding: 5px;
  border-radius: 50%;
`;

const ItemLatinName = styled.p`
  margin-bottom: 25px;
`;

const ListingGrid = ({ itemList }) => {
  return (
    <ItemWrapper>
      <ItemImage src={itemList.imageSrc} alt="fruit" />
      <ItemTitle>{itemList.name}</ItemTitle>
      <Divider> </Divider>
      <ItemLatinName>{itemList.latinName}</ItemLatinName>
    </ItemWrapper>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListingGrid;
