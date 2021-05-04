import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";

const UserForm = ({ title }) => {
  const [showMessage, setShowMessage] = useState([]);
  const [userName, setUserName] = useState({
    name: " ",
    secundName: " ",
    lastName: " ",
    secundLastName: " ",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setUserName({
      ...userName,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowMessage([
      ...showMessage,
      {
        fullName: userName,
      },
    ]);

    event.target.reset();

    setUserName(" ");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{title} </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Segundo Nombre"
            name="secundName"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Apellido Paterno"
            name="lastName"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Apellido Materno"
            name="secundLastName"
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
          <ContainerMessage key={index}>
            <p>
              {" "}
              {item.fullName.name} {item.fullName.secundName}{" "}
              {item.fullName.lastName} {item.fullName.secundLastName}
            </p>
          </ContainerMessage>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
