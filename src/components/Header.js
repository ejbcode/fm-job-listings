import React from "react";
import styled from "@emotion/styled";

const HeaderStyled = styled.div`
  width: 100%;
  background-color: var(--primary);
  height: 15rem;
  background-repeat: no-repeat;
  background-image: url("./images/bg-header-mobile.svg");
  background-size: cover;
  background-repeat: repeat-x;

  @media (min-width: 376px) {
    height: 7rem;
    background-image: url("./images/bg-header-desktop.svg");
  }
`;

const Filter = styled.div`
  width: 80%;
  max-width: 1200px;
  min-width: 250px;
  margin: 0 auto;
  margin-top: -2.5rem;
  left: 0;
  border-radius: 0.5rem;
  background: var(--white);
  box-shadow: 0 10px 38px rgba(0, 0, 0, 0.3), 0 10px 12px rgba(0, 0, 0, 0.22);
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  transition: all 0.3s;
  animation: 0.5s ease-in-out showFilter;

  @keyframes showFilter {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }

    50% {
      opacity: 0.5;
      transform: translateX(5%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    flex: 1 1 auto;
  }
  li {
    padding: 0.5rem 0.5rem;
    border-radius: 3px 0 0 3px;
    display: inline-block;
    border-radius: 3px;
    background-color: var(--light);
    margin: 0.6rem 0.6rem;
    overflow: hidden;
  }

  p {
    text-decoration: none;
    color: var(--primary);
  }
  span {
    background: var(--primary);
    padding: 8px;
    margin-left: 8px;
    margin-right: -5px;
  }

  span:hover {
    background: var(--very-dark);
    cursor: pointer;
  }
  img {
    width: auto;
    width: 12px;

    display: inline-block;
  }
`;

const ClearButton = styled.p`
  margin-right: 1rem;
  background: none;
  height: 100%;
  align-self: center;
  cursor: pointer;
  color: grey !important;
`;

const Header = ({ arrayFiltered, setArrayFiltered }) => {
  const handleClick = (array) => {
    setArrayFiltered(arrayFiltered.filter((item) => item !== array));
  };

  const handleDelete = () => {
    setArrayFiltered([]);
  };

  return (
    <>
      <HeaderStyled></HeaderStyled>
      {arrayFiltered.length === 0 ? null : (
        <Filter>
          <ul>
            {arrayFiltered.map((arrayF) => (
              <li key={arrayF}>
                <p>
                  {arrayF}
                  <span onClick={() => handleClick(arrayF)}>
                    <img src="./images/icon-remove.svg" alt="" />
                  </span>
                </p>
              </li>
            ))}
          </ul>
          <ClearButton onClick={handleDelete}>Clear</ClearButton>
        </Filter>
      )}
    </>
  );
};

export default Header;
