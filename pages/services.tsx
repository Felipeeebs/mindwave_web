import React from 'react';
import Layout from '@components/layout/Layout';
import BannerServices from '@components/banner/BannerServices';
import WhyChooseServices from '@components/WhyChoose/WhyChooseServices';
import Statistics from '@components/Statistics/Statistics';
import HowWork from '@components/howWork/HowWork';
import ContainerPricing from '@components/pricing/ContainerPricing';
import FormContact from '@components/Contact/FormContact';
import Suscribe from '@components/Suscribe/Suscribe';

const Services = () => {
    return (
        <>
            <BannerServices />
            <WhyChooseServices />
            <FormContact />
        </>
    );
};

Services.Layout = Layout;

export default Services;