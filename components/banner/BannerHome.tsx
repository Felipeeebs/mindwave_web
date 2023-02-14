import TextEffect from "@components/elements/TextEffect"

const BannerHome = () => {

    return (
        <section className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/placeholders/img-15.jpg')" }}>
            <div className="container">
                <div className="py-12 text-center">
                    <div className="max-w-2xl mx-auto mb-8">
                        <h2 className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                            Comprometidos con las Personas <br />
                            Comprometidos <span className="text-blue-500">con el Futuro</span>
                        </h2>
                        <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                            Nosotros somos <strong className="text-blue-500">Mindwave</strong>, un diseño creativo{" "}
                            <div className="typewrite d-inline text-brand">
                                <TextEffect text1="Agencia web" text2="Marketing Digital" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn" href="#key-features">
                            Características clave
                        </a>
                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeIn" data-wow-delay=".3s" href="#how-we-work">
                            ¿Cómo trabajamos?
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-12 pb-4">
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                        <img className="mx-auto" src="/assets/imgs/logos/brands/brand-1.png" alt="Mindwave" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Mindwave" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <img className="mx-auto" src="/assets/imgs/logos/brands/brand-3.png" alt="Mindwave" />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                        <img className="mx-auto" src="/assets/imgs/logos/brands/brand-4.png" alt="Mindwave" />
                    </div>
                    <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                        <img className="mx-auto" src="/assets/imgs/logos/brands/brand-5.png" alt="Mindwave" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerHome;