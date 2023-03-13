import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/" legacyBehavior>
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-full w-full" src="/assets/imgs/logos/logoMindwave_transparent.png" alt="Mindwave" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:text-lg text-blueGray-400 leading-relaxed">
                                Ofrecemos productos y servicios de asesoría en TI para ayudar a <strong>maximizar</strong> la eficiencia de su empresa en la era digital.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <Link href="/services">
                                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Servicios</p>
                            </Link>   
                            <Link href="/services/servicios-ti">
                                <p className="lg:text-lg text-blueGray-400 hover:text-gray-500">Servicios TI</p>
                            </Link>
                            <Link href="/services/consultoria-informatica">
                                <p className="lg:text-lg text-blueGray-400">Consultoria Informatica</p>
                            </Link>
                            <Link href="/services/excelencia-operacional">
                                <p className="lg:text-lg text-blueGray-400">Excelencia Operacional</p>
                            </Link>
                            <Link href="/services/generacion-de-contenido">
                                <p className="lg:text-lg text-blueGray-400">Generación de contenido</p>
                            </Link>
                            <Link href="/services/seo">
                                <p className="lg:text-lg text-blueGray-400">SEO</p>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <Link href="/blog">
                                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Blog</p>
                            </Link>  
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <Link href="/contact">
                                <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacto</p>
                            </Link>
                            <p className="lg:text-lg text-blueGray-400">contacto@mindwave.cl</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; 2023. Reservados todos los derechos. Diseñada por{" "}
                            <span className="text-blue-400">
                                Team Mindwave
                            </span>
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com">
                                <img width={22} height={22} src="/assets/imgs/icons/facebook-blue.svg" alt="Mindwave" />
                            </a>
                            <a className="inline-block px-2" href="https://twitter.com">
                                <img width={22} height={22} src="/assets/imgs/icons/twitter-blue.svg" alt="Mindwave" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com">
                                <img width={22} height={22} src="/assets/imgs/icons/instagram-blue.svg" alt="Mindwave" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
