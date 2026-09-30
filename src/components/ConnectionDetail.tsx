import React from 'react';
import { View, Text } from 'react-native';
import { getStatusColor } from './Utils';
import { getLocalisation } from './localisation';
type ConnectionDetailProps = {
    network: string;
    type: string;
    status: string;
}
const ConnectionDetail = (props: ConnectionDetailProps) => {
    return (
        <View>
            <Text>{getLocalisation.connectionDetail.network}: {props.network}</Text>
            <Text>{getLocalisation.connectionDetail.type} : {props.type}</Text>
            <Text>
                {getLocalisation.connectionDetail.status}:{' '}
                <Text style={{ color: getStatusColor(props.status) }}>
                    {props.status}
                </Text>
            </Text>
        </View>
    );
};

export default ConnectionDetail;