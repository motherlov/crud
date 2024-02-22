import React from "react";
 import axios from "axios";
 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
 import { TextField, Grid } from '@mui/material';

function Create() {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate()
  // const headers = { "Access-Control-Allow-origin":"*"};



  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });



   const hanadleSubmit =(e)=>{
   
 e.preventDefault();
 console.log(" Click Start");

// /////// https://mockapi.io/projects  website backend data (create me)/////////////////////////

 axios.post('https://6558c1d5e93ca47020a9b065.mockapi.io/crud_api',{
  name:name,
  email:email,
  gender:gender
},
// headers
).then(()=>{
 navigate('/');
})
   };
  return (
    <>
    <h1> Create Data Crud</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter your name"
           onChange={(e)=> setName(e.target.value) }
            aria-describedby="nameHelp"
          />
        </div>


   


        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e)=>
              setEmail(e.target.value)
             }
            aria-describedby="emailHelp"
          />
        </div>

<div>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    </div>

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Street Address"
          name="street"
          value={address.street}
          onChange={(e)=>setAddress(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="City"
          name="city"
          value={address.city}
          onChange={(e)=>setAddress(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="State"
          name="state"
          value={address.state}
          onChange={(e)=>setAddress(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label="ZIP Code"
          name="zip"
          value={address.zip}
          onChange={(e)=>setAddress(e.target.value)}
          fullWidth
        />
      </Grid>
    </Grid>



     

        <button type="submit" className="btn btn-primary" onClick={hanadleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
