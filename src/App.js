import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Info from './components/Info';
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';

  function App() {
   return (
     <div>
      
       <Info/>
       <Education />
       <WorkExperience/>
     </div>
   )
 }
 
export default App;