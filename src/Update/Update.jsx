import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
function Update() {
const navigate = useNavigate();
 const [id,setId] =useState(0);
 const [name, setName] = useState('');
 const [email,setEmail] = useState('');
 const [gender,setGender] =useState('')
 useEffect(()=>{
  setId(localStorage.getItem("id"));
  setName(localStorage.getItem("name"));
  setEmail(localStorage.getItem("email"));
  setGender(localStorage.getItem("gender"));
 },[])
 
const  handleUpdate =(e)=>{
  e.preventDefault();
  axios.put(`https://6558c1d5e93ca47020a9b065.mockapi.io/crud_api/${id}`, {
    name:name,
    email:email,
    gender:gender
  },
  ).then(()=>{
        navigate("/");
  })
}
  return (
    <>
    <h1> Update Data Crud</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
         value={name}
           onChange={(e)=>setName(e.target.value)
           }
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
           value={email}
            onChange={(e)=>setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

     <div>


     </div>

        <button type="submit" className="btn btn-primary" 
        onClick={handleUpdate} 
        >
          Update
        </button>
      </form>
    </>
  )
}

export default Update