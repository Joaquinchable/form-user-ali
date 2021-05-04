import React from "react";
import { ContainerMessage } from "../../Styled/styled";
import { useAuth } from "./../../Auth/auth";

const Cardinfotmation = () => {
  //Context
  const { user } = useAuth();

  return (
    <ContainerMessage>
      <p> Revisa que tus datos sean correctos</p>{" "}
      <ul>
        <li>
          Nombre completo: {user.name} {user.secundName} {user.lastName}{" "}
          {user.secundLastName}
        </li>
        <li>
          Fecha de naciemiento: {user.day} {user.month} {user.year}{" "}
        </li>
        <li>Correo: {user.email} </li>
        <li>Celular:{user.celular} </li>
      </ul>
    </ContainerMessage>
  );
};

export default Cardinfotmation;
