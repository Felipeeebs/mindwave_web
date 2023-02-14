import React from 'react';
import Layout from '@components/layout/Layout';
import BannerContact from '@components/banner/BannerContact';
import Statistics from '@components/Statistics/Statistics';
import ContainerPricing from '@components/pricing/ContainerPricing';
import FormContact from '@components/Contact/FormContact';
import Suscribe from '@components/Suscribe/Suscribe';

const Pricing = () => {
    return (
        <>
            <BannerContact />
            <Statistics />
            <ContainerPricing />
            <section className="py-20">
                <div className="container">
                    <div className="max-w-lg mb-16">
                        <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                            <span>Start saving time today and </span>
                            <span className="text-blue-500">choose </span>
                            <span>your best plan</span>
                        </h2>
                        <p className="text-base lg:text-lg text-blueGray-400 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                            Best for freelance developers who need to save time
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded shadow">
                        <div className="border-b border-gray-200">
                            <div className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                    <h3 class="text-md font-bold font-heading">Beginner</h3>
                                </div>
                                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                    <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">12 Emails</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">8 Datebase</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">Unlimited Domains</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">50 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                    <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                        Buy 25$
                                    </a>
                                    <p className="text-center text-blueGray-400">per month</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-200">
                            <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                    <h3 class="text-md font-bold font-heading">Intermediate</h3>
                                </div>
                                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                    <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">12 Emails</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">8 Datebase</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">Unlimited Domains</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">50 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                    <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                        Buy 25$
                                    </a>
                                    <p className="text-center text-blueGray-400">per month</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-200">
                            <div className="flex flex-wrap justify-between p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".5s">
                                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                    <h3 class="text-md font-bold font-heading">Advanced</h3>
                                </div>
                                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                    <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">12 Emails</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">8 Datebase</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">Unlimited Domains</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">50 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                    <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                        Buy 65$
                                    </a>
                                    <p className="text-center text-blueGray-400">per month</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-wrap p-6 -mx-3 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".7s">
                                <div className="w-full lg:w-1/6 text-center lg:text-left text-lg lg:text-base font-semibold lg:font-normal mb-2 lg:mb-0 px-3">
                                    <h3 class="text-md font-bold font-heading">Professional</h3>
                                </div>
                                <div className="w-full lg:w-4/6 mb-6 lg:mb-0 px-3">
                                    <p className="mb-4 lg:mb-6 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel orci gravida, hendrerit enim non, gravida turpis.</p>
                                    <ul className="flex flex-col lg:flex-row justify-start space-y-2 lg:space-y-0 lg:space-x-8">
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">12 Emails</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">8 Datebase</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">Unlimited Domains</span>
                                        </li>
                                        <li className="flex">
                                            <svg className="h-6 w-6 mr-2 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span className="text-blueGray-400">50 GB Storage</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/6 self-center text-xs px-3">
                                    <a className="block mb-2 py-4 text-center hover:text-white font-semibold bg-blueGray-200 hover:bg-blue-500 rounded" href="#">
                                        Buy 25$
                                    </a>
                                    <p className="text-center text-blueGray-400">per month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FormContact />
            <Suscribe />
        </>
    );
};

Pricing.Layout = Layout;

export default Pricing;