import React, { useState } from "react";
import Layout from "./components/layout";
import ListOfCards from "./components/ListOfCards";
import Header from "./components/Header";
import jobs from "./data.json";

const jobsNew = jobs.map((job) => {
  return {
    id: job.id,
    company: job.company,
    logo: job.logo,
    position: job.position,
    new: job.new,
    featured: job.featured,
    combined: [job.role, job.level, ...job.languages, ...job.tools],
    postedAt: job.postedAt,
    contract: job.contract,
    location: job.location,
  };
});

function App() {
  const [arrayFiltered, setArrayFiltered] = useState([]);
  return (
    <Layout>
      <Header
        arrayFiltered={arrayFiltered}
        setArrayFiltered={setArrayFiltered}
      />
      <ListOfCards
        jobsNew={jobsNew}
        arrayFiltered={arrayFiltered}
        setArrayFiltered={setArrayFiltered}
      />
    </Layout>
  );
}

export default App;
