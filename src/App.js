import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beasts from './data.json';
import "bootstrap/dist/css/bootstrap.min.css";
import Selectedbeasts from './Selectedbeasts';
import Form from "react-bootstrap/Form";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      featuredBeast: {},
      numberHorns: beasts
    }
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  openModal = () => {
    this.setState({ show: true })
  }

  updateBeast = (beast) => {
    this.setState({
      featuredBeast: beast
    })
    this.openModal();
  }

  handleChange = (event) => {
    let selection = event.target.value
    let updatedSelectionArr = beasts;
    if (selection !== "all") {
      updatedSelectionArr = beasts.filter(beast => beast.horns === parseInt(selection))
    }
    this.setState({ numberHorns: updatedSelectionArr })
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Select onChange={this.handleChange} aria-label="Default select example">
            <option>For the Horn Enthusiasts! Filter by number of Horns!</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Four or more!</option>
            <option value="all">All Horned Beasts</option>
          </Form.Select>
        </Form>
        <Header />
        <Main updateBeast={this.updateBeast} beasts={this.state.numberHorns} />
        <Footer />
        <Selectedbeasts featuredBeast={this.state.featuredBeast} show={this.state.show} hideModal={this.hideModal} />
      </div>
    )
  }
}