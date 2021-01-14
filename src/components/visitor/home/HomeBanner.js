import React from "react";
import Container from "react-bootstrap/Container";


function HomeBanner({search, image}){

    const ImageStyle = {
        backgroundImage: 'url(' + image + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };


    return(
        <div id="homeBanner" className="container-fluid" style={ImageStyle}>
            <Container className="homeContainer">
                
            <h1 className="homeContainer--text">Find B&B's, Guesthouses <br/> & <br/> Hotels in Bergen</h1>
            
                {search}
            </Container>
        </div>
    );

}
//<img id="homeBanner__container--image" src={image} alt="Featured"></img>
export default HomeBanner;