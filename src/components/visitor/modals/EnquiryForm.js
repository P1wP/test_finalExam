import  React, { useState, useContext }  from "react";
import { AuthContext } from "../../../context/AuthContext";
import {BASE_URL, headers} from "../../../constants/API";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import ErrorMessage from "./ErrorMessage";
import ValidMessage from "./ValidMessage";

// get Yeasterdays date.
const day = 24*60*60*1000;
let yesterday = new Date( Date.now() -day );

const schema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Firstname must be minimum 4 characters")
        .required("First name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
		.required("Email is required"),
    checkIn: yup
        .date("please select a date")
        // DEFAULT DATE IS +1 USE YEASTERDAYS DATE.
        .min( new Date(yesterday), "Check-in must be today or in the future.")
        .required("CheckIn date is required")
        .typeError("Please select a date"),
        
    checkOut: yup
        .date("please select a date")
        .min( yup.ref("checkIn"), "Check-out can not be before Check-in")
        .typeError("Please select a date")     
});

function EnquiryForm(id){
    
    const { hotelChange, setHotelChange } = useContext(AuthContext);
    const [validated, setValidated] = useState(false);
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema 
    });
    console.log("Before submit: " + hotelChange);
    function onSubmit(data){
        // SEND DATA TO API
        console.log(id);
        const test = id.value;
        console.log(test);
        const sendData = {
            name: data.name,
            email: data.email,
            establishmentId: id["id"],
            checkIn: data.checkIn.toDateString(),
            checkOut: data.checkOut.toDateString(),
        };

        const url = BASE_URL + "enquiries";
        const options = { headers, method: "POST", body: JSON.stringify(sendData) };
        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));

        console.log(sendData);
        setValidated(true);

        // UPDATE ON ADMIN SIDE
        if(hotelChange){
            setHotelChange(false);
        }
        else{
            setHotelChange(true);
        }
        console.log("after submit: " + hotelChange);
    }

    // RETURN THIS
    if(!validated){
        return(
            <Form className="enquiryForm" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                <Col sm={12}>
                    <FormGroup className="enquiryForm__name">
                    <Form.Label className="enquiryForm__name--label">Full Name</Form.Label>
                        <input className="enquiryForm__name--input" type="text" name="name" placeholder="Enter your full name" ref={register}></input>
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </FormGroup>
                    </Col>
                    <Col sm={12}>
                    <FormGroup className="enquiryForm__email">
                    <Form.Label className="enquiryForm__email--label">Email</Form.Label>
                        <input className="enquiryForm__email--input" type="email" name="email" placeholder="Enter your Email" ref={register}></input>
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </FormGroup>
                    </Col>
                    <Col sm={12} md={6}>
                    <FormGroup className="enquiryForm__date">
                    <Form.Label className="enquiryForm__date--label">Check-In</Form.Label>
                        <input className="enquiryForm__date--input" type="date" name="checkIn" ref={register}></input>
                        {errors.checkIn && <ErrorMessage>{errors.checkIn.message}</ErrorMessage>}
                    </FormGroup>
                    </Col>
                    <Col sm={12} md={6}>
                    <FormGroup className="enquiryForm__date">
                    <Form.Label className="enquiryForm__date--label">Check-out</Form.Label>
                        <input className="enquiryForm__date--input" type="date" name="checkOut" ref={register}></input>
                        {errors.checkOut && <ErrorMessage>{errors.checkOut.message}</ErrorMessage>}
                    </FormGroup>
                    </Col>
                    <Button className="enquiryForm__btn" type="submit">Send</Button>
                </Row>
            </Form>
        );
    }

    // ON VALIDATION RETURN THIS
    return(
        <ValidMessage />
    );
    
}

export default EnquiryForm;