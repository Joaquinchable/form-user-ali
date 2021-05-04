import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";
import { useAuth } from "./../../Auth/auth";

const UserForm = ({ title}) => {
  const [validated, setValidated] = useState(false);

  const [showMessage, setShowMessage] = useState([]);
  const [userFullName, setUserFullName] = useState({
    name: " ",
    secundName: " ",
    lastName: " ",
    secundLastName: " ",
  });

  //Context
    const { setUser } = useAuth();

  const handleInputChange = (event) => {
    console.log(event.target.value);
    localStorage.setItem("user", JSON.stringify(userFullName));
    setUserFullName({
      ...userFullName,
      [event.target.name]: event.target.value,
    });
    setUser(userFullName);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowMessage([
        ...showMessage,
        {
          fullName: userFullName,
        },
      ]);
      
    }

    event.preventDefault();

    setValidated(true);
    
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>{title} </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Por favor escriba su primer nombre para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Segundo Nombre"
            name="secundName"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Por favor escriba su segundo nombre para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom03">
          <Form.Control
            required
            type="text"
            placeholder="Apellido Paterno"
            name="lastName"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Por favor escriba su primer apellido para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom04">
          <Form.Control
            required
            type="text"
            placeholder="Apellido Materno"
            name="secundLastName"
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Por favor escriba su segundo apellido para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          className="btn btn-primary "
          type="submit"
          onClick={handleInputChange}
        >
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
