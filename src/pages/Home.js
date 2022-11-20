import React, { isValidElement, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import Pagination from './Components/Pagination';


const PAGE_LIMIT = 3

export default function Home() {
  
    const[users, setUsers]=useState([]);

    const [search, setSearch] = useState('');

    const [loading, setLoading] = useState(true)
    

    const [page, setPage] = useState(1)
    const filteredUsers = useMemo(() => users.filter((user) => {
      return search.toLowerCase() === '' ? user : user.name.
      toLowerCase().includes(search)
    }), [search, users])
    const maxPage = useMemo(() => {
      const newValue = Math.ceil(filteredUsers.length / PAGE_LIMIT)

      if (newValue) {
        setPage(page => page > newValue ? newValue : page)
      }

      return newValue
    }, [filteredUsers])
    const displayedUsers = useMemo(() => filteredUsers.slice((page - 1) * PAGE_LIMIT, page * PAGE_LIMIT), [filteredUsers, page])
    
    // const toastTrigger = document.getElementById('liveToastBtn')
    // if (toastTrigger) {
    //   toastTrigger.addEventListener('click', () => {
    //     const toast = new bootstrap.Toast(toastLiveExample)
    
    //     toast.show()
    //   })
    // }
    
    const toastLiveExample = document.getElementById('liveToast')
    const onViewClick = () => {
      const toast = new bootstrap.Toast(toastLiveExample)
    
      toast.show()
    }
    
    const {id}=useParams()
    
    useEffect(()=>{
      loadUsers();  
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
        setLoading(false)
    };

    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers();
    };


    

    

    return (
    <div className='container'>
      <div>
      <p>
      <form class="d-flex" role="search">
        <input class="form-control me-2" 
              type="search" 
              placeholder="Search" 
              onChange={e => {
                setSearch(e.target.value);
              }} 
              aria-label="Search"/>
        
      </form>
      </p>
      </div>
        <div className='py-4'>

        { !loading && <div style={{ display: 'flex', fontWeight: 700, width: '100%', justifyContent: 'space-between', marginBottom: '10px' }}>
  <div>Page {page}</div>
  <div style={{ display: 'flex', gap: '5px' }}>{new Array(maxPage).fill(0).map((_, i) => <div key={i} onClick={() => setPage(i+1)}>{i+1}</div>)}</div>
</div>}

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">E-Mail</th>
      <th scope="col">Comment</th>
      <th scope="col">Sex</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        displayedUsers.map((user, index)=>(
            <tr>
            <th scope="row" key={index}>{(page - 1) * PAGE_LIMIT + index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.comment}</td>
            <td>{user.sex}</td>
            <td>
            {/* id="liveToastBtn" */}
                <button className='btn btn-primary mx-2' onClick={onViewClick}>View</button>

                <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="false">
              <div class="toast-header">
                
                <strong class="me-auto">UWAGA!</strong>
                <small></small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div class="toast-body">
                Brak uprawenień
              </div>
            </div>
          </div>




                <Link className='btn btn-outline-primary mx-2'
                
                to={`edituser/${user.id}`}

                >Edit</Link>
                <button 
                    type="button" 
                    className='btn btn-danger mx-2' 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal">          
                Delete
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Delete ?</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Czy na pewno chcesz usunąć użytkowniak
                </div>
              <div id="liveAlertPlaceholder" class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-success" onClick={()=>deleteUser(user.id)} id="liveToastBtn" data-bs-dismiss="modal">Yes</button>
              

              


            </div>

            
            
            </div>
            
            </div>
            
            </div>
            
                
            </td>
          </tr>
        ))
    }
   

  </tbody>
</table> 
        </div>
    </div>
  )
}
