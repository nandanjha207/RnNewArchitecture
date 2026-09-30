import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
type ButtonProps ={
    title: string;
    onPress?: () => void;
}
const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        width: '50%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
