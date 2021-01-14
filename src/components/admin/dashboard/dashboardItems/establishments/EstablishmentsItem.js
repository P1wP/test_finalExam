import React, {  useState, useEffect, useContext} from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { BASE_URL, headers } from "../../../../../constants/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Search from "../../../../visitor/search/Search";
import EstablishmentsDetails from "./EstablishmentsDetails";
import EstablishmentCreateBtn from "./EstablishmentCreateBtn";
import EstablishmentsCreate from "./EstablishmentsCreate";

function EstablishmentsItem(){
    const {create, hotelChange, setHotelChange, clickedHotel, setClickedHotel } = useContext(AuthContext);
    const [ establishments, setEstablishments ] = useState([]);
    const [ filterdhotel, setFilterdHotel ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    
    
    useEffect(() => {
        
        const FETCH_OPTIONS = {headers};
        const url = BASE_URL;
        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                setEstablishments(json)
                setFilterdHotel(json)
                localStorage.setItem("hotelsTWO", JSON.stringify(json));
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;
            setHotelChange(false);
        
        }, [hotelChange, setHotelChange]);
    

    const searchHotels = function(e){
        // VALUE FROM SEARCH INPUT
        let searchValue;
        
        if(e.length <= 0){
            searchValue = "someThing";
            //setFilterdHotels(hotels);
        }
        else{
            searchValue = e[0].toLowerCase();
        }
        //const searchValue = e.target.value.toLowerCase();
        

        // CREATE NEW ARRAY FROM HOTEL ARRAY
        const filteredArray = establishments.filter(function(newHotel){
            // NAME
            const lowerCaseName = newHotel.name.toLowerCase();
            // ID
            const lowerCaseId = newHotel.id.toLowerCase();

            //Check if the hotel name || id begins with search value
            if(lowerCaseName.includes(searchValue) || lowerCaseId.includes(searchValue)){
                
                // If it does return true
                return true;
            }
            // ELSE
            return false;
        });
        setFilterdHotel(filteredArray);
        if(filteredArray.length === 0){
            setFilterdHotel(establishments);
        }
        
    }

  

    if (loading) {
        
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }


    function viewHotel(hotel){
        setClickedHotel(hotel);
    }

   
    return(
        <Row>
            <Col sm={8} md={8}>
                <h2 className="establishments__heading">{create ? ("CREATE NEW"):("ESTABLISBMENTS")}</h2>
            </Col>
            {create ?(
                // CREATE NEW
                <EstablishmentsCreate />
            ):(
            
               // EDIT 
               <>
            <Col sm={4} md={4} className="text-right">
                <EstablishmentCreateBtn />
            </Col>
            {!clickedHotel ? 
            ( // START CLICKED HOTEL
                <>
            <Col sm={12} className="establishments__search">
                <Search  HandleSearch={searchHotels} filterd={filterdhotel} placeholder="Search by Name/Id.."/>
            </Col>
            
            <Col sm={12}>
                
                <div className="establishments__list">
                    <div className="establishments__list--info">
                        <div className="establishments__list--info--from">Name</div>
                        <div className="establishments__list--info--email">ID</div>
                    </div>
                    {filterdhotel.map((hotel)=>(
                        
                        <div key={hotel.id} className="establishments__list--item" onClick={()=>{viewHotel(hotel)}}>
                            <div className="establishments__list--item--name">
                                <p key={hotel.id}>{hotel.name}</p>
                            </div>
                            <div className="establishment__lists--item--icon">
                                <FontAwesomeIcon className="establishment__lists--icon--edit" icon={faEdit} />
                            </div>
                        </div>
                    ))}
                    </div>
            </Col>
            </>
               ):( // END Clicked hotel
                <Col sm={12}>
                    <EstablishmentsDetails establishment={clickedHotel} />
                    
                </Col>
                
            )}
            </>
            )}
            
        
        </Row>
        
    );
}

export default EstablishmentsItem;