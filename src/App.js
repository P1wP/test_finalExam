import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { AuthContextProvider } from "./context/AuthContext";
import './SASS/Styles.sass';
import Layout from "./components/layout/Layout";

// FontAwesome  
library.add(fab, faLink)

function App() {


  return (
    <AuthContextProvider>
    <div className="App">
      <Layout/>
      
    </div>
    </AuthContextProvider>
  );
}

export default App;

