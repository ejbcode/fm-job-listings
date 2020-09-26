import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const ListOfCardsStyled = styled.main`
  margin-top: 2rem;
`;

const ListOfCards = ({ jobs, setArrayFiltered }) => {
  return (
    <ListOfCardsStyled>
      {jobs.map((job) => (
        <Card key={job.id} job={job} setArrayFiltered={setArrayFiltered} />
      ))}
    </ListOfCardsStyled>
  );
};

export default ListOfCards;
