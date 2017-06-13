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
    ImageURISource
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const {width} = Dimensions.get('window');
const iHeight = width * 302 / 600;

export interface IPropsService {
    image: ImageURISource;
    id: number;
    name: string;
    description: string;
    price: number;
    duration: string;
    style?: ViewStyle;
}

interface IStateService {

}


export class Service extends React.Component<IPropsService, IStateService> {
    constructor(props: IPropsService) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <View style={this.props.style}>
                <Image source={this.props.image}
                       resizeMode="contain"
                       style={{width: width - 20, height: iHeight, marginHorizontal: 10}}>
                    <LinearGradient style={{flex: 1, justifyContent: "flex-end"}}
                                    colors={["rgba(162,162,162,0)", "rgba(70,70,70,0.84)"]}
                    >
                    <View style={{width: width - 20, height: iHeight / 2, justifyContent: "flex-end", marginTop: iHeight / 2}}>
                        <LinearGradient locations={[0.72, 1]}
                                        colors={["rgba(116,105,84,0.40)", "rgba(50,50,50,0.18)"]}
                                        style={{flex: 1, justifyContent: "flex-end"}}
                        >
                            <View style={{flex: 1, justifyContent: "flex-start"}}>
                                <View style={{flexDirection: "row", justifyContent: "space-between", paddingBottom: 10}}>
                                    <Text style={styles.serviceNamePrice}>{this.props.name}</Text>
                                    <Text style={styles.serviceNamePrice}>{this.props.price}p</Text>
                                </View>
                                <View style = {{height: 1, width: width - 20, backgroundColor: "white"}}>
                                </View>
                                <View style={{flexDirection: "row", justifyContent: "space-between", paddingTop: 10}}>
                                    <Text style={styles.serviceDescription}>{this.props.description}</Text>
                                    <Text style={styles.servicePrice}>{this.props.duration}</Text>
                                </View>
                            </View>
                        </LinearGradient>

                    </View>
                    </LinearGradient>
                </Image>
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
        color: "white"
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