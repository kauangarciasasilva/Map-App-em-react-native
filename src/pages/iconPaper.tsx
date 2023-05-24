import { Component } from "react";
import {StyleSheet,  TouchableOpacity, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
export default class IconPaper extends Component {
    
    private handleSearch = () => {
     
    };
    private styles = StyleSheet.create({
      
      searchpaper:{
        top:1,
        left:295,
        height:20,
      },
      

    });
    render() {
        return (
           <View>
                <TouchableOpacity style={this.styles.searchpaper} onPress={this.handleSearch}>
              <Entypo name="paper-plane" size={24} color="black" />
              </TouchableOpacity>
           </View>
        );
    }
}

