import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../About/About';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Doctors from '../doctors/Doctors';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;