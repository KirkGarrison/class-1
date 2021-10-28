import { Component } from "react";
import Hornedbeasts from "./Hornedbeasts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import '../src/App.css';

class Main extends Component {
    // function to update state in App.js
    render() {
        return (
            <>
                <Container>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {this.props.beasts.map(beast => 
                            <Hornedbeasts updateBeast={this.props.updateBeast} beast={beast} />
                        )}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main;