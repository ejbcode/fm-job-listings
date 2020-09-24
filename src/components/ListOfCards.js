import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import jobs from "../data.json";

const ListOfCardsStyled = styled.div`
  margin-top: 5rem;
`;

const ListOfCards = () => {
  return (
    <ListOfCardsStyled>
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </ListOfCardsStyled>
  );
};

export default ListOfCards;
