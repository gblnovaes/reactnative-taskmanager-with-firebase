import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave'
import firebase from '../../config/firebase.config'

export function NewTask({navigation }) {

    const [newTask, setNewTask] = useState('')


    function addTask() {
        if(newTask===''){
            alert("Preencha o campo descrição de tarefas")
            return
        }
         firebase.firestore().collection("tasks").add({
            description: newTask,
            status: false
        }).then(() => {
            setNewTask('')
            navigation.navigate('Task')
        })
       
    }

    return (
        <View style={styles.container}>
            <TextInput  value={newTask}
                onChangeText={text => setNewTask(text)} 
                placeholder="Digite uma descrição da Tarefa" 
                style={styles.inputDescription} />

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={addTask}>
                <FontAwesomeIcon style={styles.iconButton} icon={faSave} size={24} name='save'></FontAwesomeIcon>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    inputDescription: {
        height: 56,
        padding: 16,
        borderColor: '#f1f1f1',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 8,

    },
    buttonNewTask: {
        bottom: 30,
        left: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: '#f92e6a',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        shadowColor: '#888',
        elevation: 16,
        shadowRadius: 10
    },
    iconButton: {
        color: '#fff',
    },
})