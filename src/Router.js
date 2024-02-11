import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as routes from 'constants/routes';
import Home from 'components/home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.HOME} Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;