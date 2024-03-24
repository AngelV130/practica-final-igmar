

function CardProduct(){

    return(
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
            dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" 
                    alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-5">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                    <div className="flex items-center justify-between mt-5">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProduct