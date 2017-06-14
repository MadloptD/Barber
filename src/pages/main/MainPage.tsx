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
    FlatList
} from "react-native";
import {ImageResources} from "../../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';
import {Header} from "../HeaderComponent";
import {IPropsService, Service} from "../ServiceComponent";
import {INavigationProps, Navigation} from "../../navigation/Navigation";

const {width} = Dimensions.get('window');
const iHeight = width * 1000 / 1500;

interface IPropsMain {
    navigation?: INavigationProps<any>;
}

interface IStateMain {
    loginField: string;
    passwordField: string;
}


export class MainPage extends React.Component<IPropsMain, IStateMain> {
    data: IPropsService[];

    constructor(props: IPropsMain) {
        super(props);
        this.data = [];
        this.setData();
        this.state = {
            loginField: "e-mail",
            passwordField: "пароль"

        };
    }

    renderHeader = (): JSX.Element => {
        return <Header />;
    };

    setData(): void {
        this.data.push({
            image: ImageResources.p1_jpg,
            id: 0,
            name: "Коррекция бороды",
            description: "Коррекция формы любой сложности",
            price: 200,
            duration: "20мин",
        });
        this.data.push({
            image: ImageResources.p1_jpg,
            id: 1,
            name: "Стрижка усов",
            description: "Коррекция формы любой сложности",
            price: 500,
            duration: "20мин",
        });
        this.data.push({
            image: ImageResources.p2_jpg,
            id: 2,
            name: "Стрижка усов",
            description: "Коррекция формы любой сложности, бережный уход, длина",
            price: 500,
            duration: "20мин",
        });
        this.data.push({
            image: ImageResources.p4_jpg,
            id: 3,
            name: "Стрижка усов",
            description: "Коррекция формы любой сложности, бережный уход, длина",
            price: 300,
            duration: "20мин",
        });
        this.data.push({
            image: ImageResources.p5_jpg,
            id: 4,
            name: "Стрижка усов",
            description: "Коррекция формы любой сложности, бережный уход, длина",
            price: 300,
            duration: "20мин",
        });
    }

    render(): JSX.Element {
        return (

            <View>
                <StatusBar backgroundColor="transparent" translucent={true}/>


                <View style={{backgroundColor: "#464646"}}>
                    <FlatList
                        data={this.data}
                        renderItem={({item}) => ( <Service {...item}/>)}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent = {Header}

                    />
                </View>
                <View style={{alignItems: "center", height: 38, width: width, marginTop: 20, position: "absolute"}}>
                    <Image source={ImageResources.Logo}
                           style={{resizeMode: "contain", height: 30, width: width}}
                    />
                </View>

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