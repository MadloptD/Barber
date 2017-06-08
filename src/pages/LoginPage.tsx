/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {View, Image, ImageStyle, Dimensions, ViewStyle, TextInput, TouchableHighlight, Text} from "react-native";
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
                    <Image
                        source={ ImageResources.barbershop }
                        style={styles.image}>

                    <LinearGradient colors={["rgba(70,70,70,0.63)", "rgba(70,70,70,0.51)"]} style={{flex: 1, alignSelf: "stretch"}} locations={[0.14 , 1]} >
                    </LinearGradient>
                    </Image>
                    <View style={styles.parent}>
                        <View style={{alignItems: "center"}}>
                            <Image
                                source={ ImageResources.Logo }
                                style={styles.logo}
                            />
                        </View>
                        <View style={{paddingHorizontal: 64, alignItems: "stretch", paddingBottom: 50}}>

                            <TextInput underlineColorAndroid = {"rgba(0,0,0,0)"}
                                style={{ borderBottomColor: "rgba(255,223,169,1)", opacity: 1, fontSize: 18, color: "#A5A5A5", fontFamily: "SFUIText-Regular", paddingBottom: 5}}
                                onChangeText={(text) => this.setState({loginField: text})}
                                       placeholderTextColor = {"#A5A5A5"}
                                       placeholder = {"e-mail"}
                                       selectionColor = {"#A5A5A5"}
                            />
                            <View style = {{borderBottomColor: "rgba(255,223,169,1)" , borderBottomWidth: 1, opacity: 0.25, marginHorizontal: 5}}/>
                            <TextInput underlineColorAndroid = {"rgba(0,0,0,0)"}
                                style={{ borderBottomColor: "rgba(255,223,169,1)", opacity: 1, fontSize: 18, color: "#A5A5A5", fontFamily: "SFUIText-Regular", paddingBottom: 5}}
                                       onChangeText={(text) => this.setState({passwordField: text})}
                                       placeholder = {"пароль"}
                                       placeholderTextColor = {"#A5A5A5"}
                                       selectionColor = {"#A5A5A5"}
                            />
                            <View style = {{borderBottomColor: "rgba(255,223,169,1)" , borderBottomWidth: 1, opacity: 0.25, marginBottom: 15, marginHorizontal: 5}}/>
                            <View style={{alignItems: "center",  height: 44, backgroundColor: "#B09B7A", borderRadius: 2}}>
                                <TouchableHighlight>
                                    <Text style={{paddingTop: 8, color: "white", fontFamily: "OpenSans-Regular", fontSize: 18}}>войти</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{alignItems: "flex-end"}}>
                                <TouchableHighlight>
                                    <Text style={{paddingTop: 10, color: "white", fontFamily: "OpenSans-Regular", fontSize: 14}}>регистрация</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: "center", paddingBottom: 41}}>
                            <View style={{padding: 7}}>
                                <TouchableHighlight>
                                    <Image source={ ImageResources.icon_twitter }/>
                                </TouchableHighlight>
                            </View>
                            <View style={{padding: 7}}>
                                <TouchableHighlight>
                                    <Image source={ ImageResources.icon_facebook }/>
                                </TouchableHighlight>
                            </View>
                            <View style={{padding: 7}}>
                                <TouchableHighlight>
                                    <Image source={ ImageResources.icon_vk }/>
                                </TouchableHighlight>
                            </View>
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
    } as ImageStyle,
    image: {
        width: width,
        height: iHeight,
        bottom: 0,
        left: 0,
        position: 'absolute',
        zIndex: 0,
        resizeMode: "contain",
        opacity: 1,
    } as ImageStyle,
    parent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        position: 'relative',
        zIndex: 2,
        alignItems: "stretch",
    } as ViewStyle,
    loginField: {

        borderColor: 'gray',
    } as ViewStyle,
    passwordField: {

        borderColor: 'gray',
    } as ViewStyle,
    logo: {

        resizeMode: "center",
    } as ImageStyle,

};