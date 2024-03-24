interface User{
    id: number
    name: string,
    email: string,
    rol: "Admin" | "Guest" | "Coordinator",
    status: boolean
}
interface AuthContext{
    user: User | null,
    load: boolean
    setToken: (token:string)=>void
}
interface Product{
    id: number
    name: string,
    price: string,
    imgURL: string,
    status: boolean
}