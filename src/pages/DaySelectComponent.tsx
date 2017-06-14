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
    StatusBar,
    FlatList,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';
import {Header} from "../pages/HeaderComponent";
import {IPropsService, Service} from "../pages/ServiceComponent";


const {width} = Dimensions.get('window');


interface IPropsServicePage {
}

interface IStateServicePage {

}

interface IPropsDaySelect {
    curDate?: Date;
    dayOfMonth?: string;
    dayOfWeek?: string;
    isSelected?: boolean;
}

interface IStateDaySelect {

}

export class DaySelect extends React.Component<IPropsDaySelect, IStateDaySelect> {



    constructor(props: IPropsDaySelect) {
        super(props);

    }


    render(): JSX.Element {


        return (

            <View style={{paddingHorizontal: width / 20, }}>
                <TouchableOpacity>
                    <View>
                <Text>{this.props.dayOfMonth}</Text>
                <Text>{this.props.dayOfWeek}</Text>
                        </View>
                </TouchableOpacity>
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