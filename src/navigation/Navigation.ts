import {NavigationActions, NavigationProp, NavigationScreenProp} from "react-navigation";
type Action = any;
export type INavigationProps<S> = NavigationScreenProp<any, any> & NavigationProp<S, Action>;
import { Job } from "../core/api/dto/Job.g";
export const Navigation = {
    Pages: {
        Login: "Login",
        Main: "Main",
        Service: "Service",
    },
    Actions: {
        goBack: (): Action => NavigationActions.back(),
        login: (): Action => NavigationActions.navigate({routeName: Navigation.Pages.Main}),
        service: (job: Job): Action => NavigationActions.navigate({
            routeName: Navigation.Pages.Service,
            params: {job}
        }),
    }
};