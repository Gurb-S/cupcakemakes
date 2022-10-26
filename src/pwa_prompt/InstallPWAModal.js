import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../imgs/icons/enlarge_all.png"


export function InstallPWAModal(){
    const [smShow, setSmShow] = useState(true);

    return (
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
                Small modal
            </Button>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header closeButton={false}>
                    <Modal.Title id="example-modal-sizes-title-sm" className="d-block">
                        Install Cupcake Makes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
      </>
    )
}