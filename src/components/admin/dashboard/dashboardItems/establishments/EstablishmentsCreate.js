import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import EstablishmentsCancel from "./EstablishmentsCancel";

import { BASE_URL, headers } from "../../../../../constants/API";
import ErrorMessage from "../../../formValidation/ErrorMessage";
import ValidMessage from "../../../formValidation/ValidMessage";



const schema = yup.object().shape({
    name: yup
        .string()
        .min(4, "Wrong Username or Password")
        .required("Username is required"),
	email: yup
		.string()
		.min(8, "Wrong Username or Password")
        .required("Password is required"),
    price: yup
        .number()
        .typeError('Price must be a number')
        .positive("Price must be more than 0")
        .min(10, "minimum price is 10$")
        .required("Price is required"),
    guests: yup
        .number()
        .typeError('Guests must be a number')
        .positive("Guests must be more than 0")
        .required("Maximum Guests is Required"),
    catering: yup
        .string()
        .required("Catering is required"),
    lat: yup
        .string()
        .max(20,"Latitude is too long")
        .required("Latitude is required"),
    lng: yup
        .string()
        .max(20,"Longitude is too long")
        .required("Longitude is required"),
    image: yup
        .string()
        .url()
        .required("Specify image URL"),
    description: yup
        .string()
        .min(30, "Description must be minimum 30 character long")
        .max(300, "Description can not be longer than 300")
   
});



function EstablishmentsCreate(){

    const [catering, setCatering ] = useState(true);
    const [validated, setValidated] = useState(false);

    
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema,
        //https://react-hook-form.com/api/
        // SET VALUE
        
    });

    function handelLabel(event){
        
        if(event.target.value === "false"){
            setCatering(false);
        }
        else{
            setCatering(true);   
        }

    }
    useEffect(()=>{
        console.log("useEffect: " + catering);
    },[catering])

    // GET FORM VALUES
    function onSubmit(data){
        console.log(data)
        const newEstablishment = {
            name: data.name,
            email: data.email,
            price: data.price,
            maxGuests: data.guests,
            lat: data.lat,
            lng: data.lng,
            image: data.image,
            description: data.description,
            selfCatering: catering
        };
        console.log(newEstablishment)
        
        const url = BASE_URL;
        const options = { headers, method: "POST", body: JSON.stringify(newEstablishment) };

        // send every
        fetch(url, options)
            .then((r) => r.json())
            .then((j) => console.log(j));
            setValidated(true);

    }

    

    return(
        <Container>
            <Form className="establishmentForm" onSubmit={handleSubmit(onSubmit)}>
                <Form.Text><h1 className="establishmentForm__title text-center">Create New</h1></Form.Text>

                <Form.Group className="establishmentForm__name">
                    <Form.Label className="establishmentForm__name--label">Name</Form.Label>
                    <Form.Control   className="establishmentForm__name--input" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Establismnet name"
                                    ref={register} />
                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__email">
                    <Form.Label className="establishmentForm__email--label">Email</Form.Label>
                    <Form.Control   className="establishmentForm__email--input" 
                                    type="text"    
                                    name="email"
                                    placeholder ="Establishment Email"
                                    ref={register} />
                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__price">
                    <Form.Label className="establishmentForm__price--label">Price for 1 guest</Form.Label>
                    <Form.Control   className="establishmentForm__price--input" 
                                    type="number" 
                                    name="price" 
                                    placeholder="Price for 1 guest"
                                    ref={register} />
                    {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__guests">
                    <Form.Label className="establishmentForm__guests--label">Maximum Guests</Form.Label>
                    <Form.Control   className="establishmentForm__guests--input" 
                                    type="text" 
                                    name="guests"
                                    placeholder="Max guest"
                                    ref={register} />
                    {errors.guests && <ErrorMessage>{errors.guests.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__catering">
                <Form.Label className="establishmentForm__catering--label">Self-Catering</Form.Label>
                            <Form.Check 
                                className="establishmentForm__catering--radio"
                                name="catering"
                                type="radio"
                                label="YES"
                                value = "true"
                                onChange={handelLabel}
                                ref={register}
                            />

                            <Form.Check
                                className="establishmentForm__catering--radio"
                                name="catering"
                                type="radio"
                                label="NO"
                                value = "false"
                                onChange={handelLabel}
                                ref={register}
                            />
                            {errors.catering && <ErrorMessage>{errors.catering.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__latitude">
                    <Form.Label className="establishmentForm__latitude--label">Latitude</Form.Label>
                    <Form.Control   className="establishmentForm__latitude--input" 
                                    type="text" 
                                    name="lat"
                                    placeholder="Latitude Coordinates"
                                    ref={register} />
                    {errors.lat && <ErrorMessage>{errors.lat.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__longitude">
                    <Form.Label className="establishmentForm__longitude--label">Longitude</Form.Label>
                    <Form.Control   className="establishmentForm__longitude--input" 
                                    type="text" 
                                    name="lng"
                                    placeholder="longitude Coordinates"
                                    ref={register} />
                    {errors.lng && <ErrorMessage>{errors.lng.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__image">
                    <Form.Label className="establishmentForm__image--label">Image Url</Form.Label>
                    <Form.Control   className="establishmentForm__image--input" 
                                    type="text" 
                                    name="image"
                                    placeholder="Link to image"
                                    ref={register} />
                    {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="establishmentForm__description">
                    <Form.Label className="establishmentForm__description--label">Description</Form.Label>
                    <textarea   className="establishmentForm__description--input" 
                                    type="text" 
                                    name="description"
                                    placeholder="Establishment Description"
                                    ref={register} />
                    {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
                </Form.Group>
                <Row className="establishmentForm__row">
                {validated && <ValidMessage><p>Establishment successfuly create</p></ValidMessage>}
                    <Col xs={12} sm={6} className="establishmentForm__btn">
                    <Button className="establishmentForm__btn--save" type="submit">SAVE</Button> 
                    </Col>
                    <Col xs={12} sm={6} className="establishmentForm__btn">
                        <EstablishmentsCancel classname="establishmentForm__btn--cancel" />
                    </Col>
                    
                </Row>
            </Form>
        </Container> 
    )
}

export default EstablishmentsCreate;

