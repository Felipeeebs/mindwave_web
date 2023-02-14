const OurTeamsAwesome = () => {

    return (
        <section className="pt-20">
            <div className="container text-center">
                <div className="max-w-lg mx-auto mb-12">
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team</span>
                    <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                        Nuestro impresionante <br />
                        <span className="text-blue-500">Equipo Creativo</span>
                    </h2>
                    <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>
                <div className="flex flex-wrap -mx-3">
  

                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                        <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Mindwave" />
                        <p className="mt-6"><strong className="text-md">Felipe Benitez Sura</strong></p>
                        <p className="text-gray-500 text-xs mb-4">CEO-Founder</p>
                        <div className="flex py-1 justify-center space-x-2">
                            <img src="/assets/imgs/icons/facebook.svg" alt="Mindwave" />
                            <img src="/assets/imgs/icons/twitter.svg" alt="Mindwave" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                        <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Mindwave" />
                        <p className="mt-6"><strong className="text-md">Mario Gutierrez</strong></p>
                        <p className="text-gray-500 text-xs mb-4">Project-Manager</p>
                        <div className="flex py-1 justify-center space-x-2">
                            <img src="/assets/imgs/icons/facebook.svg" alt="Mindwave" />
                            <img src="/assets/imgs/icons/twitter.svg" alt="Mindwave" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                        <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Mindwave" />
                        <p className="mt-6"><strong className="text-md">Jorge Moya</strong></p>
                        <p className="text-gray-500 text-xs mb-4">Direct-Founder</p>
                        <div className="flex py-1 justify-center space-x-2">
                            <img src="/assets/imgs/icons/facebook.svg" alt="Mindwave" />
                            <img src="/assets/imgs/icons/twitter.svg" alt="Mindwave" />
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
    )

}

export default OurTeamsAwesome;