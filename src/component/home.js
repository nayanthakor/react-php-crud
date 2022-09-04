import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { PencilSquare, Trash3Fill, PlusCircleFill } from 'react-bootstrap-icons';

function Home() {
  return (
    <>
        <Row>
            <Col className="mb-3 text-end">
                <Link to="/add"><Button variant="primary"><PlusCircleFill /> Add</Button></Link>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                    <Link to="/edit/2"><Button variant="secondary"><PencilSquare /> Edit</Button></Link> <Button variant="danger"><Trash3Fill /> Delete</Button>
                                
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <Link to="/edit/2"><Button variant="secondary"><PencilSquare /> Edit</Button></Link> <Button variant="danger"><Trash3Fill /> Delete</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >Larry</td>
                            <td >Otttlo</td>
                            <td>@twitter</td>
                            <td>
                                <Link to="/edit/2"><Button variant="secondary"><PencilSquare /> Edit</Button></Link> <Button variant="danger"><Trash3Fill /> Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
  );
}

export default Home;