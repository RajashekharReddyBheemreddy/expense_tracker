import { useDispatch, useSelector } from "react-redux";
import { Sort } from "./Sort";
import { deleteH } from "./components/ExpenseSlice";
import { Button, Container, Row, Col, Placeholder } from "react-bootstrap";
import { ExpenseAdd } from "./ExpenseAdd";

export const Display = () => {
  const { transcations } = useSelector((state) => state.tracker);
  const dispatch = useDispatch();

  let amount = transcations.map((element) => element.amount);
  let totalAmount = amount.reduce((el, acc) => (el += acc), 0);

  const removeHandler = async (id) => {
    const deleteId = await id;
    await dispatch(deleteH(deleteId));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Container className="mt-3">
      <ExpenseAdd className="my-4" />
      <hr />
        <h1 className="my-2">Total Amount Remaining: ${totalAmount}</h1>
        <br />
        <Sort className="my-2" />
        <hr />
        {transcations.map((element) => (
          <Row key={element.id}>
            <Col sm='10' style={{ display: "inline-flex", justifyContent:'space-between'}}>
              <h2 className="col-md-4">{element.spent}</h2>
              <h2 className="col-md-4">{element.amount}</h2>
              <Button
                variant="outline-danger my-2"
                className="col-md-2"
                style={{ marginRight: "-20px" }}
                onClick={() => removeHandler(element.id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};
