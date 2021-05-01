import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";

function ContactForm({ Title }) {
  const [showMessage, setShowMessage] = useState([]);
  const [contactUser, setContactUser] = useState({
    email: " ",
    celular: " ",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setContactUser({
      ...contactUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowMessage([
      ...showMessage,
      {
        fullContactUser: contactUser,
      },
    ]);

    event.target.reset();

    setContactUser(" ");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{Title} </Form.Label>
          <Form.Control
            type="email"
            placeholder="Correro Electrónico"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Celular"
            name="celular"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button className="btn btn-primary " type="submit">
          Agregar
        </Button>
      </Form>

      <br />
      <div>
        {showMessage.map((item, index) => (
          < ContainerMessage key={index} >
            <p>Correo: {item.fullContactUser.email}</p>
             <p> Celular: {item.fullContactUser.celular}{" "}</p>
          </ ContainerMessage >
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
