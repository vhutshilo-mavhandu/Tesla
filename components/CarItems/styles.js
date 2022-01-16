
import { StyleSheet,Dimensions } from "react-native"

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
     },
     image:{

     },
     titles:{
       marginTop:'30%',
       width:'100%',
       alignItems:'center',
   
     },
     title:{
      fontSize:40,
      fontWeight:'500',
     },
     subtitle:{
       fontSize:16,
       color:'#5c5e62'
     },
     image:{
       width:'100%',
       height:'100%',
       resizeMode:'cover',
       position:'absolute'
     },
     buttonContainer:{
       bottom:50,
       position:'absolute',
       width:'100%'
     },
     subtitleCTA:{
       textDecorationLine:'underline'
     }
});
export default styles;