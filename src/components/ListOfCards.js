import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const ListOfCardsStyled = styled.div`
  background: red;
`;

const ListOfCards = () => {
  return (
    <ListOfCardsStyled>
      <Card />
      <Card />
      <Card />
    </ListOfCardsStyled>
  );
};

export default ListOfCards;
