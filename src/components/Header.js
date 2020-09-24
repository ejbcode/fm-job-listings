import React from "react";
import styled from "@emotion/styled";

const HeaderStyled = styled.div`
  width: 100%;
  background-color: var(--primary);
  position: relative;
  height: 15rem;
  background-repeat: no-repeat;
  background-image: url("https://raw.githubusercontent.com/ejbcode/fm-job-listings/master/src/image/bg-header-mobile.svg");
  background-size: cover;
  background-repeat: repeat-x;

  .filter-container {
    background-color: red;
    width: 80%;
    max-width: 1240px;
    position: absolute;
    top: calc(100% - 2rem);
    margin: 0 auto;
    left: 0;
    border-radius: 0.5rem;
    right: 0;
    background: var(--light);
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.3), 0 10px 12px rgba(0, 0, 0, 0.22);
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }
    li {
      background-color: var(--background);
      padding: 0.5rem 1rem;
      margin: 1rem;
      border-radius: 3px;
      font-weight: 700;
    }
  }

  @media (min-width: 376px) {
    height: 7rem;
    background-image: url("https://raw.githubusercontent.com/ejbcode/fm-job-listings/master/src/images/bg-header-desktop.svg");
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="filter-container">
        <ul>
          <li>Fronteed</li>
          <li>Javascritp</li>
          <li>Backend</li>
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
