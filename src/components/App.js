import React from "react";
import styled from "@emotion/styled";
import ModuleScene from "../scenes/ModuleScene";

function App() {
  return (
    <RootStyled>
      <ModuleScene />
    </RootStyled>
  );
}

const RootStyled = styled.div`
  display: flex;
`;

export default App;
