import { Component } from "react";
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text,  View } from 'react-native';
import NavBar from "../navBar";

export default class Map extends Component {

  private styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    map: {
      width: '100%',
      height: '100%',
    },

    search: {
      position: 'absolute',
      top: 5,
      left: 35,
      right: 10,
      flexDirection: 'row',
      alignItems: 'center',
      tintColor: 'black',

      borderRadius: 50,
      padding: 5,

    },
  
  });
  render() {
    return (
      <View style={this.styles.container}>

        <MapView style={this.styles.map} />

        <View style={this.styles.search}>
          
        <NavBar/>

        </View>

      </View>
    );

  }
}




