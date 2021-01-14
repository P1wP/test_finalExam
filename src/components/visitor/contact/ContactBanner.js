import React from "react";
import Container from "react-bootstrap/Container";
//import BannerHome from "../../../images/bannerHome.jpg";

function ContactBanner({image, alt, form}){

    const ImageStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return(
        <div className="contactBanner" style={ImageStyle}>
            <Container>
                {form}
            </Container>
        </div>
    )
}

export default ContactBanner;