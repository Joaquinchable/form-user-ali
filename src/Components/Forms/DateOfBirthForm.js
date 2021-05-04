import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ContainerMessage } from "./../../Styled/styled";
import { useAuth } from "./../../Auth/auth";

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

const DateOfBirthForm = ({ title }) => {
  const [validated, setValidated] = useState(false);
  const [showMessage, setShowMessage] = useState([]);
  const [dateOfBirth, setDateOfBirth] = useState({
    day: 0,
    month: " ",
    year: 0,
  });
  
//Context
  const { setUser } = useAuth();

  const handleInputChange = (event) => {
    console.log(event.target.value);
    localStorage.setItem("user", JSON.stringify(dateOfBirth));
    setDateOfBirth({
      ...dateOfBirth,
      [event.target.name]: event.target.value,
    });
    setUser(dateOfBirth);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setShowMessage([
        ...showMessage,
        {
          fullDateOfBirth: dateOfBirth,
        },
      ]);
    }

    event.preventDefault();

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustom06">
          <Form.Label>{title} </Form.Label>
          <Form.Control
            required
            as="select"
            type="text"
            placeholder="Dia"
            name="day"
            size="3"
            onChange={handleInputChange}
          >
            <option selected disabled value="">
              Dia
            </option>
            {generateDayOptions()}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Por favor seleccione su Dia de nacimiento para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom07">
          <Form.Control
            required
            as="select"
            type="text"
            placeholder="Mes"
            name="month"
            onChange={handleInputChange}
          >
            <option selected disabled value="">
              Mes
            </option>

            {Months.map((Month) => (
              <option value={Month.value}>{Month.label} </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Por favor seleccione su Mes de nacimiento para continuar.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom08">
          <Form.Control
            required
            as="select"
            type="text"
            placeholder="Año"
            name="year"
            onChange={handleInputChange}
          >
            <option selected disabled value="">
              Año
            </option>
            {generateYearOptions()}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Por favor seleccione su Año de nacimiento para continuar.
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
