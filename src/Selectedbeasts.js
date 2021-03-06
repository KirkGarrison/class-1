import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


export default class SelectedBeasts extends Component {

    handleClose = () => {
        this.props.hideModal();
    }

    

    render () {
        return (
            <div>
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <img src={this.props.featuredBeast.image_url} alt="the beast"/>
                    <Modal.Title>{this.props.featuredBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.featuredBeast.description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}