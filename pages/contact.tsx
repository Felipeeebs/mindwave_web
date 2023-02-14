import React from 'react';
import Layout from '@components/layout/Layout';
import BannerContact from '@components/banner/BannerContact';
import FormContact from '@components/Contact/FormContact';
import Suscribe from '@components/Suscribe/Suscribe';

const Contact = () => {
    return (
        <>
            <BannerContact />
            <FormContact />
            <Suscribe />
        </>
    );
};

Contact.Layout = Layout;

export default Contact;