import React, {useState, useContext, createContext, Children, FormEvent } from 'react'
import {User, UserRequest } from '../models/UserModel'

// interface talar om hur något ser ut
interface IUserProviderProps {
    children: any
}

export interface IUserContext {
    user: User,
    userRequest: UserRequest,
    setUser: React.Dispatch<React.SetStateAction<User>>
    setUserRequest: React.Dispatch<React.SetStateAction<UserRequest>>
    users: User[],
    create: (e: React.FormEvent) => void,
    get: (id:number) => void,
    getAll: () => void,
    update: (e: React.FormEvent) => void,
    remove: (id: number) => void
}

export const  UserContext = createContext<IUserContext | null >(null)
export const useUserContext = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}: IUserProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/users'

    const defaultValues: User = {id :0, firstName: '', lastName: '', email: ''}
    const defaultValues_request: UserRequest = {firstName: '', lastName: '', email: '', password: ''}

    const [user, setUser] = useState<User>(defaultValues)
    const [userRequest, setUserRequest] = useState<UserRequest>(defaultValues_request)
    const [users, setUsers] = useState<User[]>([])
  
    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch (`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userRequest)
        })

        if (result.status=== 201) {
            setUserRequest(defaultValues_request)
        } else {
            console.log('error')
        }
    }
    const get = async (id : number) => {

        const result = await fetch (`${baseUrl}/${id}`, {})
           
        if (result.status=== 201) {
                setUser(await result.json())
            }

    }

    const getAll = async () => {
        const result = await fetch (`${baseUrl}`, {})
           
        if (result.status=== 200) {
                setUsers(await result.json())
            }

    }
    
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch (`${baseUrl}/${user.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })

        if (result.status=== 200) {
           setUser(await result.json())
        }
    }

    const remove = async (id: number) => {
        const result = await fetch (`${baseUrl}/${id}`, {
            method: 'delete'
        })

        if (result.status=== 204) {
           setUser(defaultValues)
        }
    }

  
  
    return (
    <div>
        {/* value säger vad som ska vara tillgängligt för children */}
        <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserProvider