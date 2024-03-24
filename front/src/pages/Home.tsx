import CardProduct from "../components/CardProduct"
import InputPassword from "../components/forms/InputPassword"
import InputText from "../components/forms/InputText"
import ProductsTable from "../components/tabels/ProductsTable"
import UsersTable from "../components/tabels/UsersTable"
import NabBar from "../layouts/NavBar"


function Home() {

    return(
        <>
            <div className="container w-auto">
                {/* <div className="flex flex-col gap-6 w-72">
                    <InputText/>
                    <InputPassword/>
                </div>
                <UsersTable users={[
                    { id: 1, name: "Usuario 1", email: "usuario1@example.com", rol: "Admin", status: true },
                    { id: 2, name: "Usuario 2", email: "usuario2@example.com", rol: "Guest", status: false },
                    { id: 3, name: "Usuario 3", email: "usuario3@example.com", rol: "Coordinator", status: true },
                    { id: 4, name: "Usuario 4", email: "usuario4@example.com", rol: "Admin", status: false },
                    { id: 5, name: "Usuario 5", email: "usuario5@example.com", rol: "Guest", status: true },
                    { id: 6, name: "Usuario 6", email: "usuario6@example.com", rol: "Coordinator", status: false },
                    { id: 7, name: "Usuario 7", email: "usuario7@example.com", rol: "Admin", status: true },
                    { id: 8, name: "Usuario 8", email: "usuario8@example.com", rol: "Guest", status: false },
                    { id: 9, name: "Usuario 9", email: "usuario9@example.com", rol: "Coordinator", status: true },
                    { id: 10, name: "Usuario 10", email: "usuario10@example.com", rol: "Admin", status: false },
                ]}/> */}
                {/* <ProductsTable products={ [
                    { id: 1, name: "Producto 1", price: "$10.00", imgURL: "https://example.com/product1.jpg", status: true },
                    { id: 2, name: "Producto 2", price: "$15.00", imgURL: "https://example.com/product2.jpg", status: true },
                    { id: 3, name: "Producto 3", price: "$20.00", imgURL: "https://example.com/product3.jpg", status: true },
                    { id: 4, name: "Producto 4", price: "$25.00", imgURL: "https://example.com/product4.jpg", status: true },
                    { id: 5, name: "Producto 5", price: "$30.00", imgURL: "https://example.com/product5.jpg", status: true },
                    { id: 6, name: "Producto 6", price: "$35.00", imgURL: "https://example.com/product6.jpg", status: true },
                    { id: 7, name: "Producto 7", price: "$40.00", imgURL: "https://example.com/product7.jpg", status: true },
                    { id: 8, name: "Producto 8", price: "$45.00", imgURL: "https://example.com/product8.jpg", status: true },
                    { id: 9, name: "Producto 9", price: "$50.00", imgURL: "https://example.com/product9.jpg", status: true },
                    { id: 10, name: "Producto 10", price: "$55.00", imgURL: "https://example.com/product10.jpg", status: false }
                ]}/> */}
            </div>
            
            <NabBar/>
        </>
    )
}

export default Home