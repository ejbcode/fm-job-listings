import React from "react";
import styled from "@emotion/styled";

const HeaderStyled = styled.div`
  width: 100%;
  background-color: var(--primary);
  position: relative;
  height: 15rem;

  background-repeat: no-repeat;
  background-image: url("https://raw.githubusercontent.com/ejbcode/fm-job-listings/master/src/image/bg-header-mobile.svg");
  background-size: contain;
  background-repeat: repeat-x;

  @media (min-width: 376px) {
    height: 7rem;

    background-image: url("https://raw.githubusercontent.com/ejbcode/fm-job-listings/master/src/image/bg-header-desktop.svg");
  }
`;

const Header = () => {
  return <HeaderStyled></HeaderStyled>;
};

export default Header;
