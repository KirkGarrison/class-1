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
                    <Modal.Title>Beast Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>Beast description</Modal.Body>
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