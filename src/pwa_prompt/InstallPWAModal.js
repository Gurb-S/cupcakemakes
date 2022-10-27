import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../imgs/icons/enlarge_all.png"
import share from "../imgs/icons/share.png"


export function InstallPWAModal(){
    const [smShow, setSmShow] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

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
                <Modal.Body className="text-center">
                    <img src={logo} height={50} width={50} alt="logo" className="rounded-circle"></img>
                    <h1 className="fs-2 mt-2">Install Cupcake Makes</h1>
                    <p className="text-muted">Install this application on your homescreen for a better experience</p>
                    <p>Tap <img src={share} height={25} width={25} alt="apple share logo" className="mb-2"></img> then &quot;Add to Home Screen&quot;</p>
                    <Button  onClick={handleClose} className="w-25 p-3 border border-0" style={{ color: "#5998F1"}}>
                        Close
                    </Button>
                </Modal.Body>
            </Modal>
      </>
    )
}