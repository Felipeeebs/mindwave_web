import Link from "next/link";

const BannerAbout = () => {

    return (
        <section className="relative -mt-24 pt-24">
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
            <div className="container">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                        <div className="py-12">
                            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                    Comprometidos con <span className="text-blue-500">las Personas</span> y el futuro
                                </h2>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                    Somos <strong className="text-blue-500">Mindwave</strong>, un Diseño Creativo <span className="typewrite d-inline text-brand" data-period="3000" data-type='["Agencia Web", "Marketing Digital" ]'></span>
                                </p>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">Le ayudamos a maximizar la gestión de operaciones con la digitalización</p>
                            </div>
                            <div className="text-center lg:text-left">
                                <Link href="/services" legacyBehavior>
                                    <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">Nuestros servicios</a>
                                </Link>
                                <Link href="#how-we-work" legacyBehavior>
                                    <a className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        ¿Cómo trabajamos?
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                        <div className="flex items-center justify-center">
                            <img className="lg:max-w-lg" src="/assets/imgs/illustrations/team.svg" alt="Mindwave" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BannerAbout;