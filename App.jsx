import React, { useState , useReducer } from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList,ScrollView } from 'react-native';
import { out } from 'react-native/Libraries/Animated/Easing';
import InputItem from './Components/InputItem';







export default function App() {


const array  = [
  {
  question: "Example Question",
  answers: ["Option 1","Option 2","Option 3", "Option 4"],
  correctIndex: 2
  },
  {
  question: "Everything is react is a ",
  answers: ["Module","Component","Hooks", "Template"],
  correctIndex: 1
  },
  {
  question: "’1’ + 1 ",
  answers: ["11","1","0", "2"],
  correctIndex: 0
  },
  {
  question: "'5.0' = = = 5 ",
  answers: ["True","False"],
  correctIndex: 1
  },
  {
  question: "Is JavaScript case sensitive language ",
  answers: ["Yes","No"],
  correctIndex: 0
  },
  {
  question: "(['First','Second','Third'].join(' - ')",
  answers: ["First Second Third","First,Second,Third", "First-SecondThird"],
  correctIndex: 2
  } ,
  {
  question: "How many values are available for flexDirection?",
  answers: ["2","4", "5"],
  correctIndex: 1
  },
  {
  question: "How many built-in hooks are available in react-native?",
  answers: ["2","4", "5", "3"],
  correctIndex: 2
  },
  {
  question: "Which command is used to make a directory git enabled?",
  answers: ["git commit","git init", "git push", "git pull"],
  correctIndex: 1
  } ,
  {
  question: "What is useEffect used for?",
  answers: ["Perform Side Effects","Nothing", "Update UI", "ManageState"], correctIndex: 0
  }
 ]


 const[score ,  setscore]  =useState(0)
 const [count , setcount]  = useState(0)
 const checker = (enter)=> {
   
  setcount(enter)}
function scoring() 
{
    setscore(score+1);  
}

if (count!==10){
  return (
    <View style={styles.screen}>
      <View style={styles.inputcon}> 

        <View><Text style = {styles.counter}>{count+1} / 10</Text></View>
       <View><Text  style={styles.question}>{array[count].question}</Text></View>
       
       <View><FlatList data={array[count].answers}  renderItem={(item)=> <InputItem fan = {checker} nam ={item.item} score= {scoring} listval= {item.index}  array= {array} count={count} />}   /></View>
       




      
      </View>
      


    </View>
  );
}

else {
  return (
   <View style={styles.screen}>
    <View style={styles.inputcon2}>
    <Text style={styles.result}>Result IS</Text>
     <Text style={styles.counter}>{score} is score out of 10</Text></View>
     
   </View>
  );
}


}


//<FlatList data={array}  renderItem={(item)=><Text> {item.item.question} --- {item.item.answers} ' '</Text>}   />
const styles = StyleSheet.create({

  screen: {
    padding: 50,
    display:'flex',
    flex:1,
    flexDirection:'column',
    backgroundColor:'lightgrey',
  },
  text: {
    padding: 10, borderWidth: 1,width:'80%',
    

  },
  inputcon : {
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"space-between"
  },
  upto :{
    padding:10,
    borderColor:'black',
    borderWidth:1,
    margin:10     
  },
  btn :{
    marginBottom:'10' ,
    padding:'20',

  },
  question : {
    fontSize:35,
    fontWeight:'bold'
  },
  counter : {
     fontSize:25,
     fontWeight:'500',
     color:'red',
  },  
  inputcon2 : {
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
    flex:1,
   },
   result : {
    fontSize:25,
    fontWeight:'500',
    color:'darkblue',
 }, 



});