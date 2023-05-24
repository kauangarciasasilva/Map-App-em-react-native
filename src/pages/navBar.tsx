import { Component } from "react";
import { StyleSheet,Text, View } from 'react-native';
import IconFilter from "./iconFilter";
import IconMenu from "./iconMenu";
import IconPaper from "./iconPaper";

import React from 'react';
import IconSeach from "./iconSearch";



export default class NavBar extends Component {

    private styles = StyleSheet.create({

        searchBar: {
            position: 'absolute',
            top: 110,
            left: 20,
            right: 20,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'rgb(226,227,229)',
            borderRadius: 50,
            padding: 10,
            elevation: 4,
        },

        search: {
            position: 'absolute',
            top: 60,
            left: 1,
            right: 20,
            flexDirection: 'row',
            alignItems: 'center',
            tintColor: 'black',

            borderRadius: 50,
            padding: 10,

        },
        input: {
            top: 1,
            left: 10,
            right: 20,
        },
        inputText: {
            top: 1,
            left: 100,
            right: 20,

        },


    });
    render() {
        return (
            <View>
                <View style={this.styles.search}>
                    <IconMenu />
                    <IconPaper />
                    <IconFilter />

                    <Text style={this.styles.inputText}>Meu App</Text>

                </View>

                <View style={this.styles.searchBar}>

                    <IconSeach />

                    <Text style={this.styles.input}>pesquiza</Text>

                </View>
            </View>
        );
    }
}