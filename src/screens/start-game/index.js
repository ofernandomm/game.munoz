import React from 'react'
import{View,Text,TextInput,Button} from 'react-native'
import {styles} from './styles'

const StartGame=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Start Game</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='0'/>
            </View>
            <View style={styles.buttonContainer}> minuto 43
                <Button
                    title='Reset'
                    onPress={()=>null}
                    color='#A7BED3'
                />
            </View>
        </View>
    )

}

export default StartGame