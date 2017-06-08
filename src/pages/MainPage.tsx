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


export class LoginPage extends React.Component<IPropsLayoutFlex, IStateLayoutFlex> {
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
                <ScrollView>
                </ScrollView>
            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        position: 'relative',
    } as ImageStyle,
};