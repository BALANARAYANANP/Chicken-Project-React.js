
    import React from 'react';
    import {  Route, Routes } from 'react-router-dom';
    import FormValidationPage from './Joke';
    import ChickenCalculator from './chicken';
 
    
    function App() {
      return (
       
          <div>
     <Routes>
              <Route path="/" exact element={<FormValidationPage/>} />
              <Route path="/chicken-calculator" element={<ChickenCalculator/> } />
              </Routes>
          </div>
        
      );
    }
    
    export default App;
    
        
    