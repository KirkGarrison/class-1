import { Component } from "react";

class Hornedbeasts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageclicked: 0
        }
    }

    handleclick = () => {
        this.setState({imageclicked: this.state.imageclicked + 1});
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} alt={this.props.alt} title={this.props.imgtitle} onClick={this.handleclick}/>
                <p>{this.props.description}</p>
                <p>{this.props.keyword}</p>
                <p>{this.props.horns}</p>
                <p>&hearts;: {this.state.imageclicked}</p>
            </>
        )
    }
}

export default Hornedbeasts;