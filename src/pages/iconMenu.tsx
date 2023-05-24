import { Component } from "react";
import {StyleSheet,  TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class IconMenu extends Component {
    
    private handleSearch = () => {
     
    };
    private styles = StyleSheet.create({
         searchmenu:{
            top:1,
            left:20,
            height:20,
          },
      

    });
    render() {
        return (
           <View>
                <TouchableOpacity style={this.styles.searchmenu} onPress={this.handleSearch}>
                <MaterialIcons name="menu" size={24} />
              </TouchableOpacity>
           </View>
        );
    }
}

