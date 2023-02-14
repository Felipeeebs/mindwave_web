const HowWork = () => {

    return (
        <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }} id="how-we-work">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                    <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                            <span>Somos un</span>
                            <span className="text-blue-500"> equipo increíble</span>
                            <br />
                            <span>para tu sueño de negocio</span>
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                    <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <div className="p-12 bg-white shadow rounded">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                            <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/eating.svg" alt="Mindwave" />
                            <h3 className="mb-2 font-bold font-heading text-xl">Inicialización del proyecto</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">La Inicialización del proyecto garantiza una base sólida para un nuevo proyecto en su empresa acompañado de nuestro equipo.</p>
                        </div>
                    </div>
                    <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                        <div className="p-12 bg-white shadow rounded">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                            <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/space.svg" alt="Mindwave" />
                            <h3 className="mb-2 font-bold font-heading text-xl">Planificación de proyectos</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">Un plan de proyecto es esencial para mantener todo lo relacionado con el proyecto organizado, metódico y encaminado.</p>
                        </div>
                    </div>
                    <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                        <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                            <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/tasks.svg" alt="Mindwave" />
                            <h3 className="mb-2 font-bold font-heading text-xl">Organización del proyecto</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">En el futuro, podrá mantenerse a sí mismo y a su equipo encaminados y abordar los desafíos con anticipación.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWork;