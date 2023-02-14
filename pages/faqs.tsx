import React from 'react';
import Layout from '@components/layout/Layout';
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, PlusCircleIcon } from "@heroicons/react/outline";
import FormContact from '@components/Contact/FormContact';

const Faqs = () => {
    return (
        <>
            <section className="pt-12 pb-20 lg:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: 'url("assets/imgs/backgrounds/intersect.svg")' }}>
                <div className="container">
                    <img className="mx-auto sm:max-w-sm mb-10 wow animate__animated animate__fadeIn" data-wow-delay=".1s" src="assets/imgs/illustrations/eating.svg" alt="Mindwave" />
                    <form className="flex justify-center max-w-3xl mx-auto mb-16 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <input className="w-2/3 p-5 text-xs placeholder-blueGray-800 font-bold font-heading bg-white focus:border-gray-500 focus:outline-none rounded-l" placeholder="Search, find any question you want to ask..." />
                        <button className="pr-4 rounded-r bg-white text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                    <div className="flex flex-wrap justify-between -mx-3 mb-12">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                            <div className="p-6 bg-white rounded shadow">
                                <div className="text-blue-500 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h4 className="mb-3 font-bold font-heading">Internet Things</h4>
                                <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                    <li className="mb-2">Maecenas efficitur pharetra</li>
                                    <li className="mb-2">Sed lorem ante</li>
                                    <li>Ullamcorper neque</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <div className="p-6 bg-white rounded shadow">
                                <div className="text-blue-500 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="mb-3 font-bold font-heading">Artificial Intelligence</h4>
                                <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                    <li className="mb-2">Maecenas efficitur pharetra</li>
                                    <li className="mb-2">Sed lorem ante</li>
                                    <li>Ullamcorper neque</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                            <div className="p-6 bg-white rounded shadow">
                                <div className="text-blue-500 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h4 className="mb-3 font-bold font-heading">Cloud Computing</h4>
                                <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                    <li className="mb-2">Maecenas efficitur pharetra</li>
                                    <li className="mb-2">Sed lorem ante</li>
                                    <li>Ullamcorper neque</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                            <div className="p-6 bg-white rounded shadow">
                                <div className="text-blue-500 mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                    </svg>
                                </div>
                                <h4 className="mb-3 font-bold font-heading">Data Analicys</h4>
                                <ul className="list-disc list-inside text-sm text-blueGray-400">
                                    <li className="mb-2">Lorem ipsum dolor sit amet</li>
                                    <li className="mb-2">Maecenas efficitur pharetra</li>
                                    <li className="mb-2">Sed lorem ante</li>
                                    <li>Ullamcorper neque</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex-1 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <div className="px-4 mx-auto lg:ml-0">
                                <h3 className="mb-8 text-4xl font-bold font-heading wow animate__animated animate__fadeIn">Faqs</h3>
                                <div>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>Where is my order? Quisque molestie</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>                                                    
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>How can I return an item purchased online?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Since 2007 we have been a visionary and a reliable software design engineering partner for world-class brands. We are a boutique digital transformation consultancy. Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>Can I cancel or change my order?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>I have promotional or discount code?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>Can I cancel or change my order?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>What are the delivery types you use?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>How can I pay for my purchases?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Id pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    <Disclosure as="div" className="leading-loose text-lg mt-6 wow animate__animated animate__fadeIn">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="w-full font-bold border-b border-gray-200 py-3 flex justify-between items-center mt-4">
                                                    <span>Can I cancel my order?</span>
                                                    <PlusCircleIcon className={`${open ? "transform rotate-180" : ""} w-6 h-6`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-700 text-sm mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatureId pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri graeco tritani partiendo. Omittantur No tale choro fastidii his, pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent lucilius quaestio mea ex. Ex illum officiis id.</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FormContact />
        </>
    );
};

Faqs.Layout = Layout;

export default Faqs;