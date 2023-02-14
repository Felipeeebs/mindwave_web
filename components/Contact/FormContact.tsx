const FormContact = () => {

    return (
        <section className="py-20">
            <div className="container">
                <div className="max-w-2xl lg:max-w-3xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            ¡Ponte en contacto!
                        </h2>
                        <p className="text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            Estaremos encantados de saber de usted
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-3 text-center">
                        <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Teléfono</span>
                                <p>+ 48 654-430-309</p>
                                <p>+ 1 6532-430-309</p>
                            </div>
                        </div>
                        <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Email</span>
                                <p>contact@monst.com</p>
                                <p>pat@example.com</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <div className="leading-relaxed">
                                <span className="text-sm text-blueGray-400">Dirección</span>
                                <p>11567 E Broadview Dr</p>
                                <p>Colorado(CO), 80117</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4 text-sm wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <span className="mr-4 font-semibold">Area:</span>
                                <label className="mr-4">
                                    <input className="mr-1" type="radio" name="department" value="1" checked="" />
                                    <span>Soporte</span>
                                </label>
                                <label>
                                    <input className="mr-1" type="radio" name="department" value="2" />
                                    <span>Ventas</span>
                                </label>
                            </div>
                            <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                    <div className="mb-4">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Asunto" />
                                    </div>
                                    <div className="mb-4">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Nombre" />
                                    </div>
                                    <div className="mb-4">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                    </div>
                                    <div>
                                        <label className="flex px-2 bg-blueGray-50 rounded">
                                            <input className="hidden" type="file" name="Choose file" />
                                            <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Seleccionar Archivo</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-3">
                                    <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Mensaje..."></textarea>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <label>
                                    <input className="mr-1" type="checkbox" name="terms" value="1" />
                                    <span className="text-sm font-semibold">Acepto los términos y condiciones.</span>
                                </label>
                                <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormContact;