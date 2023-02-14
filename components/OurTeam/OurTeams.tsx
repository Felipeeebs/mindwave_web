const OurTeams = () => {

    return (
        <section className="py-20">
            <div className="container text-center">
                <div className="max-w-lg mx-auto mb-16">
                    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl"> Sobre nuestro experto</span>
                    <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                        Confíe su proyecto a nuestro <span className="text-blue-500"> Especialistas </span>
                    </h2>
                    <p className="text-blueGray-400 leading-loose">Nuestros servicios de TI reúnen a expertos en negocios y tecnología para ayudar a administrar las categorías comerciales.</p>
                </div>
                <div className="flex flex-wrap -mx-5">
                    <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                        <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                            <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Mindwave" />
                            <strong className="mt-6 mb-2 text-md">Felipe Benitez Sura</strong>
                            <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                        <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                            <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Mindwave" />
                            <strong className="mt-6 mb-2 text-md">Mario Guitierrez</strong>
                            <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                        <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                            <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Mindwave" />
                            <strong className="mt-6 mb-2 text-md">Jorge Moya</strong>
                            <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default OurTeams;