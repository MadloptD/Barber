/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    FlatList,
    Text,
    ViewStyle,

} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';

interface IPropsMyItem {
style: ViewStyle;
value?: string;
}


interface IStateMyItem {
}



export class MyItem extends React.Component<IPropsMyItem, IStateMyItem> {
    constructor(props: IPropsMyItem) {
        super(props);
        this.state = {

        };
    }

    render(): JSX.Element {
        return (

            <View style={this.props.style}>

                        <Text> {this.props.value}</Text>


            </View>


        );
    }
}

const styles = {
    backGradient: {
        flex: 1,
    } as ViewStyle,
};