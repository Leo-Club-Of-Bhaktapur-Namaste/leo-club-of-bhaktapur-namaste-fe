import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as routes from 'constants/routes';
import Home from 'components/home';
import Bods from 'components/pages/Bods/Bods';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.EVENTS} Component={Home} />
                <Route path={routes.HOME} Component={Home} />
                <Route path={routes.BODS} Component={Bods} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
