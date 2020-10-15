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
  text-align: center;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 24%;
  box-shadow: 0px 0px 119px -40px rgba(31, 28, 31, 1);
  box-shadow: 0px 0px 123px -48px rgba(56, 52, 56, 1);

  text-decoration: none;
`;

const ItemImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 20px;
`;

const ItemTitle = styled.h2`
  text-decoration: none;
  color: black;
`;

const Divider = styled.div`
  height: 1px;
  width: 60px;
  background-color: #eaeaee;
  padding: 3px;
  border-radius: 50%;
  text-align: center;
  margin: 5px auto;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
`;

const ItemLatinName = styled.p`
  margin-bottom: 25px;
`;

const ListingGrid = ({ itemList }) => {
  {
    console.log(itemList.id);
  }
  return (
    <ItemWrapper>
      <ItemLink to={`items/${itemList.id}`}>
        <ItemImage src={itemList.imageSrc} alt={itemList.name} />
        <ItemTitle>{itemList.name}</ItemTitle>
        <Divider> </Divider>
        <ItemLatinName>{itemList.latinName}</ItemLatinName>
      </ItemLink>
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
