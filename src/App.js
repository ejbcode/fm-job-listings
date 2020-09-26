import React, { useState } from "react";
import Layout from "./components/layout";
import ListOfCards from "./components/ListOfCards";
import Header from "./components/Header";

import jobs from "./data.json";

function App() {
  const [arrayFiltered, setArrayFiltered] = useState([]);
  return (
    <Layout>
      <Header
        arrayFiltered={arrayFiltered}
        setArrayFiltered={setArrayFiltered}
      />
      <ListOfCards jobs={jobs} setArrayFiltered={setArrayFiltered} />
    </Layout>
  );
}

export default App;
