import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import "bootstrap/dist/css/bootstrap.min.css";
import Selectedbeasts from './Selectedbeasts'



export default class App extends Component {
    //Something like this to store the data and send to modal?
  constructor(props) {
    super(props);
    this.state = {
        show: false
    }
}

selectedbeast = () => {
  this.setState({
    // On image click? Send image into modal

  })
}

hideModal = () => {

}

  render() {
    return (
      <div>
        <Header />
        <Main data = {data}/>
        <Footer />
        <Main selectedbeast ={this.selectedbeast}/>
        <Selectedbeasts show={this.state.show} hideModal={this.hideModal}/>
      </div>
    )
  }
}