import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const ListOfCardsStyled = styled.main`
  margin-top: 2rem;
`;

const ListOfCards = ({ jobsNew, arrayFiltered, setArrayFiltered }) => {
  const [jobsFiltered, setJobsFiltered] = useState(jobsNew);

  const blas = ({ combined }) => {
    if (arrayFiltered.length === 0) {
      return true;
    }
    return arrayFiltered.every((filter) => combined.includes(filter));
  };

  useEffect(() => {
    const jobsFiltered = jobsNew.filter(blas);
    setJobsFiltered(jobsFiltered);

    //eslint-disable-next-line
  }, [arrayFiltered]);

  return (
    <ListOfCardsStyled>
      {jobsFiltered.map((job) => (
        <Card
          key={job.id}
          job={job}
          arrayFiltered={arrayFiltered}
          setArrayFiltered={setArrayFiltered}
        />
      ))}
    </ListOfCardsStyled>
  );
};

export default ListOfCards;
