import React from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // BOOTSTRAP TYPEAHEAD 



function Search({HandleSearch, filterd, placeholder}){

    
    const hotels = [];
    for(let i = 0; i< filterd.length; i++){
        hotels.push(filterd[i].name)
        //hotels.push(filterd[i].id)
    }
    
    console.log(hotels.name);
    return(
        <div id="searchContainer">

            <Typeahead
                id="searchBar"
                placeholder={placeholder}
                options={hotels}
                maxVisible={2}
                labelKey={hotels}
                onChange={(value) => HandleSearch(value)}
                onInputChange={(value) => HandleSearch(value)}
                shouldSelect={true}
                
            />

        </div>
    )
}

export default Search;
