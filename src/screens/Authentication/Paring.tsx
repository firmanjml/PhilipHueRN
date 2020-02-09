import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'react-native';

export default function Pairing ({ route }) {
    const { reference } = route.params;

    return (
        <Layout style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <Text>Pairing Sequence....</Text>
            <Text>{reference.id}</Text>
            <Text>{reference.internalipaddress}</Text>
        </Layout>
    )
}