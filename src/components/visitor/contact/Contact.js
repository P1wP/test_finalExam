import  React  from "react";
import ContactForm from "./form/ContactForm";
import ContactBanner from "./ContactBanner";
import Footer from "../footer/Footer";

function Contact(){
    // GET IMAGE
    const hotels = JSON.parse(localStorage.getItem("hotels"));
    return(
        <>
            <ContactBanner image={hotels[2].image} alt={hotels[2].name} form={<ContactForm/>}>
            </ContactBanner>
            
            <Footer/>
        </>
    );
}

export default Contact;