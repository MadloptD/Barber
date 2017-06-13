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
import {MyItem} from "../pages/MyItem";


interface IPropsService {
}

interface IStateService {


}


export class TryFlat extends React.Component<IPropsService, IStateService> {
    data: MyItem[];
    constructor(props: IPropsService) {
        super(props);
        this.state = {

        };
    }

    render(): JSX.Element {
        return (

            <View>
                <FlatList
                    data={[{value: 'a'}, {value: 'b'}]}
                    renderItem={({item}) =>( <MyItem style={{backgroundColor: "red"}} value={item.value}/>)}
                />
            </View>


        );
    }
}

const styles = {
    backGradient: {
        flex: 1,
    } as ViewStyle,
};