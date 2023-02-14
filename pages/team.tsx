import React from 'react';
import Layout from '@components/layout/Layout';
import BannerTeams from '@components/banner/BannerTeams';
import OurTeamsLeader from '@components/OurTeam/OurTeamsLeader';
import OurTeamsAwesome from '@components/OurTeam/OurTeamsAwesome';
import FormContact from '@components/Contact/FormContact';

const Team = () => {
    return (
        <>           
            <BannerTeams />                
            <OurTeamsLeader />                
            <OurTeamsAwesome />
            <FormContact />   
        </>
    );
};

Team.Layout = Layout;

export default Team;