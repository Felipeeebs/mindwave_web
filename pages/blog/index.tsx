import React from 'react';
import Layout from '@components/layout/Layout';
import Link from "next/link"
import BannerOurBlog from '@components/banner/BannerOurBlog';
import { postBlog } from '@utils/postList';

const Blog = () => {
    return (
        <>
        <section className="py-20">
            <div className="container">
                <BannerOurBlog />
                {postBlog.map((post) => {
                    return (
                        <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
                            <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                                <Link href={`/blog/${post.id}`} legacyBehavior>
                                    <a>
                                        <span className="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600">Desarollo TI</span>
                                    </a>
                                </Link>
                                <h3 className="my-4 text-xl md:text-2xl font-bold font-heading">
                                    <Link href={`/blog/${post.id}`} legacyBehavior>
                                        <a className="hover:text-blue-500">{post.seo.title}</a>
                                    </Link>
                                </h3>
                                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">{post.seo.description}</p>
                                <Link href={`/blog/${post.id}`} legacyBehavior>
                                    <a className="text-xs font-semibold text-blue-600">
                                        <span>Leer Más</span>
                                        <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                                <Link href={`/blog/${post.id}`} legacyBehavior>
                                    <a>
                                        <img className="h-80 w-full object-cover rounded" src="/assets/imgs/placeholders/img-6.png" alt="Mindwave" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
                
               {/* <div className="text-center">
                    <Link href="/blog" legacyBehavior>
                        <a 
                        className="hover-up-5 inline-block py-4 
                        px-8 text-xs text-white font-semibold 
                        leading-none bg-blue-400 hover:bg-blue-500 
                        rounded">
                        Ver tod
                        </a>
                    </Link>
            </div>*/}
            </div>
        </section>
        </>
    );
};

Blog.Layout = Layout;

export default Blog;