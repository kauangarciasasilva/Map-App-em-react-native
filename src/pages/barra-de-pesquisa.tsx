import { Component } from "react";
import { StyleSheet,Text, View } from 'react-native';


import React from 'react';
import IconSeach from "./iconSearch";



export default class BarraDP extends Component {

    private styles = StyleSheet.create({

        searchBar: {
            position: 'absolute',
            top: 110,
            left: 5,
            right: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgb(226,227,229)',
            borderRadius: 50,
            padding: 10,
            elevation: 4,
        },

        input: {
            top: 1,
            left: 10,
            right: 20,
        },
       
    });
    render() {
        return (
            <View>
               
                <View style={this.styles.searchBar}>

                    <IconSeach />

                    <Text style={this.styles.input}>pesquiza</Text>

                </View>

            </View>
        );
    }
}