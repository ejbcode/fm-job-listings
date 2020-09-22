import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Global, css } from "@emotion/core";

const layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --white: #fff;
            --primary: hsl(180, 29%, 50%);
            --background: hsl(180, 52%, 96%);
            --light: hsl(180, 31%, 95%);
            --dark-grayish: hsl(180, 8%, 52%);
            --very-dark: hsl(180, 14%, 20%);
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            box-sizing: border-box;
            font-size: 62.5%;
          }
          body {
            font-family: "Spartan", sans-serif;
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 1.5;
            background: var(--background);
            margin: 0 auto;
            color: var(--primary);
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
