import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import firebase from '../../config/firebase.config'


export function Task({navigation}){
    const [tasks,setTasks] = useState([])

    function deleteTask(id){
        firebase.firestore().collection("tasks").doc(id).delete()
    }

    useEffect(() =>{
        firebase.firestore().collection("tasks").onSnapshot((query) =>{
            let list = []
            query.forEach((doc) => {
                list.push({...doc.data(),id: doc.id})
            })
            setTasks(list)
        })
    },[])

    return(
        <View style={styles.container}>
            
            <FlatList showsHorizontalScrollIndicator={false} data={tasks} renderItem= {
                ({item}) => { 
                    return(
                       <View style={styles.tasks}> 

                            <Text onPress={() => navigation.navigate('Details')} style={styles.descriptionTask}>{item.description}</Text>
                             <TouchableOpacity style={styles.deleteTask} onPress={() =>deleteTask(item.id)}>
                               <Text>remover</Text>
                                 
                             </TouchableOpacity>
                       </View>
                    )
                }
              }/>

             <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}>
                <Text style={styles.iconButton}>+</Text>
             </TouchableOpacity>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 20,
        backgroundColor:'#999999'
    },
    tasks:{
        backgroundColor:'#f5f5f5',
        margin:6,
        padding:16,
        borderRadius:4,
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    buttonNewTask:{
        bottom:30,
        left:20,
        width:60,
        height:60,
        borderRadius:50,
        backgroundColor:'#ff0000',
        justifyContent:"center",
        alignItems: "center",
        position:"absolute"
    },
    iconButton:{
        color:'#fff',
        fontSize:24,
        fontWeight:"bold"
    },
    descriptionTask:{
        width: '75%',
        borderStartColor:'#99cc99'
    },
    deleteTask:{
        width:'15%',

    }
})