import React, { useEffect, useCallback } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import { View, StatusBar, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SearchForBridge } from '../../redux/action';

export default function Welcome() {
    const bridges = useSelector(state => state.scan_bridge_list);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();
    const updatelight = useCallback(() => dispatch(SearchForBridge()), [dispatch]);


    useEffect(() => {
        if (bridges.length > 0) {
            Alert.alert(
                "Information",
                `${bridges.length} bridge(s) found.`,
                [
                    {
                        text: "OK",
                        style: "default"
                    }
                ],
                {
                    cancelable: false
                }
            )
        }
    }, [bridges]);


    return (
        <Layout style={{ flex: 1, marginTop: StatusBar.currentHeight, padding: 40 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text category="h2">Lighue</Text>
                <Text category="p1">Enjoy the smart experience</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 30, left: 30, right: 30 }}>
                <View style={{ marginVertical: 5 }}>
                    <Button status="info" onPress={() => updatelight()} disabled={loading}>{ loading ? "Searching..." : "Search for Bridge" }</Button>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Button status="control">Manual Search</Button>
                </View>
            </View>
        </Layout>
    )
}