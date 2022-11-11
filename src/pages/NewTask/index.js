import { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'

export function NewTask({route,navigation}){

    const [newTask,setNewTask] = useState([])
  

    return(
        <View style={styles.container}>
           <TextInput placeholder="Digite uma descrição da Tarefa" style={styles.inputDescription} />

           <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("Task") }>
                 <FontAwesomeIcon style={styles.iconButton} icon={faSave} size={24} name='save'></FontAwesomeIcon> 
             </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:8,
    },
    inputDescription:{
        height:56,
        padding:16,
        borderColor: '#f1f1f1',
        borderWidth:1,
        backgroundColor: '#fff',
        borderRadius:8,

    },
    buttonNewTask:{
        bottom:30,
        left:20,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#f92e6a',
        justifyContent:"center",
        alignItems: "center",
        position:"absolute",
        shadowColor:'#888',
        elevation:16,
        shadowRadius:10
    },
    iconButton:{
        color:'#fff',
    },
})