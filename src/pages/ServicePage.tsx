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
import {DaySelect} from "../pages/DaySelectComponent"
import {ServiceTime} from "../pages/ServiceTime"
const {width} = Dimensions.get('window');


interface IPropsServicePage {
}

interface IStateServicePage {
    pressStatus: boolean;
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
    calendar: { curDate: Date, dayOfWeek?: string, dayOfMonth?: string }[];
    selectedDay: number;
    dayOfMonth: { month: number, weekDay: number, date: number };
    monthOfYear: { month: number, weekDay: number, date: number }[];
    years: { year: number, months: { month: number, weekDay: number, date: number }[] }[];


    constructor(props: IPropsServicePage) {
        super(props);

        this.weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        this.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.calendar = [];
        this.monthOfYear = [];
        this.years = [];
        this.initCalendar();
        this.today = new Date();
        this.todayYear = this.today.getFullYear();
    }

    initCalendar(): void {
        // for (let j: number = 2017; j < 2019; j++) {
        //     let tmp = new Date(j, 0, 1)
        //     let days: number = 365;
        //     if (this.leapYear(j)) {
        //         days = 366;
        //     }
        //
        //     for (let i: number = 1; i <= days; i++) {
        //         tmp.setDate(i);
        //
        //         this.calendar.push({
        //             year: j.toString(),
        //             month: this.month[tmp.getMonth()],
        //             dayOfWeek: this.weekday[tmp.getDay()],
        //             dayOfMonth: tmp.getDate().toString(),
        //             key: i,
        //         });
        //     }
        //
        //
        // }
        let currentDay = new Date();

        currentDay.setDate(currentDay.getDate() - 3);
        //
        // let currentYear = currentDay.getFullYear();
        // let tmpYear = currentDay.getFullYear();
        // let i = 0;
        // while ( i < 3) {
        //     let currentMonth = currentDay.getMonth();
        //     let tmpMonth = currentDay.getMonth();
        //     while (currentMonth == tmpMonth) {
        //         currentDay.setDate(currentDay.getDate() + 1);
        //         this.dayOfMonth = {month: currentDay.getMonth(), weekDay: currentDay.getDay(), date: currentDay.getDate()};
        //         this.monthOfYear.push(this.dayOfMonth);
        //     };
        //     currentYear = currentDay.getFullYear();
        //     this.years.push({year: currentYear, months: this.monthOfYear});
        //     if (currentYear > tmpYear) {
        //         i++;
        //     }
        // }

        for (let i: number = -3; i < 1000; i++) {

            let tmp: Date = new Date();
            tmp.setDate(tmp.getDate() + i);
            this.calendar.push({
                curDate: tmp,
                dayOfMonth: this.month[tmp.getMonth()],
                dayOfWeek: this.weekday[tmp.getDay()]
            });
        }


    }

    renderCalendar(): JSX.Element[] {
        return (

            this.calendar.map((data, index): JSX.Element => {

                return (
                    <View>
                        <DaySelect curDate={data.curDate} dayOfMonth={data.curDate.getDate().toString()}
                                   dayOfWeek={data.dayOfWeek} key={index.toString()}/>
                    </View>
                );
            })

        );
    }

    renderCalendar2(): JSX.Element[] {
        return (

            this.calendar.map((data, index): JSX.Element => {

                return (
                    <View>
                        <DaySelect curDate={data.curDate} dayOfMonth={data.curDate.getDate().toString()}
                                   dayOfWeek={data.dayOfWeek} key={index.toString()}/>
                    </View>
                );
            })

        );
    }

    leapYear(year: number): boolean {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }

    render(): JSX.Element {


        return (

            <View>

            </View>


        )
            ;
    }
}

export class ServicePage extends React.Component<IPropsServicePage, IStateServicePage> {

    serviceName: string;
    weekday: string[];
    month: string[];
    duration: string;
    price: number;

    constructor(props: IPropsServicePage) {
        super(props);
        this.weekday = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        this.month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        this.serviceName = "Мужская Стрижка";
        this.duration = "60 минут";
        this.price = 145;
        this.state = {
            pressStatus: false,
        }
    }

    onHideUnderlay(): void {
        this.setState({pressStatus: false});
    }

    onShowUnderlay(): void {
        this.setState({pressStatus: true});
    }

    onPress(): void {
        this.setState({pressStatus: !this.state.pressStatus});
    }

    render(): JSX.Element {

        return (

            <View style={{flex: 1}}>
                <Image
                    source={ ImageResources.barbershop }
                    style={styles.image}>
                </Image>
                <View style={{backgroundColor: "red", flex: 1}}>
                </View>
                <View style={{backgroundColor: "green", flex: 3}}>
                </View>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"} }>
                    <Text style={{
                        fontSize: 22,
                        fontFamily: "KellySlab-Regular",
                        color: "#464646"
                    }}>{this.serviceName}</Text>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: "SFUIText-Regular",
                        color: "#87888C"
                    }}>{this.duration}/ {this.price} рублей</Text>
                </View>
                <View style={{flex: 3, justifyContent: "space-around"}}>
                    <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                        <ServiceTime textTime="08:00" isFree={true}/>
                        <ServiceTime textTime="09:00" isFree={false}/>
                        <ServiceTime textTime="10:00" isFree={true}/>
                        <ServiceTime textTime="11:00" isFree={true}/>
                    </View>

                </View>
                <View style={{flex: 1, paddingHorizontal: 80, justifyContent: "center",}}>
                    <TouchableOpacity>
                        <View style={styles.confirmButton}>
                            <Text style={styles.confirmButtonText}>Готово</Text>
                        </View>
                    </TouchableOpacity>
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
        position: "absolute",
        top: 0,
        left: 0,
        width: width,
        opacity: 0.1,
        //height: iHeight,
    } as ImageStyle,
    backGradient: {
        flex: 1,
    } as ViewStyle,
    confirmButton: {
        alignItems: "center",
        height: 38,
        backgroundColor: "#464646",
        borderRadius: 2
    } as ViewStyle,
    confirmButtonText: {
        paddingTop: 8,
        color: "#FEFEFE",
        fontFamily: "OSFUIText-Regular",
        fontSize: 18
    } as ViewStyle,
    button: {
        borderColor: '#464646',
        borderWidth: 1,
        borderRadius: 10,
    } as ViewStyle,
    buttonPress: {


    } as ViewStyle,
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as ViewStyle,
};