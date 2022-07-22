import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";

import ContactsList from "./components/ContactsList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route path="/contacts" element={<ContactsList />} />
      </Routes>
    </StyledApp>
  );
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps, {})(App);
export default App;

const StyledApp = styled.div`
  background-color: blanchedalmond;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
