import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";
import { Card, Row, Col, Button } from "react-bootstrap";

const CardItem = () => {
    return (
      <Row  className="mt-5">
        <Col>
          <Card>
            <Card.Img variant="top" src={menu1} />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>A</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={menu2} />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>B</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={menu3} />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>C</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={menu4} />
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>D</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}

export default CardItem;