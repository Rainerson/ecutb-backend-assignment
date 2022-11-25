// olika models för olika requests

// hämtar användare
export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}

// skapar användare
export interface UserRequest {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}