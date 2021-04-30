import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const UserForm = ({ Title }) => {
  const [showMenssage, setShowMenssage] = useState([]);
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

    setShowMenssage([
      ...showMenssage,
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
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{Title} </Form.Label>
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

        <Button className="btn btn-primary btn-block" type="submit">
          Agregar
        </Button>
      </Form>
      <br />

      <div>
        {showMenssage.map((item, index) => (
          <Container key={index} className="rounded-sm  alert-danger">
            <p>
              {" "}
               {item.fullName.name} {item.fullName.secundName}{" "}
              {item.fullName.lastName} {item.fullName.secundLastName}
            </p>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default UserForm;
