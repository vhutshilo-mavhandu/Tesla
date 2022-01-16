import React from 'react';
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
      position:'absolute',
      top:50,
      zIndex:100,
      justifyContent:'space-evenly',
      width:'100%',
      paddingHorizontal:20

    },
    logo:{
        width:100,
        height:20,
        resizeMode:'contain'
    }
});

export default styles;
