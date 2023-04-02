import { Component } from "react";
import { Carousel, CarouselItem, Container, Row, Col, Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container fluid style={{ marginTop: "3.8rem" }}>
        <Row>
          <Col>
            <Carousel fade>
              <CarouselItem interval={1500}>
                <img src="images/food1.PNG" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food2.PNG" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food3.PNG" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food4.jpg" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food5.jpg" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food6.jpg" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food7.jpg" className="d-block w-100" />
              </CarouselItem>
              <CarouselItem interval={1500}>
                <img src="images/food8.jpg" className="d-block w-100" />
              </CarouselItem>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col>
            <Container className="restoINFO" >
              <p>
                <strong>Rajput Restaurant</strong>, which means “collection” in <strong>Pakistan</strong>, is just that – a compilation of lively dining experiences.
                <strong>Rajput Restaurant</strong> celebrates the best of <strong>Pakistan</strong> dishes with welcoming hospitality and service.
                Seasonal changes guide the menu of scratch-made pasta made in-house daily, cheeses, antipastis,
                pizzas and more. Staying true to <strong>Pakistan</strong> dining traditions,<strong>Rajput Restaurant</strong> also offers a “For the Table” dining
                option curated for a family-style experience, offered nightly alongside the full à la carte menu.
              </p><br />
              <Button variant="outline-light">LEARN MORE</Button>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Card style={{ margin: "60px" }}>
              <Card.Img border="4px solid black" src="images/party1.jpg" />
            </Card>
          </Col>
          <Col sm={6}>
            <Card style={{ width: "30rem", marginTop: "8rem", border: "2px solid black", backgroundColor: "black", color: "white" }}>
              <Card.Body className="align-left">
                <Card.Title>Host A Party</Card.Title>
                <Card.Text>
                  We recommend celebrating all moments, big or small,
                  or turning a business dinner into a festive feast. At <strong>Rajput Restaurant</strong>, you don't need an excuse to gather.
                </Card.Text><br />
                <Button variant="outline-light" style={{ marginRight: "15px" }}>ATLANTA</Button>
                <Button variant="outline-light">CARY</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Card style={{ width: "30rem", marginTop: "8rem", marginLeft: "5rem", border: "2px solid black", backgroundColor: "black", color: "white" }}>
              <Card.Body className="align-left">
                <Card.Title variant="right" >Menus</Card.Title>
                <Card.Text>
                  Our creative, food and beverage program combines satisfying staples with imaginative twists.
                  From boozy drag show brunches, classic Americana breakfasts, special occasions and everything in between,
                  The OG has something for everyone
                </Card.Text><br />
                <Button variant="outline-light">VIEW MENUS</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6}>
            <Card style={{ width: "35rem" }}>
              <Card.Img border="4px solid black" src="images/menu.png" />
            </Card>
          </Col>
        </Row>

        <Row style={{ margin: "100px" }}>
          <Col sm={4}>
            <div className="d-grid gap-2">
              <Button variant="outline-dark" size="lg"><h4>THE TIME AND THE<br />PLACE</h4></Button>
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-grid gap-2">
              <Button variant="outline-dark" size="lg"><h4>DID WE JUST BECOME<br />BEST FRIENDS?</h4></Button>
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-grid gap-2">
              <Button variant="outline-dark" size="lg"><h4>HEY PARTY<br />PEOPLE!</h4></Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home;