/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {View, Image, ImageStyle, Dimensions, ViewStyle, TextInput, TouchableHighlight, Text, ScrollView} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';


const {width} = Dimensions.get('window');
const iHeight = width * 1334 / 750;

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
            <View style={styles.container}>
                <View style={{flexBasis: 44, flexDirection: "row"}}>
                    <View style={{backgroundColor: "blue", flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <Image style = {{}}
                            source={ ImageResources.icon_menu }
                        />
                    </View>
                    <View style={{flex: 11}}>
                        <Image
                            resizeMode = {"contain"}
                            source={ ImageResources.Logo }
                        />
                    </View>
                </View>
                <View style={{backgroundColor: "grey", flex: 1}}>
                <View style={{ flex: 1}}>

                </View>
                <View style={{flex: 1}}>

                </View>
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
};