import React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import "./public/styles/reset.scss"
import "./public/styles/global.scss"

import {Provider} from "react-redux"
import {store} from "./store/index";

const root = createRoot(
    document.getElementById("root") as HTMLDivElement
);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


