import { Component } from "react";
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import IconMenu from "../iconMenu";
import IconFilter from "../iconFilter";
import IconSeach from "../iconSearch";


export default class Map extends Component {
  

    private handleSearch = () => {
     
    };
    private styles = StyleSheet.create({
        container: {
            flex: 1,
          },
        
          map: {
            width: '100%',
            height: '100%',
          },
        
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
            left: 35,
            right: 20,
            flexDirection: 'row',
            alignItems: 'center',
            tintColor:'black',
            
            borderRadius: 50,
            padding: 10,
           
          },
        
          input:{
            top: 1,
            left: 10,
            right: 20,
          },
        
          inputText:{
            top: 1,
            left: 100,
            right: 20,
            
          },
   
          searchpaper:{
            top:1,
            left:350,
            height:20,
          },

    });
    render() {
        return (
            <View style={this.styles.container}>

            <MapView style={this.styles.map} />
      
            <View style={this.styles.search}>
              <IconMenu/>
              <IconFilter/>
      
              
      
              
      
              <Text style={this.styles.inputText}>Meu App</Text>
      
            </View>
            <View style={this.styles.searchBar}>
      
             <IconSeach/>
              <Text style={this.styles.input}>pesquiza</Text>
      
              
               
            </View>
      
          </View>
        );
       
    }
}




