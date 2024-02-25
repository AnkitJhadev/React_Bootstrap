import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Counter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs = {5}>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="info">Info</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Counter;
