import React from 'react';
import Layout from '@components/layout/Layout';
import Link from "next/link";
import BannerPortfolio from '@components/banner/BannerPortfolio';
import ContainerPricing from '@components/pricing/ContainerPricing';
import FormContact from '@components/Contact/FormContact';

const Portfolio = () => {
    return (
        <>
            
        <BannerPortfolio />
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            Nuestros Proyectos
                        </span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            Verifica <br />
                            Nuestros <span className="text-blue-500">Ultimos</span> Proyectos
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6 lg:mb-0">
                        <div className="w-full lg:w-1/2 flex flex-wrap px-3 mb-6 lg:md-0">
                            <div className="hover-up-5 w-1/2 h-64 pr-3 pb-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-10.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pl-3 pb-3 wow animate__animated animate__fadeInanimated" data-wow-delay=".2s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-11.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pr-3 pt-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-12.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pl-3 pt-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-13.jpg" alt="Mindwave" />
                            </div>
                        </div>
                        <div className="hover-up-5 w-full lg:w-1/2 px-3 relative wow animate__animated animate__fadeIn animated" data-wow-delay=".6s">
                            <img className="lg:h-128 w-full object-cover rounded" src="/assets/imgs/placeholders/img-9.jpg" alt="Mindwave" />
                            <div className="absolute text-center bg-white rounded card-label-center px-4 py-12">
                                <div className="w-full flex place-content-center">
                                    <p className="capitalize font-bold text-2xl text-center">Web Design</p>
                                </div>
                                <div className="w-full flex place-content-cente">
                                    <p className="font-sans text-center ext-white mt-5 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem fugiat deserunt molestias.</p>
                                </div>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded">View details</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="hover-up-5 w-full lg:w-1/2 px-3 order-last lg:order-first mt-6 lg:mt-0 relative wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="h-128 w-full object-cover rounded" src="/assets/imgs/placeholders/img-9.jpg" alt="Mindwave" />
                            <div className="absolute text-center bg-white rounded card-label-center px-4 py-12">
                                <div className="w-full flex place-content-center">
                                    <p className="capitalize font-bold text-2xl text-center">CMS Development</p>
                                </div>
                                <div className="w-full flex place-content-cente">
                                    <p className="font-sans text-center ext-white mt-5 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem fugiat deserunt molestias.</p>
                                </div>
                                <Link href="/blog-single" legacyBehavior>
                                    <a className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded">View details</a>
                                </Link>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-wrap px-3">
                            <div className="hover-up-5 w-1/2 h-64 pr-3 pb-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".2s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-10.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pl-3 pb-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-11.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pr-3 pt-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-12.jpg" alt="Mindwave" />
                            </div>
                            <div className="hover-up-5 w-1/2 h-64 pl-3 pt-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                <img className="h-full object-cover rounded" src="/assets/imgs/placeholders/img-13.jpg" alt="Mindwave" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContainerPricing />

            <FormContact />
        </>
    );
};

Portfolio.Layout = Layout;

export default Portfolio;