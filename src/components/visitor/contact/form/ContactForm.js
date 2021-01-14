import  React, { useState }  from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";
import ValidMessage from "./ValidMessage";
import {BASE_URL, headers} from "../../../../constants/API"; 
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



// ADD FORM VALIDATION
// TYPE CHECKING
const schema = yup.object().shape({
    fullName: yup
        .string()
        .min(4, "Full name must be minimum 4 characters")
        .required("Full name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
    message: yup
		.string()
        .required()
		.min(10, "Message must be minimum 10 characters")
        .max(500, "Message must be less than 500 characters")
});






function ContactForm(){

    const [validated, setValidated] = useState(false);
	const { register, handleSubmit, errors} = useForm({
        validationSchema: schema    
    });

    let history = useHistory();

    // GET FORM VALUES
    function onSubmit(data){
        const url = BASE_URL + "contacts";
        console.log(data);
        const sendData = {
            name: data.fullName,
            email: data.email,
            message: data.message,
        };

        const options = { headers, method: "POST", body: JSON.stringify(sendData) };

        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));
        console.log(sendData);
        setValidated(true);
    }

    // SET VALIDATED FALSE
    function validBtn(){
        setValidated(false);
    };

    // HANDEL CANCEL
    function cancel(){
        history.push('/'); // GO HOME
    }
    
    return (
        <Container>
            {!validated && 

            
        <Form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Text><h1 className="contactForm__title text-center">Contact Us</h1></Form.Text>
            {validated.valueOf(true) && <ValidMessage message=" THIS FORM IS VALID"></ValidMessage>}
            <Form.Group className="contactForm__name">
                <Form.Label className="contactForm__name--label">Full Name</Form.Label>
                <Form.Control className="contactForm__name--input" name="fullName" placeholder="Enter your full name" ref={register} />
                {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group className="contactForm__email">
                <Form.Label className="contactForm__email--label">Email</Form.Label>
                <Form.Control className="contactForm__email--input" name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group className="contactForm__msg">
                <Form.Label className="contactForm__msg--label">Message</Form.Label>
                <textarea className="contactForm__msg--input" type="text" name="message" placeholder="Enter your message" ref={register} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>
            
            <Row>
                <Col className="text-center contactForm__btn" sm={6}>
                    <Button className="contactForm__btn--submit" type="submit">Submit</Button>
                </Col>
                <Col className="text-center contactForm__btn" sm={6}>
                    <Button className="btn-danger contactForm__btn--cancel" onClick={cancel} >Cancel</Button>
                </Col>

            </Row>
            
        </Form>
        }
        {validated && <ValidMessage validBtn={validBtn}/>}
        </Container>
        

        
	);

}


export default ContactForm;