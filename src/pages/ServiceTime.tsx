/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    ViewStyle,
    Text,
    TouchableOpacity
} from "react-native";

interface IPropsServiceTime {
    textTime: string;
    isFree: boolean;
}

interface IStateServiceTime {
    pressStatus: boolean;
}

export class ServiceTime extends React.Component<IPropsServiceTime, IStateServiceTime> {
    constructor(props: IPropsServiceTime) {
        super(props);
        this.state = {
            pressStatus: false,
        };
        this.setTouchableStatus();

    }


    setTouchableStatus(): void {
        if (!this.props.isFree) {
            this.state = ({pressStatus: true});
        }
    }

    onPress(): void {
        this.setState({pressStatus: !this.state.pressStatus});
    }

    render(): JSX.Element {


        return (
                        <View style={ this.props.isFree ? (this.state.pressStatus ? styles.buttonPress : styles.button) : styles.buttonOff }>
                            <TouchableOpacity
                                disabled = {!this.props.isFree}
                                activeOpacity={1}
                                onPress={(): void => this.onPress()}
                            >
                                <Text style={styles.text}>{this.props.textTime}</Text>

                            </TouchableOpacity>
                        </View>

        );
    }
}

const styles = {
    button: {
        borderColor: '#464646',
        borderWidth: 1,
        borderRadius: 10,
    } as ViewStyle,
    buttonOff: {
    } as ViewStyle,
    buttonPress: {
        backgroundColor: "#E5C999",
        borderRadius: 10,
    } as ViewStyle,
    text: {
        fontSize: 14,
        fontFamily: "SFUIText-Regular",
        marginHorizontal: 16,
        marginVertical: 6,
    } as ViewStyle,
};