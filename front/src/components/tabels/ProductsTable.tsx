import Edit from "../../assets/icons/Edit"


function UsersTable({products}:{products:Product[]}) {
    return(
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-hidden rounded-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            products.map((product)=>(
                                <tr key={product.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <div className="select-none bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center">
                                            {
                                                product.name.split("")[0]
                                            }
                                        </div>
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{product.name}</div>
                                        </div>  
                                    </th>
                                    <td className="px-6 py-4">
                                       {product.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {
                                                product.status ?
                                                <>
                                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Activo
                                                </>
                                                :
                                                <>
                                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Incactivo
                                                </>
                                            }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><Edit/></a>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </>
    )
}

export default UsersTable