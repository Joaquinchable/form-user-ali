import React from "react";
import { AppBox, ContainerBox } from "./Styled/styled";
import Chat from "./Components/ChatBox/ChatBox";

const App = () => {
  return (
    <AppBox>
      <ContainerBox>
        <Chat name="Validación de Usuario"/>
      </ContainerBox>
    </AppBox>
  );
}

export default App;
