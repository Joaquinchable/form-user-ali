import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function ContactForm({ Title }) {
  const [showMenssage, setShowMenssage] = useState([]);
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

    setShowMenssage([
      ...showMenssage,
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
            placeholder="Correro Electronico"
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

        <Button className="btn btn-primary btn-block" type="submit">
          Agregar
        </Button>
      </Form>
      <br/>
      <div>
        {showMenssage.map((item, index) => (
          <Container key={index} className="rounded-sm  alert-danger">
            <p>
              {" "}
              {item.fullContactUser.email} {item.fullContactUser.celular}{" "}
            </p>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default ContactForm;
