import {NavigationActions, NavigationProp, NavigationScreenProp} from "react-navigation";
type Action = any;
export type INavigationProps<S> = NavigationScreenProp<any, any> & NavigationProp<S, Action>;
export const Navigation = {
    Pages: {
        Login: "Login",
        Main: "Main",

    },
    Actions: {
        goBack: (): Action => NavigationActions.back(),
        login: (): Action => NavigationActions.navigate({routeName: Navigation.Pages.Main}),
    }
};