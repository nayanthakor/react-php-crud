import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Add() {
  return (
    <>
    <Row>
        <Col>
            <h1>Add</h1>
            <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control type="Name" placeholder="Name" />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingAge" label="Age">
                    <Form.Control type="number" min="18" max="80" placeholder="Age" />
                </FloatingLabel>
                <Button className='mt-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    </Row>
    </>
  );
}

export default Add;