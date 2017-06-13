declare module "react-native-linear-gradient" {
    import React, {Component} from 'react';
    import {ViewStyle} from "react-native";

    export interface ILinearGradientProps {
        colors: string[];
        locations?: number[];
        style: ViewStyle;
        start?: {x: number, y: number};
        end?: {x: number, y: number};
    }

    class LinearGradient extends Component<ILinearGradientProps, {}> {
    }

    export default LinearGradient;
}