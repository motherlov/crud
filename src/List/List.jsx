import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
function List() {
    const [data ,setData] = useState([]);
    const getData =()=>{
        axios.get('https://6558c1d5e93ca47020a9b065.mockapi.io/crud_api')
        .then((res)=>{console.log(res.data)
              //console.log(res);
          setData(res.data);
        });
    }
    useEffect(()=>{
        getData();
    },[])

    const handleDelete =async(id) =>{

 const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You want to be delete data!',
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Confirm!',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showCancelButton: true,
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`https://6558c1d5e93ca47020a9b065.mockapi.io/crud_api/${id}`)
        .then((res)=>{
        getData();
      });
        Swal.fire(
          'Deleted!',
         'Your data has been deleted.', 
         'success'
         );
        // Perform any additional actions after deletion
      } catch (error) {
        Swal.fire(
          'Error!', 
          'Failed to delete data.',
           'error');
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
      'Cancelled', 
      'Your data is safe :)', 
      'info');
    }

    //axios.delete(`https://6558c1d5e93ca47020a9b065.mockapi.io/crud_api/${id}`)  .then((res)=>{
      //   getData();
      // }
      // )
     
    }
    const setToLocalStorage = (id,name,email,gender) =>{  //  set data localStorage
      localStorage.setItem("id",id);
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
      localStorage.setItem("gender",gender);
        }

  return (
    <>
    <h1>Todo List in Crud</h1>
    <Link to="/add"  >
   <button className='btn btn-primary'>Add Data</button>
    </Link>
    {/*className='d-flex justify-content-between m-2' */}
 
   <table className="table">
  <thead>

    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((obj,index)=>(
    <tr>
      <th scope="row" key={obj.id}>{++ index}</th>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      <td>{obj.gender}</td>
      <td>{obj.address}</td>
      <td>
        <Link to="/edit">
      <button type="button" class="btn btn-success" onClick={()=>setToLocalStorage( obj.id, obj.name, obj.email,obj.gender,obj.address
        )}>Edit</button>
      </Link>
      <Link type="button" class="btn btn-danger" onClick={()=>{ handleDelete(obj.id)}} >Delete</Link>
      </td>
      
    </tr>
     ))}
   
      
    
  </tbody>
</table>

    </>
  )
}

export default List