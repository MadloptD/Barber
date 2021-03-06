import {
    NavigationRouteConfig, StackNavigator,
    StackNavigatorConfig
} from "react-navigation";
import {LoginPage} from "../pages/LoginPage";
import {MainPage} from "../pages/main/MainPage";
import {ServicePage} from "../pages/service/ServicePage";

import {Navigation} from "./Navigation";
const config: StackNavigatorConfig = {
    mode: "modal",
    headerMode: "none"
};
export const RootNavigation = StackNavigator({
    [Navigation.Pages.Login]: {screen: LoginPage} as NavigationRouteConfig<any>,
    [Navigation.Pages.Main]: {screen: MainPage} as NavigationRouteConfig<any>,
    [Navigation.Pages.Service]: {screen: ServicePage} as NavigationRouteConfig<any>,
}, config);