import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Meses = [
  {
    label: "Enero",
    value: "enero",
  },

  {
    label: "Febrero",
    value: "febrero",
  },

  {
    label: "Marzo",
    value: "marzo",
  },
  {
    label: "Abril",
    value: "abril",
  },
  {
    label: "Junio",
    value: "junio",
  },
  {
    label: "Julio",
    value: "julio",
  },
  {
    label: "Agosto",
    value: "agosto",
  },
  {
    label: "Septiembre",
    value: "septiembre",
  },
  {
    label: "Octubre",
    value: "octubre",
  },
  {
    label: "Noviembre",
    value: "noviembre",
  },
  {
    label: "Diciembre",
    value: "diciembre",
  },
];

const generateDayptions = () => {
  const arr = [];

  const startDay = 1;
  const endDay = 32;

  for (let i = startDay; i < endDay; i++) {
    arr.push(<option value={i}>{i}</option>);
  }

  return arr;
};

const generateYearOptions = () => {
  const arr = [];

  const startYear = 1930;
  const endYear = new Date().getFullYear();

  for (let i = endYear; i >= startYear; i--) {
    arr.push(<option value={i}>{i}</option>);
  }

  return arr;
};

const DateOfBirthForm = ({ Title }) => {
  const [showMenssage, setShowMenssage] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState({
    day: 0,
    month: " ",
    year: 0,
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDateOfBirth({
      ...dateOfBirth,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowMenssage([
      ...showMenssage,
      {
        fullDateOfBirth: dateOfBirth,
      },
    ]);

    event.target.reset();

    setDateOfBirth(" ", 0, 0);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>{Title} </Form.Label>
          <Form.Control
            as="select"
            type="text"
            placeholder="Dia"
            name="day"
            size="3"
            onChange={handleInputChange}
          >
            <option value="0">Dia</option>
            {generateDayptions()}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            as="select"
            type="text"
            placeholder="Mes"
            name="month"
            onChange={handleInputChange}
          >
            <option value=" ">Mes</option>

            {Meses.map((meses) => (
              <option value={meses.value}>{meses.label} </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="select"
            type="text"
            placeholder="Año"
            name="year"
            onChange={handleInputChange}
          >
            <option value="0">Año</option>
            {generateYearOptions()}
          </Form.Control>
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
              {item.fullDateOfBirth.day} {item.fullDateOfBirth.month}{" "}
              {item.fullDateOfBirth.year}
            </p>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default DateOfBirthForm;
