import axios from 'axios';
import 'bootstrap/dist/js/bootstrap'
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap';

export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()
  
    const [user,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        comment:"",
        sex:"",
       
    });

    const{ name, username, email, comment, sex}=user;
    
    const onInputChange = (e) => {
        setUsers({...user,[e.target.name]:e.target.value});

    };

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/list");


    };

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data);
    };




    const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

    return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Edit User</h2>
                <form onSubmit={(e)=> onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='forma-label'>
                        Name
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your name'
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Username' className='forma-label'>
                        UserName
                    </label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder='Enter your username'
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
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
                    />
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
                    />
                </div>
                <div className='mb-3'>
                <label htmlFor='Plec' className='forma-label'>
                Płeć
                    </label> 
                <select class="form-select" aria-label="Default select example" name="sex" onChange={(e)=>onInputChange(e)}>
                <option selected>Wybierz płeć</option>
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
                value={"Woman"}
                onChange={(e)=>onInputChange(e)}
                >Woman</option>
                </select>

                </div> 
                <button type='submit' className='btn btn-outline-primary' id="liveToastBtn">Submit</button>
                <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>


                <Link className='btn btn-outline-danger mx-2' to="/list">Cancel</Link>   
                
                
                </form>
                </div> 
                                  
                
            </div>
        </div>
    
  )
}
