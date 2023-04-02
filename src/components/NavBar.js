import {  } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartPlus, faHome, faList, faSearch, faUserPen, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
    return (
        <div className='navBar' style={{ marginTop: "3.8rem" }}>
            <Navbar fixed="top" variant='dark' bg="dark" expand="lg">
                <Navbar.Brand href="#home">Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} />Home</Nav.Link>
                        <Nav.Link href="list"><FontAwesomeIcon icon={faList} />List</Nav.Link>
                        <Nav.Link href="create"><FontAwesomeIcon icon={faCartPlus}/>Create</Nav.Link>
                        <Nav.Link href="search"><FontAwesomeIcon icon={faSearch} />Search</Nav.Link>
                        <Nav.Link href="detail"><FontAwesomeIcon icon={faCircleInfo} />Detail</Nav.Link>
                        <Nav.Link href="update"><FontAwesomeIcon icon={faUserPen} />Update</Nav.Link>
                        <Nav.Link href="auth"><FontAwesomeIcon icon={faUser} />Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;