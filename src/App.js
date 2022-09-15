import logo from './logo.svg';
import React, {useState} from'react';
import Statehook from './components/Statehook';
import Httpget from './components/Httpget';
import Httppost from './components/Httppost';
import Learn from './components/Learn';

import './App.css';

function App() {
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [mobile, setMobile] = useState('');

  const handler = (event)=>{
    const {name, value} = event.target;
    console.log(name+'----'+value);
  }
 const formSubmit = (event)=>{
   event.preventDefault();
   console.log('done');
 }

  return (
    <div className="App">
      <h2>Form Registration</h2>
      <form onSubmit={formSubmit}>
        firstName: <input type="text" name="fname" onChange={handler} />
        lastName:  <input type="text" name="lname" onChange={handler} />
        mobile:    <input type="text" name="mobile" onChange={handler} />
        <button type="submit">Submit</button> 
      </form>
      <hr/>
      <Statehook />
      {/* <Httpget/> */}
      <Httppost/>
      <hr/>
      <Learn/>
    </div>
    
  );
}

export default App;
