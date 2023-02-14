const ContainerPricing = () => {


    return (
        <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                        <span>Comience a ahorrar tiempo hoy y </span>
                        <span className="text-blue-500">elige </span>
                        <span>tu mejor plan</span>
                    </h2>
                    <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                    Lo mejor para desarrolladores independientes que necesitan ahorrar tiempo
                    </p>
                </div>
                <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Mindwave" />
                            <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
                            <span className="text-4xl text-blue-500 font-bold font-heading">$45.99</span>
                            <p className="mt-2 mb-8 text-blueGray-400">usuario por mes</p>
                            <div className="flex flex-col items-center mb-8">
                                <ul className="text-blueGray-400">
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>3 Emails</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>1 Datebases</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Unlimited Domains</span>
                                    </li>
                                    <li className="flex">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>10 GB Storage</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" href="#">
                                    Empiza la prueba gratuita
                                </a>
                                <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                    Compra
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                        <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Mindwave" />
                            <h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>
                            <span className="text-4xl font-bold font-heading">$65.99</span>
                            <p className="mt-2 mb-8">usuario por mes</p>
                            <div className="flex flex-col items-center mb-8">
                                <ul>
                                    <li className="flex items-center mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>6 Emails</span>
                                    </li>
                                    <li className="flex items-center mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>4 Datebases</span>
                                    </li>
                                    <li className="flex items-center mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Unlimited Domains</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>35 GB Storage</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">
                                    Empiza la prueba gratuita
                                </a>
                                <a className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border border-blue-400 hover:border-blue-400 rounded" href="#">
                                    Compra
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                            <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Mindwave" />
                            <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                            <span className="text-4xl text-blue-500 font-bold font-heading">$85.99</span>
                            <p className="mt-2 mb-8 text-blueGray-400">usuario por mes</p>
                            <div className="flex flex-col items-center mb-8">
                                <ul className="text-blueGray-400">
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>12 Emails</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>8 Datebases</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>Unlimited Domains</span>
                                    </li>
                                    <li className="flex">
                                        <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>50 GB Storage</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" href="#">
                                    Empiza la prueba gratuita
                                </a>
                                <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                    Compra
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContainerPricing;