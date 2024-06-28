"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const landingpage_component_1 = require("./components/landingpage/landingpage.component");
const loginpage_component_1 = require("./components/loginpage/loginpage.component");
const register_component_1 = require("./components/register/register.component");
const userdashboard_component_1 = require("./components/userdashboard/userdashboard.component");
exports.routes = [
    { path: '', component: landingpage_component_1.LandingpageComponent },
    { path: 'landing', pathMatch: 'full', redirectTo: '' },
    { path: 'login', component: loginpage_component_1.LoginpageComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'userdashboard', component: userdashboard_component_1.UserdashboardComponent }
];
