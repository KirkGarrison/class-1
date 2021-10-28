import { Component } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

class Hornedbeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Favorite: 0
        }
    }

    handleclick = () => {
        this.setState({Favorite: this.state.Favorite + 1});
    }

        handleImgClick = () => {
            this.props.updateBeast
        }

    render() {
        return (
            <Card id="hornedBeastCard" style ={{ width: '18rem' }}>
                <Card.Img variant="top" src ={this.props.beasts.image_url} alt={this.props.beasts.description} />
                <Card.Body>
                <Card.Title>{this.props.beasts.title}</Card.Title>
                <Card.Text>
                    {this.props.beasts.description}
                </Card.Text>
                <Button variant="secondary" onClick={this.handleclick}>{'❤️ '}{this.state.Favorite}</Button>
                </Card.Body>
             </Card>
        )
    }
}

export default Hornedbeasts;