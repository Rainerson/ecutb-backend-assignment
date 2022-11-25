import React from 'react'
import {IUserContext, UserContext} from '../contexts/UserContext'

const CreateForm = () => {

    const {userRequest, setUserRequest, create} = React.useContext(UserContext) as IUserContext
    
  return (
    <form onSubmit={create} className='d-grid mb-5'>
        <h3 className='display-6 mb-4'>Create User</h3>
        <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type='text' className='form-control py-2 mb-3' placeholder='firstName'></input>
        <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='lastName'></input>
        <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})}type='text' className='form-control py-2 mb-3' placeholder='email'></input>
        <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})}type='password' className='form-control py-2 mb-3' placeholder='password'></input>
       
        <button type='submit' className='btn btn-success py-2 mt-3'>Create User</button>
    </form>
  )
}

export default CreateForm