import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import '../public/assets/css/tailwind-built.css'
import Preloader from '@components/elements/Preloader';
import "swiper/css";
import type { FC } from 'react';

const Noop: FC<any> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    const Layout = Component.Layout || Noop;
    return (
        <>
            {!loading ? (
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>                
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
