import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) =>{

    // LOGIN
    const [ login, setLogin ] = useState(localStorage.getItem("admin"));
    
    function signIn( username, password) {
        const cred = {
            username: "Admin",
            password: "Password"
        }
        if(username === cred.username && password === cred.password){
            sessionStorage.setItem("admin","admin");
            setLogin(true);
            return
        }
        
        return
    }

    function logout(){
        if(login){
            sessionStorage.removeItem("admin");
            setLogin(false);
        }
        return
    }

    // DASHBOARD 
    const [ msg, setMsg ] = useState(false);
    const [ est, setEst ] = useState(false);
    const [ enq, setEnq ] = useState(false);
    const [ props, setProps ] = useState([]);
    const [ clickedHotel, setClickedHotel ] = useState(null);
    const [ create, setCreate ] = useState(false);
    const [ hotelChange, setHotelChange ] = useState(false);


    function toggleShow(x, msg, enq, est){
        // SET PROP
        setProps(x);

        // OPEN COMPONENT
        if(msg){
            setMsg(true);
            setEnq(false);
            setEst(false);
        }
        else if(enq){
            setMsg(false);
            setEnq(true);
            setEst(false);
        }
        else if(est){
            setMsg(false);
            setEnq(false);
            setEst(true);
        }
        return
    }

    function closeAll(msg, enq, est){
        // CLOSE OPEN DETAILS WINDOW
        if(msg){
            setMsg(false);
            
        }
        else if(enq){
            setEnq(false);
            
        }
        else if(est){
            if(clickedHotel){
                setClickedHotel(false);
                setEst(false);
                toggleShow(false, false, false, true)
            }
            setEst(false);
            setCreate(false)
        }
        
    }

 

    return <AuthContext.Provider value={{props, create, setCreate, hotelChange, setHotelChange, clickedHotel, setClickedHotel, enq, est, setEst,  msg, closeAll, toggleShow, login, signIn, logout}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider };