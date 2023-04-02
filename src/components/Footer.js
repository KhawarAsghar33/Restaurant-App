import React from 'react'
import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
export default function Footer() {
    return (
        <Container fluid>
            <Row>
                <Col>
                  <Card>
                    <Card.Footer>
                    <div className='footerBar'>
                    <Navbar>
                      <Nav>
                        <Nav.Link href='https://www.facebook.com/'><img src="images/FBLogo.png" />{' '}</Nav.Link>
                        <Nav.Link href='https://www.instagram.com/'><img src="images/InstaLogo.png" />{' '}</Nav.Link>
                        <Nav.Link href='https://www.twitter.com/'><img src="images/TwitrLogo.png" /></Nav.Link>
                        <Nav.Link href='https://www.whatsapp.com/'><img src="images/WhatsappLogo.png" /></Nav.Link>
                      </Nav>
                    </Navbar>
                    </div>
                    </Card.Footer>
                  </Card>
                </Col>
            </Row>
        </Container>
    )
}
