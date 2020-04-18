import React, { useState } from "react";
import "./App.css";
import SmurfList from "./smurfList";
import {addSmurf} from "../actions"
import {connect} from "react-redux"


function App (props) {
  const [fields, setFields] = useState({
    name:"",
    age:"",
    height:''
  });


  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]:e.target.value,
    });
  }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.addSmurf(fields)
      setFields({
        name: '',
        age:'',
        height:""

      })
    }
  
  
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Have fun!</div>
        <form>
          <label>addd smurf 
            <input
            name="name"
            onChange={handleChange}
            type="text"
            value={fields.name}
            placeholder="name"
            />
            <input
            name="age"
            onChange={handleChange}
            type="text"
            value={fields.age}
            placeholder="age"/>
            <input
            name="height"
            onChange={handleChange}
            type="text"
            value={fields.height}
            placeholder="height"/>
            <button type="submit" onClick={handleSubmit}>submit</button>

         
            </label>
        </form>
        <SmurfList />
      </div>
    )
      
}

export default  connect(null, {addSmurf})(App);
