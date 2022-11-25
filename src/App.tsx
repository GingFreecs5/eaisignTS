import React from 'react';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
        <div className="login-page">
           <div className="form">
                <div className="form-header ">
                 <h3>Connexion</h3> 
                </div>
                <form>
             
                    <input type={'text'} placeholder="Username"/>

                    <input type={'password'} placeholder="Password"/>

                </form>
           </div>
        </div>
    </div>
  );
}

export default App;
