import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";
import WeatherAbout from "./WeatherAbout";
import "./Component.css";
import axios from "axios";
class SearchWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      city : 'Balıkesir',
      input: ''
    };
   
  }

  cityHandler = () =>{
    let _city = this.state.input
    this.setState({
        city:_city
    },this.getAll())
     
}
getAll(){
    axios
    .get(
      "https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city="+this.state.city,
      {
        headers: {
          authorization:
            "apikey 5EwmKdtGw4qgnrIHdGBUgu:5t3fheKx4zAlqDmhHTCscw",
          "content-type": "application/json",
        },
      }
    )
    .then((res) => {
      this.setState({
        weather: res.data.result,
      });
    })
    .catch(err =>{
    console.log("Error: "+err)
    return null
    })
}
  componentDidMount() {
   this.getAll()
  }
 inputTracker = (event)=>{
  this.setState({
      input:event.target.value
  })

  
 }
  render() {
    return (
      <>
        <Container fluid>
          <Form >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Şehir Adı</Form.Label>
              <Form.Control onChange = {this.inputTracker} type="text" value = {this.state.input} placeholder="Bir şehir girin" />
            </Form.Group>
          </Form>
          <Button onClick = {this.cityHandler} >Şehir Arat</Button>
        </Container>
        <WeatherAbout weather={this.state.weather} />
      </>
    );
  }
}

export default SearchWeather;
