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
            this.props.updateBeast(this.props.beast)
        }

    render() {
        return (
            <Card id="hornedBeastCard" style ={{ width: '18rem' }}>
                <Card.Img variant="top" onClick={this.handleImgClick} src={this.props.beast.image_url} alt={this.props.beast.description} />
                <Card.Body>
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Text>
                    {this.props.beast.description}
                </Card.Text>
                <Button variant="secondary" onClick={this.handleclick}>{'❤️ '}{this.state.Favorite}</Button>
                </Card.Body>
             </Card>
        )
    }
}

export default Hornedbeasts;