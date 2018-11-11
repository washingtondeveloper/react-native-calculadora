import React from 'react'
import { 
    StyleSheet, 
    Text, 
    Dimensions, 
    TouchableHighlight 
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#eee',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#999'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: 'coral'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTrible: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.trible) stylesButton.push(styles.buttonTrible)
    if(props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() =>props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}