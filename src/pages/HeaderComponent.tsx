/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    Image,
    Dimensions,
    ViewStyle,
    Text
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
        this.state = {
        };
    }

    render(): JSX.Element {
        return (

            <View>
                <Image source={ImageResources.header_jpg}
                       resizeMode="contain"
                       style={{width: width, height: iHeight}}>
                    <LinearGradient
                        colors={["rgba(70,70,70,0.63)", "rgba(70,70,70,0.51)"]}
                        style={styles.backGradient}
                        locations={[0.14, 1]}>
                        <View style={{flex: 1, justifyContent: "flex-end", alignItems: "flex-start"}}>
                            <Text style={{color: "#E5C999", fontFamily: "SFUIText-Regular", fontSize: 22}}> САЛОН </Text>
                            <Text style={{color: "#FFFFFF", fontFamily: "Pattaya-Regular", fontSize: 28}}> "Ваш стиль" </Text>
                            <Text style={{color: "#FFFFFF", fontFamily: "KellySlab-Regular", fontSize: 22}}> ул.Матросова 25 д.8 </Text>
                        </View>
                    </LinearGradient>
                </Image>
                <View style={{height: 1, width: width * 0.75, backgroundColor: "#E5C999", marginLeft: width * 0.25}}/>
            </View>


        );
    }
}

const styles = {
    backGradient: {
        flex: 1,
    } as ViewStyle,
};