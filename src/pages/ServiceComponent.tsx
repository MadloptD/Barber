/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    Image,
    Dimensions,
    ViewStyle,
    Text,
    ScaledSize,
    TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Job } from "../core/api/dto/Job.g";
import {INavigationProps, Navigation} from "../navigation/Navigation";

const {width}: ScaledSize = Dimensions.get("window");
const iHeight: number = width * 302 / 600;

export interface IPropsService {
    Job: Job;
    style?: ViewStyle;
    navigation?: INavigationProps<any>;
}

interface IStateService {

}


export class Service extends React.Component<IPropsService, IStateService> {
    constructor(props: IPropsService) {
        super(props);
        this.state = {};
    }

    onServicePress(): void {
        const navigation = this.props.navigation;
        navigation && navigation.dispatch(Navigation.Actions.service(this.props.Job));
    }

    render(): JSX.Element {
        return (
            <View style={this.props.style}>
                <TouchableOpacity onPress = {(): void => this.onServicePress() }>
                <Image source={{uri: this.props.Job.imageUrl}}
                       resizeMode="cover"
                       style={{width: width - 20, height: iHeight, marginHorizontal: 10, marginVertical: 8}}>
                    <LinearGradient style={{flex: 1, justifyContent: "flex-end"}}
                                    colors={["rgba(162,162,162,0)", "rgba(70,70,70,0.84)"]}
                    >
                    <View style={{width: width - 20, height: iHeight / 1.8, justifyContent: "flex-end", marginTop: iHeight / 2}}>
                        <LinearGradient locations={[0.72, 1]}
                                        colors={["rgba(116,105,84,0.40)", "rgba(50,50,50,0.18)"]}
                                        style={{flex: 1, justifyContent: "flex-end"}}
                        >
                            <View style={{flex: 1, justifyContent: "flex-start"}}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 10, marginHorizontal: 10}}>
                                    <Text style={styles.serviceNamePrice}>{this.props.Job.name}</Text>
                                    <Text style={styles.serviceNamePrice}>{this.props.Job.price}p</Text>
                                </View>
                                <View style = {{height: 1, width: width - 20, backgroundColor: "white"}}/>
                                <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10, marginHorizontal: 10}}>
                                    <Text style={styles.serviceDescription}>{this.props.Job.description}</Text>
                                    <Text style={styles.servicePrice}>{this.props.Job.duration.toString().slice(3, 5) + "мин"}</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                    </LinearGradient>
                </Image>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    backGradient: {
        flex: 1,
    } as ViewStyle,
    serviceNamePrice: {
        fontFamily: "SFUIText-Regular",
        fontSize: 22,
        color: "white",

    } as ViewStyle,
    serviceDescription: {
        fontFamily: "SFUIText-Light",
        fontSize: 12,
        color: "white",
        width: width * 0.6,
    } as ViewStyle,
    servicePrice: {
        fontFamily: "SFUIText-Regular",
        fontSize: 12,
        color: "#E5C999"
    } as ViewStyle,
};