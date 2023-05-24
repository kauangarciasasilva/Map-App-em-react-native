import { Component } from "react";
import {StyleSheet,  TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class IconSeach extends Component {
    
    private handleSearch = () => {
     
    };
    private styles = StyleSheet.create({
      
  searchlupa:{
    top:1,
    left:5,
    height:20,
  },
      

    });
    render() {
        return (
           <View>
                <TouchableOpacity style={this.styles.searchlupa} onPress={this.handleSearch}>
                <MaterialIcons name="search" size={24} />
              </TouchableOpacity>
           </View>
        );
    }
}

