import React from 'react';
import Layout from '@components/layout/Layout';
import BannerAbout from '@components/banner/BannerAbout';
import OurTeams from '@components/OurTeam/OurTeams';
import Statistics from '@components/Statistics/Statistics';
import HowWork from '@components/howWork/HowWork';
import FormContact from '@components/Contact/FormContact';
import Suscribe from '@components/Suscribe/Suscribe';

const About = () => {
    return (
        <>
            <BannerAbout />
            <Statistics />
            <HowWork />
            <OurTeams />
            <FormContact />
            <Suscribe />
        </>
    );
};

About.Layout = Layout;

export default About;