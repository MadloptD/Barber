/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    Image,
    ImageStyle,
    Dimensions,
    ViewStyle,
    StatusBar,
    FlatList
} from "react-native";
import {ImageResources} from "../../common/ImageResources.g";
import {Header} from "../HeaderComponent";
import {IPropsService, Service} from "../ServiceComponent";
import {INavigationProps, Navigation} from "../../navigation/Navigation";
import {request} from "../../common/api";
import { Job } from "../../core/api/dto/Job.g";

const {width} = Dimensions.get('window');
const iHeight = width * 1000 / 1500;

interface IPropsMain {
    navigation?: INavigationProps<any>;
}

interface IStateMain {
    loginField: string;
    passwordField: string;
    Jobs: Job[];
}


export class MainPage extends React.Component<IPropsMain, IStateMain> {
    data: IPropsService[];


    constructor(props: IPropsMain) {
        super(props);
        this.data = [];
        //this.setData();
        this.getJobs();


    }

    componentWillMount(): void {
        this.state = {
            loginField: "e-mail",
            passwordField: "пароль",
            Jobs: [],
        };
    }

    renderHeader = (): JSX.Element => {
        return <Header />;
    }

    async getJobs(): Promise<void> {
        try {
            const result = await request.jobApiRequest.getAll();
            this.setState({Jobs: result});
            this.outjobs();
        } catch (e) {
            console.log(e);
        }
    }

    outjobs(): void {
        this.state.Jobs.map((data) => console.log(data));
    }



    render(): JSX.Element {
        return (

            <View>
                <StatusBar backgroundColor="transparent" translucent={true}/>


                <View style={{backgroundColor: "#464646"}}>
                    <FlatList
                        data={this.state.Jobs}
                        renderItem={({item}) => ( <Service Job={item}/>)}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent = {Header}

                    />
                </View>
                <View style={{alignItems: "center", height: 38, width: width, marginTop: 20, position: "absolute"}}>
                    <Image source={ImageResources.Logo}
                           style={{resizeMode: "contain", height: 30, width: width}}
                    />
                </View>

            </View>


        );
    }
}

const styles = {
    container: {
        flex: 1,
        position: "relative",
        flexDirection: "column"
    } as ImageStyle,
    image: {
        width: width,
        //height: iHeight,
    } as ImageStyle,
    backGradient: {
        flex: 1,
    } as ViewStyle,
};