import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import ContactsList from "./components/ContactsList";
import ContactCard from "./components/ContactCard";
import AddContactForm from "./components/AddContactForm";
import Navigation from "./components/Navigation";

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Routes>
        <Route path="/contacts" element={<ContactsList />} />
        <Route path="/contacts/:id" element={<ContactCard />} />
        <Route path="/contacts/add" element={<AddContactForm />} />
        <Route path="*" element={<Navigate to="/contacts" replace />} />
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
