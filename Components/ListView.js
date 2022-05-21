import React from 'react';
import {StyleSheet, Modal, View, Text, TextInput, Button, FlatList} from 'react-native';

const ListView = (props) => {
  return (
        <View >
            <FlatList data={props.data} renderItem={item=><View style={styles.container}><Text>{item.item.name}    </Text><Text>{item.item.age}    </Text><Text>{item.item.marks}    </Text></View>}/>            
        </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    }

});

export default ListView;