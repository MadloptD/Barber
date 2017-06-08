declare module "react-native-linear-gradient" {
    import React, {Component} from 'react';
    import {ViewStyle} from "react-native";

    export interface ILinearGradientProps {
        colors: string[];
        locations?: number[];
        style: ViewStyle;
    }

    class LinearGradient extends Component<ILinearGradientProps, {}> {
    }

    export default LinearGradient;
}