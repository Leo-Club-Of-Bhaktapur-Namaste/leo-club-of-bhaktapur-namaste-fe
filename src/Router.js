import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as routes from 'constants/routes';
import Home from 'components/home';
import Header from 'components/common/layouts/Header';
import Awards from 'components/awards/Awards';
import Bods from 'components/Bods/Bods';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.EVENTS} Component={() => (<h1>Events</h1>)} />
                <Route path={routes.AWARDS} element={<><Header /><Awards /></>} />
                {/* <Route path={routes.AWARD_DETAIL} element={<><Header /><AwardDetail /></>} /> */}
                <Route path={routes.HOME} element={<><Header /><Home /></>} />
                <Route path={routes.BODS} element={<><Header /><Bods /></>} />
                {/* <Route path={routes.BODS} element={<><Header /><ContactUs /></>} />
                <Route path={routes.BODS} element={<><Header /><AboutUs /></>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
