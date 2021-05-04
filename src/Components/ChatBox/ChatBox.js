import React, { useState } from "react";
import UserForm from "./../Forms/UserForm";
import DateOfBirthForm from "./../Forms/DateOfBirthForm";
import ContactForm from "./../Forms/ContactForm";
import Button from "react-bootstrap/Button";
import Avatar from "./../../assets/avatar.png";
import {
  ChatBox,
  ConatinerAvatar,
  BoxImg,
  CardContainer,
  ContainerMessage,
  Title,
} from "./../../Styled/styled";
import { useAuth } from "./../../Auth/auth";
import CardDataComplete from "./../CardInformation/CardInformation";


function Chat({ title }) {
  const [formStep, setFormStep] = useState(0);
  // const [showMenssageAll, setShowMenssageAll] = useState([]);
  const { user } = useAuth();
  console.log(user);
  //Form Steps function
  const completeStep = () => {
    setFormStep((cur) => cur + 1);
  };

  //Button Steps function
  const renderButton = () => {
    if (formStep > 3) {
      return (
        <ContainerMessage>
          <h2>¡Validación de Usuario Exitosa!</h2>
        </ContainerMessage>
      );
    } else if (formStep === 3) {
      return (
        <Button
          className="btn btn-primary btn-block"
          type="button"
          onClick={completeStep}
        >
          Inciar
        </Button>
      );
    } else {
      return (
        <Button
          className="btn btn-primary btn-block"
          type="button"
          onClick={completeStep}
        >
          Continuar
        </Button>
      );
    }
  };

  return (
    <ChatBox>
      <ConatinerAvatar>
        <Title>{title}</Title>

        <BoxImg src={Avatar} alt="AvatarImg" />
      </ConatinerAvatar>

      {/* Form Steps  */}

      <CardContainer>
        {formStep === 0 && (
          <section>
            <UserForm Title="¿Cuál es tu nombre completo?" />
          </section>
        )}

        {formStep === 1 && (
          <section>
            <DateOfBirthForm Title="¿Cuál es tu fecha de naciemiento?" />
          </section>
        )}

        {formStep === 2 && (
          <section>
            <ContactForm Title="Datos de contacto" />
          </section>
        )}

        {formStep === 3 && <CardDataComplete />}
      </CardContainer>
      {renderButton()}
    </ChatBox>
  );
}

export default Chat;
