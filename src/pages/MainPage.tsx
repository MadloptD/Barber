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
    Text,
    StatusBar
} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';
import {Header} from "../pages/HeaderComponent";

const {width} = Dimensions.get('window');
const iHeight = width * 1000 / 1500;

interface IPropsLayoutFlex {
}

interface IStateLayoutFlex {
    loginField: string;
    passwordField: string;
}


export class MainPage extends React.Component<IPropsLayoutFlex, IStateLayoutFlex> {
    constructor(props: IPropsLayoutFlex) {
        super(props);
        this.state = {
            loginField: "e-mail",
            passwordField: "пароль"
        };
    }

    render(): JSX.Element {
        return (

            <View>
                <StatusBar   />
                <Header>

                </Header>
                <View style={{alignItems: "center", height: 38, width: width, marginTop: 10, position: "absolute"}}>
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
        position: 'relative',
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