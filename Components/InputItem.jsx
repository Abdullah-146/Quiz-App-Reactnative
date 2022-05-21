
import React,{useState, useReducer, useEffect, useRef, useMemo} from 'react';

import {StyleSheet, Modal, View, Text, TextInput, Button , ScrollView , Pressable} from 'react-native';

const InputItem = (props) => {

  const [count , setcount]  = useState(0)
  const[score ,  setscore]  =useState(0)
  const checker = ()=> {
    
   var correct = props.array[props.count].correctIndex;

    
    if(props.listval === correct){

      props.score()
    }
    props.fan(props.count+1)
  
  
    
    
   
  }


  return (
  <View><Pressable style={styles.pressit} onPress={checker}>
<Text style={{textAlign:'center'}}>{props.nam}</Text></Pressable></View>
                


  );
}


const styles = StyleSheet.create({
    InputView:{
      
    },
    pressit:{
       backgroundColor: 'lightgrey',
       padding:20 ,
       marginBottom:10,
       borderRadius:20,
       width:180,
       borderWidth:2,
       
    }
});


export default InputItem;