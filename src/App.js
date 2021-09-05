import React from "react";
import PageWrapper from "./component/page-wrapper";
import Routes from "./component/routes/index";

import "./styles/App.css";

const App  = () => {
  return (
    <div className="App">
      <PageWrapper>
        <Routes/>
      </PageWrapper>
    </div>
  );
}

export default App;
