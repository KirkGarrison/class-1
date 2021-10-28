import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beasts from './data.json';
import "bootstrap/dist/css/bootstrap.min.css";
import Selectedbeasts from './Selectedbeasts'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: false,
        featuredBeast: {}
    }
}

hideModal = () => {
  this.setState( { show: false })
}

openModal = () => {
  this.setState( { show: true })
}

updateBeast = (beast) => {
  this.setState({
    featuredBeast: beast
  })
  this.openModal();
}
  render() {
    return (
      <div>
        <Header />
        <Main updateBeast={this.updateBeast} beasts={beasts}/>
        <Footer />
        <Selectedbeasts featuredBeast={this.state.featuredBeast} show={this.state.show} hideModal={this.hideModal}/>
      </div>
    )
  }
}