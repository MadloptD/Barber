/**
 * Created by dmitrii on 07.06.2017.
 */

import React from "react";
import {
    View,
    FlatList,
    Text,
    ViewStyle,
    ScrollView

} from "react-native";
import {ImageResources} from "../common/ImageResources.g";
import LinearGradient from 'react-native-linear-gradient';
import {DaySelect} from "./DaySelectComponent"

interface IPropsMyItem {

}


interface IStateMyItem {
    yearDays: IDateAndDay[][];
    calendar: Date[];
    showMonth: number;
    showDate: Date;

}

interface IDateAndDay {
    day: string;
    dayDate: number;
    date: Date;
}



export class MyItem extends React.Component<IPropsMyItem, IStateMyItem> {
    month: string[];
    weekday: string[];
    constructor(props: IPropsMyItem) {
        super(props);
        this.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        this.state = {
            yearDays: [],
            calendar: [],
            showMonth: 0,
            showDate: new Date(),
        };
       // this.initDateAndDay();

    }

    componentWillMount(): void {
        this.newInitCalendar();
    }

    newInitCalendar(): void {
        const currentDate: Date = new Date();
        const showMonth = currentDate.getMonth();
        const newCalendar: Date[] = [];
        for (let i = 1; i < 366; i++) {
            newCalendar.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        this.setState({calendar: newCalendar, showMonth: showMonth});
    }


    initDateAndDay(): void {
        const weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

        const currentDate: Date = new Date();
        let currentMonth: number = currentDate.getMonth();
        let tempMonth: number = currentDate.getMonth();
        let dateAndDay: IDateAndDay = {day: weekday[currentDate.getDay()], date: currentDate, dayDate: currentDate.getDate()};
        const monthDateAndDay: IDateAndDay[] = [];

        const tempYear: number = currentDate.getFullYear();
        let currentYear: number = currentDate.getFullYear();

        while (tempYear === currentYear) {

             while (tempMonth === currentMonth) {
                 monthDateAndDay.push(dateAndDay);

                 currentDate.setDate(currentDate.getDate() + 1);

                 currentMonth = currentDate.getMonth();
                dateAndDay = {day: weekday[currentDate.getDay()], date: currentDate, dayDate: currentDate.getDate()};
            }
             this.state.yearDays.push(monthDateAndDay);
             currentYear = currentDate.getFullYear();
             tempMonth = currentDate.getMonth();
         }
    }

    updateCalendar(currentDate: Date): void {
        const tmpCalendar: Date[] = [];
        let currentMonth: number = currentDate.getMonth();
       const tempMonth: number = currentDate.getMonth();


        while (tempMonth === currentMonth) {
            tmpCalendar.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
            currentMonth = currentDate.getMonth();

        }
        console.log(this.state.calendar);
        this.setState({showMonth: tempMonth, showDate: currentDate, calendar: tmpCalendar});

    }


    elements(monthNumber: number = 0): JSX.Element[] {
        return (

        this.state.yearDays[monthNumber].map((item, index) => <Text key={index.toString()}> {item.day}</Text> )
        );
    }

    updateMonth(item: Date): void {
        if (item.getDay() === 4) {
            this.setState({showMonth: item.getMonth()});
        }

       // return  (
       //     <DaySelect curDate={item} dayOfMonth={item.getDate().toString()} dayOfWeek={this.weekday[item.getDay()]}/>
       //  );
    }

    render(): JSX.Element {
        return (

            <View >

                <Text>{this.month[this.state.showMonth]}</Text>
                <FlatList
                    horizontal={true}
                    data={this.state.calendar}
                    renderItem={({item}): JSX.Element =>  <DaySelect curDate={item} dayOfMonth={item.getDate().toString()} dayOfWeek={this.weekday[item.getDay()]}/>}
                    keyExtractor={(item) => item.toString()}
                    onViewableItemsChanged = {(): void => this.updateMonth(item)}

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