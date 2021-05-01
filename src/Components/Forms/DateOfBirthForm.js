import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";

const Months = [
  {
    label: "1",
    value: "Enero",
  },

  {
    label: "2",
    value: "Febrero",
  },

  {
    label: "3",
    value: "Marzo",
  },
  {
    label: "4",
    value: "Abril",
  },
  {
    label: "5",
    value: "Abril",
  },
  {
    label: "6",
    value: "Junio",
  },
  {
    label: "7",
    value: "Julio",
  },
  {
    label: "8",
    value: "Agosto",
  },
  {
    label: "9",
    value: "Septiembre",
  },
  {
    label: "10",
    value: "Octubre",
  },
  {
    label: "11",
    value: "Noviembre",
  },
  {
    label: "12",
    value: "Diciembre",
  },
];

const generateDayOptions = () => {
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
  const [showMessage, setShowMessage] = useState([]);
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

    setShowMessage([
      ...showMessage,
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
            {generateDayOptions()}
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

            {Months.map((Month) => (
              <option value={Month.value}>{Month.label} </option>
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

        <Button className="btn btn-primary " type="submit">
          Agregar
        </Button>
      </Form>

      <br />

      <div>
        {showMessage.map((item, index) => (
          <ContainerMessage key={index} >
            <p>
              {" "}
              {item.fullDateOfBirth.day} {item.fullDateOfBirth.month}{" "}
              {item.fullDateOfBirth.year}
            </p>
          </ContainerMessage>
        ))}
      </div>
    </div>
  );
};

export default DateOfBirthForm;
