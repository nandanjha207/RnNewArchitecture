import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NetworkStatusCard from './components/NetworkStatusCard';
import { EdgeInsets } from 'react-native-safe-area-context';
import ConnectionDetail from './components/ConnectionDetail';
import Button from './components/buttons';
import { getLocalisation } from './components/localisation';
//import { NativeModules } from 'react-native'; // old legacy way to access native modules
import  NetworkModule from './turboModuleFiles/NativeNetworkModule';

//const {NetworkModule} = NativeModules;
type NetworkUIProps = {
    safeAreaInsets: EdgeInsets;
}
type NetworkInfo = {
    wifiStatus: string;
    wifiName: string;
    network: string;
    type: string;
};



const NetworkUI = (props: NetworkUIProps) => {
    const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
        wifiStatus: 'NA',
        wifiName: 'NA',
        network: 'NA',
        type: 'UnKnown',
    })

    useEffect(() => {
        console.log('NetworkUI mounted');
        return () => {
            console.log('NetworkUI unmounted');
        }
    }, [networkInfo]);

    const handleNetworkRefresh = async () => {
        try {
            const result = await NetworkModule.sayHello();
            console.log('result', result);
        } catch (error) {
            console.log('Error in handleNetworkRefresh',error);
            
        } 
    }

    // async is required in this case because startMonitoring is a Promise.
    const handleStartMonitoring = async() => {
        try {
            const result = await NetworkModule.startMonitoring();
            console.log('Startresult', result);
        } catch (error) {
            console.log();
            
        }
    }
    // async is not required in this case because stopMonitoring is a void function.
    const handleStopMonitoring = () => {
        try {
            console.log('Stop result called');
        } catch (error) {
            console.log();
            
        }
    }

    return (
        <View style={[styles.parentContainer, props.safeAreaInsets,]}>
            <NetworkStatusCard
                wifiStatus={networkInfo.wifiStatus}
                wifiName={networkInfo.wifiName}
            />
            <Text style={[styles.titleText, styles.marginTop]}>Connection Details: </Text>
            <View style={[styles.subContainer, styles.marginTop]}>
                <ConnectionDetail
                    network={networkInfo.network}
                    type={networkInfo.type}
                    status={networkInfo.wifiStatus}
                />
            </View>
            <Button
                title={getLocalisation.buttons.refresh}
                onPress={handleNetworkRefresh}
            />
            <Button
                title={getLocalisation.buttons.startMonitoring}
                onPress={handleStartMonitoring}
            />
            <Button
                title={getLocalisation.buttons.stopMonitoring}
                onPress={handleStopMonitoring}
            />

        </View>
    );
};

export default NetworkUI;

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        backgroundColor: 'white',
        paddingRight: 10,
        paddingLeft: 30,
        borderRadius: 10,
        width: '90%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    marginTop: {
        marginTop: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});