import CounterUp from "@components/elements/Counterup"
import TextEffect from "@components/elements/TextEffect"
import Layout from "@components/layout/Layout"
import Slider1 from "@components/slider/Slider1"

function Home() {
    return (
        <>
            <section className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                <div className="container px-4 mx-auto">
                    <div className="pt-12 text-center">
                        <div className="max-w-2xl mx-auto mb-8">
                            <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                Committed to People <br />
                                Committed <span className="text-blue-500">to the Future</span>
                            </h2>
                            <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline">
                                We are <strong className="text-blue-500">Mindwave</strong>, a Creative Design{" "}
                                <div className="typewrite d-inline text-brand">
                                    <TextEffect text1="Web Agency" text2="Social Marketing" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <a className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2" href="#key-features">
                                Key Features
                            </a>
                            <a className="btn-white wow animate__animated animate__fadeIn hover-up-2" data-wow-delay=".3s" href="#how-we-work">
                                How We Work?
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                    <img src="/assets/imgs/elements/pattern.png" alt="Mindwave" />
                    <div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
                        <img className="jump rounded wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/dashboard.png" alt="Mindwave" />
                    </div>
                </div>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap justify-between pt-8 pb-16">
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">
                                    <CounterUp count={950} time={3} />
                                </span>
                                <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">
                                    <CounterUp count={58} time={3} />
                                </span>
                                <span className="sm:text-2xl font-bold font-heading"> k </span>
                                <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">
                                    <CounterUp count={500} time={3} />
                                </span>
                                <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                            </div>
                        </div>
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">
                                    <CounterUp count={300} time={3} />
                                </span>
                                <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            <section className="py-20 bg-blueGray-50" id="how-we-work">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                <span>We are</span>
                                <span className="text-blue-500"> awesome team</span>
                                <br />
                                <span>for your business dream</span>
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
                                <h3 className="mb-2 font-bold font-heading text-xl">Project Initialization</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">Project initiation ensures that you lay a strong foundation for a new project in your company our team.</p>
                            </div>
                        </div>
                        <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                            <div className="p-12 bg-white shadow rounded">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/space.svg" alt="Mindwave" />
                                <h3 className="mb-2 font-bold font-heading text-xl">Project planning</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">A project plan is essential to keep everything related to the project organized, methodical, and on track.</p>
                            </div>
                        </div>
                        <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                            <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                <img className="h-36 mx-auto my-4" src="/assets/imgs/illustrations/tasks.svg" alt="Mindwave" />
                                <h3 className="mb-2 font-bold font-heading text-xl">Project organization</h3>
                                <p className="text-sm text-blueGray-400 leading-relaxed">Moving forward you will be able to keep yourself and your team on track, and address challenges early.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-3">
                        <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                            <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    Simple Solution for <span className="text-blue-500">Complex</span> Connections
                                </h2>
                                <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/3 flex flex-wrap">
                            <div className="relative w-full">
                                <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                    <Slider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <span>Start saving time today and</span>
                            <span className="text-blue-500"> choose </span>
                            <span>your best plan</span>
                        </h2>
                        <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                            Best for freelance developers who need to save their time
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Mindwave" />
                                <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
                                <span className="text-4xl text-blue-500 font-bold font-heading">$45.99</span>
                                <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
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
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                        Start Free Trial
                                    </a>
                                    <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                            <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Mindwave" />
                                <h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>
                                <span className="text-4xl font-bold font-heading">$65.99</span>
                                <p className="mt-2 mb-8">user per month</p>
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
                                        Start Free Trial
                                    </a>
                                    <a className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-400 hover:border-blue-400 rounded" href="#">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-3 mb-6">
                            <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Mindwave" />
                                <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                                <span className="text-4xl text-blue-500 font-bold font-heading">$85.99</span>
                                <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
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
                                    <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                        Start Free Trial
                                    </a>
                                    <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                        Purchase
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                <div className="container px-4 mx-auto">
                    <div className="relative py-20 px-4 lg:p-20">
                        <div className="max-w-lg mx-auto text-center">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                <span>Subscribe now to</span>
                                <span className="text-blue-500"> Our Newsletter </span>
                                <span>and get the Coupon code.</span>
                            </h2>
                            <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                All your information is completely confidential
                            </p>
                            <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                    <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Home.Layout = Layout;

export default Home