import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {IUserContext, UserContext} from '../contexts/UserContext'

const UpdateForm = () => {

   const id = useParams()
    const {user, setUser, get, update} = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        get(Number(id))
    }, [get, id])
    
  return (
    <form onSubmit={update} className='d-grid mb-5'>
        <h3 className='display-6 mb-4'>Update User</h3>
        <input type='hidden' value={user.id}></input>
        <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type='text' className='form-control py-2 mb-3' placeholder='firstName'></input>
        <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='lastName'></input>
        <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='email'></input>
        
        <button type='submit' className='btn btn-success py-2 mt-3'>Create User</button>
    </form>
  )
}

export default UpdateForm