import React, { useState, useEffect} from "react";
import { BASE_URL, headers } from "../../../constants/API";


import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import HotelDetails from "../hotels/HotelDetails";
import HomeBanner from "./HomeBanner";
import Search from "../search/Search";
import Footer from "../footer/Footer";



function Home(){
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterdHotels, setFilterdHotels] = useState([]);

    
      
  
    
   
    useEffect(()=>{
        
       const url = BASE_URL;
       //const url = BASE_URL + "establishments";
       const FETCH_OPTIONS = {headers};
        fetch(url, FETCH_OPTIONS)
            .then(response => response.json())
            .then(json => { 
                console.log(json)
                setHotels(json)
                setFilterdHotels(json)
                localStorage.setItem("hotelsTWO", JSON.stringify(json));
            })
            .catch(error => console.log(error)) 
            .finally(() => setLoading(false));// END FETCH;
        

            
    }, []);
    

    const searchHotels = function(e){
        let searchValue;  // VALUE FROM SEARCH INPUT
        
        if(e.length === 0){
            searchValue = null;
        }
        else{
            searchValue = e.toString().toLowerCase(); // VALUE FROM INPUT
        }
       
        // CREATE NEW ARRAY FROM HOTELS ARRAY
        const filteredArray = hotels.filter(function(newHotel){
            const lowerCaseName = newHotel.name.toLowerCase();
            //Check if the hotels name begins with search value
            if(lowerCaseName.includes(searchValue)){
                 // If it does return true
                return true;
            }
            // ELSE
            return false;
        });

        setFilterdHotels(filteredArray);
        
        // IF EMPTY SET ALL
        if(filteredArray.length === 0){
            setFilterdHotels(hotels);
        }
        
    }

  

    if (loading) {
        
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }
    
    

    return(
        <>
        <div>
        
        <HomeBanner image={hotels[2].image}
            search={<Search  HandleSearch={searchHotels} filterd={filterdHotels} placeholder="Search by Name..."/>}>
        </HomeBanner>
        </div>
        
        <Container id="homeContent">
        <Row>
        {loading && <Spinner animation="border" className="spinner" />}
            {filterdHotels.map((hotel)=>(
                <HotelDetails  key={hotel.id} hotel={hotel}/>
                    
                           
        ))}

        </Row>
        </Container>
        <Footer />
        </>
    );
}

export default Home;