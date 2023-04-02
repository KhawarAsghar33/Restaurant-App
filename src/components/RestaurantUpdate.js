import { Component } from "react";

class RestaurantUpdate extends Component {
    constructor(props)
    {
      super(props);
      this.state = {
        id: null,
      }
      console.log(props);
    }
/*   constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
      lastId: ''
    }
  }
  componentDidMount(key)
  {
    this.setState({ lastSearch: key })
    fetch('http://localhost:3000/restaurant?q=' + key).then((response) => {
      response.json().then((result) => {
          this.setState({ 
            name:result.name,
            email:result.email,
            rating:result.rating,
            address:result.address
           })
      })
  })
  }
  update() {
    fetch('http://localhost:3000/restaurant/'+this.state.id, {
      method: "Put",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((response)=>{
        alert("Restaurant has been updated")
      })
    })
  } */
  render() {
    //console.warn(this.props.match.params.id);
    
    return (
      <div style={{ marginTop: "3.8rem" }}>
        <h1>Restaurant Update</h1>
        {/* <div>
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Restaurant Name" value={this.state.name} /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Restaurant Email" value={this.state.email}/><br /><br />
          <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="Restaurant Rating" value={this.state.rating}/><br /><br />
          <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="Restaurant Address" value={this.state.address}/><br /><br />
          <button onClick={() => { this.update() }}>Add Restaurant</button>
        </div> */}
      </div>
    );
  }
}

export default RestaurantUpdate;