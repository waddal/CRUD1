import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import ContactsList from "./components/ContactsList";
import Navigation from "./components/Navigation";

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route path="/" element={<ContactsList />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  background-color: blanchedalmond;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
