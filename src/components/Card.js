import React from "react";
import styled from "@emotion/styled";

const CardStyled = styled.article`
  background-color: var(--white);

  max-width: 1200px;
  min-width: 250px;
  padding: 2.5rem 0 2rem 0;
  width: 80%;
  margin: 4px auto -16px auto;
  margin-top: 5rem;
  border-radius: 0.49rem;
  border-left: ${(props) =>
    props.featured
      ? "0.49rem solid var(--primary)"
      : "0.49rem solid var(--white)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  div {
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: -22px;

  @media (min-width: 768px) {
    margin: 0;
    position: initial;
    margin: 0 2rem 0 1rem;

    display: inline-block;
    width: 83px;
    height: 83px;
  }
`;

const Description = styled.div`
  flex: 1 1 1;
  margin: 0.6rem 0rem 0.6rem 2rem;
  display: flex;

  h4 {
    display: inline-block;
    font-size: 1.2rem;
    margin-right: 1.5rem;
  }
  h3 {
    font-size: 1.4rem;
    margin: 1rem 0 0.8rem 0;
    color: var(--very-dark);
  }
  @media (min-width: 768px) {
    h4 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.6rem;
    }
  }
`;

const SubDescription = styled.div`
  span {
    font-size: 1.2rem;
    color: var(--dark-grayish);
  }

  @media (min-width: 768px) {
    display: inline-block;
    span {
      font-size: 1.4rem;
    }
  }
`;

const Skills = styled.div`
  border-top: gray solid 1px;
  flex: 1 1 0;
  margin: 0 2rem;
  font-weight: 700;
  font-size: 1.2rem;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    background-color: var(--background);

    padding: 0.5rem 0.5rem;
    margin: 1rem 1.4rem 0.3rem 0;
    border-radius: 3px;
    :hover {
      background-color: var(--primary);
      color: white;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    border: none;
    align-self: center;

    ul {
      justify-content: flex-end;
    }
  }
`;

const Pills = styled.p`
  display: inline-block;
  color: white;

  background-color: ${(props) =>
    props.featured ? "var(--very-dark)" : "var(--primary)"};

  border-radius: 1.5rem;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  margin-right: 0.8rem;
`;

const Card = ({ job, arrayFiltered, setArrayFiltered }) => {
  const handleClick = (comb) => {
    if (arrayFiltered && arrayFiltered.includes(comb)) return;
    setArrayFiltered((arrayFiltered) => [comb, ...arrayFiltered]);
  };
  return (
    <CardStyled featured={job.featured}>
      <Description>
        <Logo src={job.logo} alt="" />
        <SubDescription>
          <div>
            <h4>{job.company}</h4>
            {job.new ? <Pills> NEW!</Pills> : null}
            {job.featured ? <Pills featured> FEATURED</Pills> : null}
            <h3>{job.position}</h3>
          </div>
          <span>
            {job.postedAt} • {job.contract} • {job.location}
          </span>
        </SubDescription>
      </Description>
      <Skills>
        <ul>
          {job.combined.map((comb) => (
            <li key={comb} onClick={() => handleClick(comb)}>
              {comb}
            </li>
          ))}
        </ul>
      </Skills>
    </CardStyled>
  );
};

export default Card;
