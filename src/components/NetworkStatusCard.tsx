import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStatusColor } from './Utils';
import { getLocalisation } from './localisation';
type NetworkStatusCardProps = {
    wifiStatus: string;
    wifiName: string;
}

const NetworkStatusCard = (props: NetworkStatusCardProps) => {
    return (
        <View style={styles.subContainer}>
            <Text>
                {getLocalisation.networkStatusCard.wifiStatus} :{' '}
                <Text style={{ color: getStatusColor(props.wifiStatus) }}>
                    {props.wifiStatus}
                </Text>
            </Text>
            <Text>{getLocalisation.networkStatusCard.wifiName}: {props.wifiName} </Text>
        </View>
    );
};


export default NetworkStatusCard;
const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 30,
        marginTop: 10,
        borderRadius: 10,
        width: '90%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
});