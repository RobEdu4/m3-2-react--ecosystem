import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  margin-top: 30px;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
`;

const StyledLink = styled(Link)`
  color: Purple;
  text-decoration: none;
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  margin-right: 40px;

  &:hover {
    color: deeppink;
    border-bottom: 1px solid deeppink;
    padding-bottom: 3px;
    border-bottom-width: 3px;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Title>Fruit Emporium</Title>
      <LinkWrapper>
        <StyledLink to={"/"} exact>
          Home
        </StyledLink>
        <StyledLink to={"/About"}>About</StyledLink>
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Nav;
