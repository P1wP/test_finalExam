import React , { useState, useEffect }from "react";
import {GKEY, BASE_URL, headers} from "../../../../constants/API";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {MapStyle}  from "../../../../constants/MapStyle";
// https://tomchentw.github.io/react-google-maps/

// https://www.youtube.com/watch?v=Pf7g32CwX_s

// LOCATION 
// https://www.npmjs.com/package/react-geocode

function GMap({lat, lng}){
    console.log("MAP" + lat + lng)
    const [ clickedMarker, setClickedmarker] = useState(null);
    // GET ALL HOTELS
    const [ allHotels, setAllHotels ] = useState([]);

    useEffect(()=>{
    
        const url = BASE_URL;
        const FETCH_OPTIONS = {headers};
        
        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setAllHotels(json)
            })
            .catch(error => console.log(error));// END FETCH;
        
        
    }, []);

    return(
        <div className="map">
                <GoogleMap
                    defaultZoom={13}
                    defaultCenter={{lat: lat, lng: lng}}
                    defaultOptions ={{styles : MapStyle}}
                    
                >
                {allHotels.map((hotel) =>(
                    <Marker 
                        key={hotel.id} 
                        position={{lat: hotel.lat, lng: hotel.lng}}
                        label={hotel.name}
                        onClick={() =>{
                            setClickedmarker(hotel);
                        }} 
                        
                    
                    />
                ))}

                {clickedMarker && (
                    <InfoWindow
                        className="marker"
                        position={{lat: clickedMarker.lat, lng: clickedMarker.lng}}
                        onCloseClick={()=>{
                            setClickedmarker(null);
                        }}   
                      
                    >  
                      <>
                        <p className="marker__title">{clickedMarker.name}</p>
                        <div className="marker__img">
                            <img className="marker__img--img" src={clickedMarker.image} alt={clickedMarker.name}></img>
                        </div>
                        <Link className="marker__link" to={"/hotel/" + clickedMarker.id + "#detailsBanner"}>
                            <Button className="marker__link--btn">Details</Button>
                        </Link>
                      
                      </>
                    </InfoWindow>
                )}
                    
                </GoogleMap>
        </div>
    )
};

const GetMap = withScriptjs(withGoogleMap(GMap));

function Map({lng, lat}){
    return(
        <GetMap
            lat={lat}
            lng={lng}
            googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=' + GKEY}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}

        />
    )
}
export default Map;
