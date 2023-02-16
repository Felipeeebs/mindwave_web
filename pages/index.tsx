import React from 'react';
import Layout from '@components/layout/Layout';

import BannerHome from '@components/banner/BannerHome';
import ContainerPricing from '@components/pricing/ContainerPricing';
import HowWork from '@components/howWork/HowWork';
import Consultant from '@components/Services/Consultant';
import WhyChooseHome from '@components/WhyChoose/WhyChooseHome';
import FormContact from '@components/Contact/FormContact';

const Index4 = () => {
    return (
        <>
            <Layout>
                <BannerHome />
                <Consultant />
                <FormContact />
            </Layout>
        </>
    );
};

export default Index4;