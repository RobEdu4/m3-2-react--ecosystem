import React from "react";
import styled from "styled-components";
import { sellers, items } from "../data";
import { useParams } from "react-router-dom";

const InfoWrapper = styled.div`
  max-width: 100%;

  margin-top: 30px;
  display: flex;
  flex-direction: row;
  font-family: "Raleway", sans-serif;
`;

const PictureWrapper = styled.div``;

const InfoPicture = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 20px;
`;

const InfoDetailsWrapper = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-height: 400px;
`;

const InfoTitle = styled.h1`
  margin-bottom: 0px;
  line-height: 0px;
`;

const InfoLatinName = styled.h3`
  font-style: italic;
  color: gray;
  opacity: 0.8;
`;

const InfoDescription = styled.p``;

const InfoCountry = styled.p``;

const InfoSellerWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
`;

const SellerPicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const SellerInfo = styled.p``;

const BuyButton = styled.button`
  padding: 18px 64px;
  color: white;
  background: dodgerblue;
  border: none;
  display: block;
  text-align: center;
  border-radius: 12px;
  font-size: 21px;
  max-width: 300px;
`;

const ItemDetails = () => {
  const { itemId } = useParams();

  const currentItem = items[itemId];
  const currentSeller = sellers[currentItem.sellerId];
  const inStock = currentItem.quantity > 0;
  return (
    <InfoWrapper>
      <PictureWrapper>
        <InfoPicture src={currentItem.imageSrc} alt={currentItem.name} />
      </PictureWrapper>
      <InfoDetailsWrapper>
        <InfoTitle>{currentItem.name}</InfoTitle>
        <InfoLatinName>{currentItem.latinName}</InfoLatinName>
        <InfoDescription>{currentItem.description}</InfoDescription>
        <InfoCountry>
          <em>
            Product of <strong>{currentItem.countryOfOrigin}</strong>
          </em>
        </InfoCountry>
        {inStock ? (
          <BuyButton>${currentItem.price} - Buy Now</BuyButton>
        ) : (
          <BuyButton>- Out of Stock -Pre Order !</BuyButton>
        )}
        <InfoSellerWrapper>
          <SellerPicture src={currentSeller.avatarSrc} alt={currentSeller.id} />
          <SellerInfo>
            Sold by: <strong>{currentSeller.storeName}</strong>
          </SellerInfo>
        </InfoSellerWrapper>
      </InfoDetailsWrapper>
    </InfoWrapper>
  );
};

export default ItemDetails;
