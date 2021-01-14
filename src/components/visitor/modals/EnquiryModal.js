import  React, { useState }  from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EnquiryForm from "./EnquiryForm";


function EnquiryModal({hotel}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button  className="hotelContainer__btns--enquiry" variant="primary" onClick={handleShow}>
            Enquier        
        </Button>

        <Modal show={show} onHide={handleClose}
        size="xl"
        onEscapeKeyDown={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{hotel.name} Enquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EnquiryForm id={hotel.id}></EnquiryForm>
            </Modal.Body>

        </Modal>
        </>
    );
}

export default EnquiryModal;