import { Component } from "react";
import { Form } from "react-bootstrap";
class RestaurantCreate extends Component {

  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    }
  }
  create() {
    fetch('http://localhost:3000/restaurant', {
      method: "Post",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((response)=>{
        alert("Restaurant has been added")
      })
    })
  }
  render() {
    return (
      <div style={{ marginTop: "3.8rem" }}>
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
          <Form style={{align:"left",backgroundColor:"yellow", border:"4px solid green", width:"50%",paddingBottom:"80px"}}><br/>
          <marquee style={{scrollAmount:"10%", behavior:"alternate",backgroundColor:"silver",height:"5%"}}>Restaurants</marquee>
          <h1 style={{align:"center"}}>Create Restaurant</h1><br/>
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" /><br /><br />
          <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" /><br /><br />
          <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" /><br /><br />
          <button onClick={() => { this.create() }}>Add Restaurant</button>
      </Form>
      </div>
      </div>
    );
  }
}

export default RestaurantCreate;