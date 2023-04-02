import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class RestaurantList extends Component {

    constructor() {
        super();
        this.state = { list: null }

    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id, {
            method: "DELETE",
            /* headers: {
                'Content-Type': 'application/json'
            }, */
        }).then((result) => {
            result.json().then((response) => {
                alert("Restaurant has been Deleted")
                this.getData();
            })
        })
    }

    render() {
        return (
            <Container style={{ marginTop: "3.8rem" }}>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faUserPen} color="red" /></Link>
                                                    <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </Container>
        );
    }
}

export default RestaurantList;