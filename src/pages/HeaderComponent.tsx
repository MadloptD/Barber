/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    Image,
    Dimensions,
    StatusBar,
    Text,
    ViewStyle
} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';


const {width} = Dimensions.get('window');
const iHeight = width * 1000 / 1500;

interface IPropsHeader {
}

interface IStateHeader {

}


export class Header extends React.Component<IPropsHeader, IStateHeader> {
    constructor(props: IPropsHeader) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (

            <View>
                <StatusBar backgroundColor={"transparent"} translucent={true}/>
                <Image source={ImageResources.header_jpg}
                       resizeMode="contain"
                       style={{width: width, height: iHeight}}>

                    <LinearGradient
                        start = {{x: 0, y: 1}}
                        end = {{ x: 0.2, y: 0 }}
                        colors={["#464646", "rgba(70,70,70,0.63)", "rgba(70,70,70,0.51)"]}
                        style={styles.backGradient}
                        locations={[0.3, 0.5, 1]}

                        >
                        <View style={{flex: 1, justifyContent: "flex-end", alignItems: "flex-start", paddingLeft: 20, paddingBottom: 10}}>
                            <Text style={{color: "#E5C999", fontFamily: "SFUIText-Regular", fontSize: 22}}>
                                САЛОН </Text>
                            <Text style={{color: "#FFFFFF", fontFamily: "Pattaya-Regular", fontSize: 28}}> "Ваш
                                стиль" </Text>
                            <Text style={{color: "#FFFFFF", fontFamily: "KellySlab-Regular", fontSize: 22}}>
                                ул.Матросова 25 д.8 </Text>
                        </View>
                    </LinearGradient>

                </Image>
                <View style={{backgroundColor: "#464646"}}>
                    <View
                        style={{height: 1, width: width * 0.75, backgroundColor: "#E5C999", marginLeft: width * 0.25}}/>
                    <View style = {{justifyContent: "center", alignItems: "center", paddingVertical: 16}}>
                        <Text style={{
                            fontFamily: "KellySlab-Regular",
                            fontSize: 20,
                            color: "#E5C999",
                            backgroundColor: "#464646"
                        }}>УСЛУГИ САЛОНА</Text>
                    </View>
                </View>
            </View>


        );
    }
}

const styles = {
    backGradient: {
        flex: 1,
    } as ViewStyle,
};