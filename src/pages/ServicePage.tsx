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
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';
import {Header} from "../pages/HeaderComponent";
import {IPropsService, Service} from "../pages/ServiceComponent";

const {width} = Dimensions.get('window');


interface IPropsServicePage {
}

interface IStateServicePage {

}

interface IPropsDays {
}

interface IStateDays {

}

export class Days extends React.Component<IPropsDays, IStateDays> {

    weekday: string[];
    month: string[];
    today: Date;
    todayYear: number;
    calendar: {year: string; month: string, dayOfWeek: string, dayOfMonth: string }[];

    constructor(props: IPropsServicePage) {
        super(props);
        this.weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        this.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.calendar = [];
        this.initCalendar();
        this.today = new Date();
        this.todayYear = this.today.getFullYear();
    }

    initCalendar(): void {
        for (let j: number = 2017; j < 2031; j++) {
            let tmp = new Date(j, 0, 1)
            let days: number = 365;
            if (this.leapYear(j)) {
                days = 366;
            }
            for (let i: number = 1; i < days; i++) {
                tmp.setDate(i);
                this.calendar.push({
                    year: j.toString(),
                    month: this.month[tmp.getMonth()],
                    dayOfWeek: this.weekday[tmp.getDay()],
                    dayOfMonth: tmp.getDate().toString(),
                });
            }
        }

        for (let i: number = -3; i < 1000; i++){
            let dayIndex: number = i + 3;

        }

    }



    leapYear(year: number): boolean {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    render(): JSX.Element {
        return (

            <View>
                <Text>{this.month[this.today.getMonth()]}</Text>
                <Text>{this.today.getDate()}</Text>
                <Text>{this.weekday[this.today.getDay()]}</Text>
                <Text>{new Date().toJSON()}</Text>


            </View>


        );
    }
}

export class ServicePage extends React.Component<IPropsServicePage, IStateServicePage> {


    weekday: string[];
    month: string[];

    constructor(props: IPropsServicePage) {
        super(props);
        this.weekday = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        this.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    }


    render(): JSX.Element {
        return (

            <View>
                <Days/>
                <FlatList
                    data={this.weekday}
                    renderItem={({item}) => (<Text> {item}</Text>)}
                    keyExtractor={(item: string, index: number): string => index.toString()}
                    horizontal={true}
                />

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