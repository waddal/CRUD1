import React from "react";
import styled from "styled-components";

import Search from "./Search";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Search />
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: dodgerblue;
`;
