import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expense, income } from "./components/ExpenseSlice";
import { nanoid } from "@reduxjs/toolkit";

export const ExpenseAdd = () => {
  const [amount, setAmount] = useState("");
  const [spent, setSpent] = useState("");
  const [typeExp, setTypeExp] = useState("");
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    if (typeExp === "expense") {
      dispatch(
        expense({ id: nanoid(), amount: -parseFloat(amount), spent: spent })
      );
    } else if (typeExp === "income") {
      dispatch(
        income({ id: nanoid(), amount: parseFloat(amount), spent: spent })
      );
    }
    setAmount("");
    setSpent("");
    setTypeExp('Selector');
  };

  return (
    <Container>
      <Form onSubmit={clickHandler} style={{alignItems:'center'}} className="my-2">
        <Row className="g-2">
          <Col md >
            <FloatingLabel controlId="floatingInputGrid" label="Enter Text....">
              <Form.Control
                value={spent}
                onChange={(e) => setSpent(e.target.value)}
                type="text"
                placeholder="Enter Text"
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingInputGrid"
              label="Enter Amount...."
            >
              <Form.Control
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="Enter Number"
              />
            </FloatingLabel>
          </Col>
          <Col md >
            <FloatingLabel
              controlId="floatingSelectGrid"
              label="Type of expense"
            >
              <Form.Select
                onChange={(event) => setTypeExp(event.target.value)}
                value={typeExp}
                aria-label="Floating label select example"
              >
                <option value="selector">Select</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col sm>
            <Button
              type="submit"
              variant="outline-secondary"
              className="mt-2"
            >
              Submit
            </Button>

          </Col>
        </Row>
      </Form>
    </Container>
  );
};
