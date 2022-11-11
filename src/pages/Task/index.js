import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import firebase from '../../config/firebase.config'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'



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
            
            <FlatList showsVerticalScrollIndicator={false} data={tasks} renderItem= {
                ({item}) => { 
                    return(
                       <View style={styles.tasks}> 
                                <FontAwesomeIcon  color="#FC3333"  icon={faStar} size={23}></FontAwesomeIcon>
                                <Text onPress={() => navigation.navigate('Details')} style={styles.descriptionTask}>{item.description}</Text>
                                <TouchableOpacity style={styles.deleteTask} onPress={() =>deleteTask(item.id)}>
                                 <FontAwesomeIcon color="#FC3333" icon={faTrash} size={18} name='remove'></FontAwesomeIcon> 
                                 
                             </TouchableOpacity>
                       </View>
                    )
                }
              }/>

             <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask",{
                    id: 1,
                    description: 2
                })}>
                <Text style={styles.iconButton}>+</Text>
             </TouchableOpacity>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 8,
        marginLeft:8,
        marginRight:8,
        backgroundColor:'#f3f3f3'
    },
    tasks:{
        height:80,
        backgroundColor:'#fff',
        margin:4,
        padding:16,
        borderRadius:3,
        flexDirection:'row',
        justifyContent:'space-between',
        shadowColor:'#151515',
        alignItems:'center',
        elevation: 5,
        
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
        fontSize:24,
        fontWeight:'300'
    },
    descriptionTask:{
        width: '75%',
        borderStartColor:'#99cc99'
    },
    deleteTask:{
       

    }
})