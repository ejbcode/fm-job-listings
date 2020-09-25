import React from "react";
import styled from "@emotion/styled";

const CardStyled = styled.article`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
  background: var(--white);
  border-radius: 1rem;
  /* border-left: 1rem solid var(--primary); */
  border-left: ${(props) =>
    props.featured ? "1rem solid var(--very-primary)" : "none"};

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  width: 58px;
  height: auto;
  margin: -30px 0 0 2rem;
  @media (min-width: 768px) {
    margin: 0;
    display: inline-block;
    border: red solid 1px;
  }
`;

const Description = styled.div`
  flex: 1 1 0;
  margin: 0 2rem;
  align-self: center;

  h4 {
    display: inline-block;
    margin-right: 2rem;
  }
  h3 {
    color: var(--very-dark);
  }
`;

const SubDescription = styled.div`
  @media (min-width: 800px) {
    display: inline-block;

    border: blue solid 1px;
  }
`;

const Skills = styled.div`
  border-top: gray solid 1px;
  align-self: center;
  flex: 1 1 0;
  margin: 0 2rem;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    background-color: var(--background);
    padding: 0.5rem 1rem;
    margin: 1rem 1rem 1rem 0;
    border-radius: 3px;
    font-weight: 700;
  }
  @media (min-width: 1000px) {
    border: none;
  }
`;

const Pills = styled.p`
  display: inline-block;
  color: white;

  background-color: ${(props) =>
    props.featured ? "var(--very-dark)" : "var(--primary)"};

  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  margin-right: 1rem;
`;

const Card = ({ job }) => {
  console.log(job);
  const combined = [job.role, job.level, ...job.languages, ...job.tools];
  console.log(combined);
  return (
    <CardStyled featured>
      <Description>
        <Logo src={job.logo} alt="" />
        <SubDescription>
          <div>
            <h4>{job.company}</h4>
            {job.new ? <Pills> NEW!</Pills> : null}
            {job.featured ? <Pills featured> FEATURED!</Pills> : null}
            <h3>{job.position}</h3>
          </div>
          <div>
            {job.postedAt} *{job.contract} *{job.location}
          </div>
        </SubDescription>
      </Description>
      <Skills>
        <ul>
          {combined.map((comb) => (
            <li key={comb}>{comb}</li>
          ))}
        </ul>
      </Skills>
    </CardStyled>
  );
};

export default Card;
