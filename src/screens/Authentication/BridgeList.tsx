import React from 'react'
import {
    View
} from 'react-native';
import { Layout, List, ListItem, Text } from '@ui-kitten/components'
import { StatusBar } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';

export default function BridgeList({ navigation }) {
    const bridges = useSelector(state => state.scan_bridge_list);

    return (
        <Layout style={{ flex: 1, marginTop: StatusBar.currentHeight, padding: 20 }}>
            <View>
                <Text category="h3">List of Bridges</Text>
                <List
                    style={{ marginVertical: 10 }}
                    data={bridges}
                    renderItem={({ item, index }) => (
                        <ListItem 
                            title={`${item.id}`}
                            description={`${item.internalipaddress}`} 
                            onPress={() => {
                                navigation.navigate('Pairing', { reference: item });
                            }}/>
                    )}
                />
            </View>
        </Layout>
    )
}