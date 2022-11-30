import axios from 'axios';
import React, {useMemo, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap';


export default function AddUser() {

    let navigate=useNavigate()
  
    const [user,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        comment:"",
        sex:"",
        errorField:[]
       
    });

    const{ name, username, email, comment, sex}=user;

    const [errors,setError]=useState(false);
    
    const onInputChange = (e) => {
        setUsers({...user,[e.target.name]:e.target.value});
        console.log(e.target.name+e.target.value);
       

    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/user", user);

            navigate("/list");

            const toastLiveExample = document.getElementById('toastUserAdded')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        } catch (error) {
           console.log(error)
         
           if(error.response.status === 409){
            const toastLiveExample = document.getElementById('toastUserNotEmail')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
         }
         else if (error.response.status === 410){
                const toastLiveExample = document.getElementById('toastNotUser')
                const toast = new bootstrap.Toast(toastLiveExample)
                toast.show()
            }
            
        }
    };
    
    const isSubmitDisabled = useMemo(() => !user.sex || !user.comment || !user.email || !user.name || !user.username, [user])

    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4' >Register User</h2>
                <form onSubmit={(e)=> onSubmit(e)} className="was-validated">
                 <div className="mb-3">
                 <label for="validationTextarea" htmlFor='Name' className="form-label">Name</label>
                 <input 
	                type={"text"}
	                className="form-control" 
	                id="validationTextarea" 
	                placeholder="Enter your name" 
	                name="name"
                    value={name}
	                onChange={(e)=>onInputChange(e)}
	                required></input>
	
                    <div className="invalid-feedback">
                    Please enter a name in the box.
                    </div>
                </div>
                <div className="mb-3">
                <label for="validationTextarea" htmlFor='Username' className="form-label">UserName</label>
                <input 
	                type={"text"}
                    className="form-control" 
                    id="validationTextarea" 
                    placeholder="Enter your username" 
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
	                required></input>
	
                <div className="invalid-feedback">
                    Please enter a username in the box.
                </div>
                </div>
                    
                   
                <div className='mb-3'>
                    <label htmlFor='E-Mail' className='forma-label'>
                        E-Mail
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your e-mail'
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='comment' className='forma-label'>
                        Comment
                    </label>
                    <textarea
                    id="exampleFormControlTextarea1" rows="3"
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your comment'
                    name="comment"
                    value={comment}
                    onChange={(e)=>onInputChange(e)}
                    required/>
                </div>
                <div className='mb-3'>
                <label htmlFor='Plec' className='forma-label'>
                        Płeć
                    </label> 
                <select className="form-select" aria-label="Default select example" name="sex" onChange={(e)=>onInputChange(e)} required>
                <option selected></option>
                <option 
                type={"text"}
                className="form-control"
                name="Facet"
                value={"Men"}
                onChange={(e)=>onInputChange(e)}
                >Men</option>
                <option 
                type={"text"}
                className="form-control"
                name="kobita"
                value={"Women"}
                onChange={(e)=>onInputChange(e)}
                >Women</option>
                </select>

                </div> 
                <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="validationFormCheck1" required/>
                <label className="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                
                </div> 
                
                <button type='submit' disabled={isSubmitDisabled} className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/list">Cancel</Link>   
                
                
                </form>
                



                </div> 
                                  
                
            </div>
        </div>
    
  )
}
