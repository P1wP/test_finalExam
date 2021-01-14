import  React, { useContext }  from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";




// ADD FORM VALIDATION
// TYPE CHECKING
const schema = yup.object().shape({
    username: yup
        .string()
        .min(4, "Wrong Username or Password")
        .required("Username is required"),
	password: yup
		.string()
		.min(8, "Wrong Username or Password")
		.required("Password is required")
   
});






function LoginForm(){

    
	const { signIn } = useContext( AuthContext );
    const { register, handleSubmit, errors} = useForm({
        validationSchema: schema 
    });
    

    let history = useHistory();



    // GET FORM VALUES
    function onSubmit(data){
        signIn(data.username, data.password);
        history.push("/dashboard");
    }

   
    
    return (
        <Container>
            <Form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <Form.Text><h1 className="loginForm__title text-center">Admin Login</h1></Form.Text>

                <Form.Group className="loginForm__username">
                    <Form.Label className="loginForm__username--label">Username</Form.Label>
                    <Form.Control className="loginForm__username--input" type="text" name="username" placeholder="Admin" ref={register} />
                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </Form.Group>

                <Form.Group className="loginForm__password">
                    <Form.Label className="loginForm__password--label">Password</Form.Label>
                    <Form.Control className="loginForm__password--input" type="password" name="password" placeholder="Password" ref={register} />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Form.Group>
        
                    <Button className="loginForm__btn" type="submit">SignIn</Button>   
            </Form>
        </Container> 
	); // END RETURN

}


export default LoginForm;

