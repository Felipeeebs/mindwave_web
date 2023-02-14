const Suscribe = () => {

    return (
        <section className="py-20 bg-blue-500">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                        <span>Suscríbete ahora a </span>
                        <span className="text-blue-200">Nuestro boletín</span> <br />
                        <span>y obtener el código de cupón.</span>
                    </h2>
                    <p className="mb-8 text-blueGray-200">Toda su información es completamente confidencial.</p>
                    <div className="flex flex-wrap max-w-lg mx-auto">
                        <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                            <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Escriba su correo electrónico" />
                        </div>
                        <button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">
                            Inscribirse
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Suscribe;