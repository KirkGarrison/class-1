import { Component } from "react";

class Hornedbeasts extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image} alt={this.props.alt} title={this.props.imgtitle} />
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Hornedbeasts;