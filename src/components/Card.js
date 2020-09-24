import React from "react";
import styled from "@emotion/styled";

const CardStyled = styled.article`
  max-width: 1200px;
  width: 80%;
  min-height: 300px;
  margin: 0 auto;
  margin-top: 5rem;
  background: var(--white);
  border-radius: 1rem;
  border-left: 1rem var(--primary) solid;
`;

const Card = ({ job }) => {
  console.log(job);
  const combined = [job.role, job.level, ...job.languages, ...job.tools];
  console.log(combined);
  return (
    <CardStyled>
      <div>list</div>
      <div>
        {combined.map((com) => (
          <p>{com}</p>
        ))}
      </div>
    </CardStyled>
  );
};

export default Card;
