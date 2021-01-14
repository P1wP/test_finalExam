import React from "react";

function DetailsBanner({image, alt}){


    return(

        <div id="detailsBanner" className="container-fluid" >
            {/* USE IMAGE TAG IF TIME */}
            <img className="detailsBanner__image" src={image} alt={alt} ></img>
        </div>

    )
}

export default DetailsBanner;