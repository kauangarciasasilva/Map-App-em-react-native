import { Component } from "react";
import {StyleSheet,  TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
export default class IconMenu extends Component {
    
    private handleSearch = () => {
     
    };
    private styles = StyleSheet.create({
      searchfilter:{
        top:1,
        left:300,
        height:20,
      },
      

    });
    render() {
        return (
           <View>
                <TouchableOpacity style={this.styles.searchfilter} onPress={this.handleSearch}>
              <AntDesign name="filter" size={24} color="black" />
              </TouchableOpacity>
           </View>
        );
    }
}

