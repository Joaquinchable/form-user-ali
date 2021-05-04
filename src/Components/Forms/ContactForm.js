import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";
import { useAuth } from "./../../Auth/auth";

function ContactForm({ title }) {
  const [validated, setValidated] = useState(false);
  const [showMessage, setShowMessage] = useState([]);
  const [contact, setContact] = useState({
    email: " ",
    celular: " ",
  });

  //Context
  const { setUser } = useAuth();

  const handleInputChange = (event) => {
    localStorage.setItem("user", JSON.stringify(contact));
    console.log(event.target.value);
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
    setUser(contact);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowMessage([...showMessage, {}]);
  
    }

    event.preventDefault();

    setValidated(true);
};

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{title} </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Correro Electrónico"
            name="email"
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
          <Form.Control.Feedback type="invalid">
            Por favor acomplete el campo o asegurese de usar el signo @ para
            continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            required
            type="number"
            placeholder="Celular"
            name="celular"
            onChange={handleInputChange}
            aria-describedby="numberHelp"
          />
          <Form.Control.Feedback type="invalid">
            Por favor acomplete el campo o asegurese de usar solo numeros para
            continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="btn btn-primary " type="submit">
          Agregar
        </Button>
      </Form>

      <br />

      <div>
        {showMessage.map((item, index) => (
          <ContainerMessage key={index}>
            <p>Correo: {item.fullContactUser.email}</p>
            <p> Celular: {item.fullContactUser.celular} </p>
          </ContainerMessage>
          
        ))}
      </div>
     
    </div>
  );
}

export default ContactForm;
