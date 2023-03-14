import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
                <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                    <div className="flex items-center mb-8">
                        <Link href="#" legacyBehavior>
                            <a className="mr-auto text-2xl mx-auto font-semibold leading-none">
                                <img className="h-16" src="/assets/imgs/logos/logoMindwave.jpg" alt="Mindwave" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={handleRemove}>
                            <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="mobile-menu">
                            <li className={"mb-1 rounded-xl"} onClick={handleRemove}>
                                <Link href="/" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl">Home</a>
                                </Link>
                            </li>
                            <li className="mb-1" onClick={handleRemove}>
                                <Link href="/services" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Servicios</a>
                                </Link>
                            </li>
                            <li className={"mb-1"} onClick={handleRemove}>
                                <Link href="/blog" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Blog</a>
                                </Link>
                            </li>
                            <li className="mb-1" onClick={handleRemove}>
                                <Link href="/contact" legacyBehavior>
                                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Contacto</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span className="">contacto@mindwave.cl</span>
                        </p>
                        <a className="inline-block px-1" href="https://facebook.com">
                            <img src="/assets/imgs/icons/facebook-blue.svg" alt="Mindwave" />
                        </a>
                        <a className="inline-block px-1" href="https://twitter.com">
                            <img src="/assets/imgs/icons/twitter-blue.svg" alt="Mindwave" />
                        </a>
                        <a className="inline-block px-1" href="https://www.instagram.com">
                            <img src="/assets/imgs/icons/instagram-blue.svg" alt="Mindwave" />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
