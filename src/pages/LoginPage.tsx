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
    TextInput,
    TouchableHighlight,
    Text,
    TouchableOpacity
} from "react-native";
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

                    <LinearGradient
                        colors={["rgba(70,70,70,0.63)", "rgba(70,70,70,0.51)"]}
                        style={styles.backGradient}
                        locations={[0.14, 1]}
                    />
                </Image>
                <View style={styles.parent}>
                    <View style={styles.logoWraper}>
                        <Image
                            source={ ImageResources.Logo }
                            style={styles.logo}
                        />
                    </View>
                    <View style={styles.loginContainer}>
                        <TextInput underlineColorAndroid={"rgba(0,0,0,0)"}
                                   style={styles.textInput}
                                   placeholderTextColor={"#A5A5A5"}
                                   placeholder={"e-mail"}
                                   selectionColor={"#A5A5A5"}
                        />
                        <View style={styles.underlineLogin}/>
                        <TextInput underlineColorAndroid={"rgba(0,0,0,0)"}
                                   style={styles.textInput}
                                   placeholder={"пароль"}
                                   placeholderTextColor={"#A5A5A5"}
                                   selectionColor={"#A5A5A5"}
                                   secureTextEntry={true}
                        />
                        <View style={styles.underlinePassword}/>
                        <View style={styles.loginButton}>
                            <TouchableHighlight>
                                <Text style={styles.loginButtonText}>войти</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{alignItems: "flex-end"}}>
                            <TouchableHighlight>
                                <Text style={styles.registryButtonText}>регистрация</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.socContainer}>
                        <View style={styles.socButtonsWrapper}>
                            <TouchableOpacity>
                                <Image source={ ImageResources.icon_twitter }/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socButtonsWrapper}>
                            <TouchableOpacity>
                                <Image source={ ImageResources.icon_facebook }/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.socButtonsWrapper}>
                            <TouchableOpacity>
                                <Image source={ ImageResources.icon_vk }/>
                            </TouchableOpacity>
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
    socButtonsWrapper: {
        padding: 7,
    } as ViewStyle,
    loginButton: {
        alignItems: "center",
        height: 44,
        backgroundColor: "#B09B7A",
        borderRadius: 2
    } as ViewStyle,
    registryButtonText: {
        paddingTop: 10,
        color: "white",
        fontFamily: "OpenSans-Regular",
        fontSize: 14
    } as ImageStyle,
    loginButtonText: {
        paddingTop: 8,
        color: "white",
        fontFamily: "OpenSans-Regular",
        fontSize: 18
    } as ViewStyle,
    logoWraper: {
        alignItems: "center"
    } as ViewStyle,
    backGradient: {
        flex: 1,
        alignSelf: "stretch"
    } as ViewStyle,
    underlinePassword: {
        borderBottomColor: "rgba(255,223,169,1)",
        borderBottomWidth: 1,
        opacity: 0.25,
        marginBottom: 15,
        marginHorizontal: 5
    } as ViewStyle,
    underlineLogin: {
        borderBottomColor: "rgba(255,223,169,1)",
        borderBottomWidth: 1,
        opacity: 0.25,
        marginHorizontal: 5
    } as ViewStyle,
    loginContainer: {
        paddingHorizontal: 64,
        alignItems: "stretch",
        paddingBottom: 50
    } as ViewStyle,
    socContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 41
    } as ViewStyle,
    textInput: {
        borderBottomColor: "rgba(255,223,169,1)",
        opacity: 1,
        fontSize: 18,
        color: "#A5A5A5",
        fontFamily: "SFUIText-Regular",
        paddingBottom: 5
    } as ViewStyle,
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