import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as routes from 'constants/routes';
import Home from 'components/home';
import Awards from 'components/awards/Awards';
import Bods from 'components/Bods/Bods';
import Header from 'components/common/layouts/Header';
import AboutUs from 'components/AboutUs/AboutUs';

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path={routes.EVENTS} Component={() => (<h1>Events</h1>)} />
                <Route path={routes.AWARDS} element={<Awards />} />
                {/* <Route path={routes.AWARD_DETAIL} element={<AwardDetail />} /> */}
                <Route path={routes.HOME} element={<Home />} />
                <Route path={routes.BODS} element={<Bods />} />
                {/* <Route path={routes.BODS} element={<ContactUs />} /> */}
                <Route path={routes.ABOUT_US} element={<AboutUs />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
