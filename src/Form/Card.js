import React from "react";
import Card from "react-bootstrap/Card";

import UserForm from "./UserForm";
import DateUserForm from "./DateUserForm";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button"

function Chat({ name }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <UserForm Title="¿Cual es tu nombre completo?" />
          <DateUserForm Title="¿Cual es tu fecha de naciemiento" />
          <ContactForm Title="Datos de contacto"/>
        </Card.Body>
        <Button variant="primary" type="submit">
          Iniciar
        </Button>
      </Card>
    </div>
  );
}

export default Chat;
