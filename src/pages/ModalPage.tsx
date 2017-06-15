import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

interface IPropsModalPage {


}

interface IStateModalPage {
    modalVisible: boolean;
}
export class ModalExample extends Component<IPropsModalPage, IStateModalPage> {
    constructor(props: IPropsModalPage) {
        super(props);

        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible(visible: boolean): void {
        this.setState({modalVisible: visible});
    }

    render(): JSX.Element {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

            </View>
        );
    }
}