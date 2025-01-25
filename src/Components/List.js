import { React, useState } from 'react';
import { View, Text, FlatList } from 'react-native'
import Lamp from 'react-native-vector-icons/MaterialCommunityIcons';
import Toggle from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';

export default function List() {
    const [toggleStates, setToggleStates] = useState({
        '1': false,
        '2': false,
        '3': false,
        '4': false
    });

    const data = [
        { key: '1', name: 'Room light 1' },
        { key: '2', name: 'Room light 2' },
        { key: '3', name: 'Gallery Light' },
        { key: '4', name: 'Gate Light' }
    ];
    const toggleLinearGradientColor = (key) => toggleStates[key] ? ['#09203F', '#537895'] : ['#808080', '#A9A9A9'];

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '100%', margin: 5 }}>
            <LinearGradient colors={toggleLinearGradientColor(item.key)} style={{ marginBottom: 10, padding: 10, width: "100%", height: 168, borderRadius: 10 }}>
                <View style={{ borderRadius: 50, backgroundColor: 'white', padding: 10, width: 52, justifyContent: 'center', alignItems: 'center' }}>
                    <Lamp name="coach-lamp" size={30} color="black" />
                </View>
                <Text style={{ color: 'white', marginTop: 10, fontSize: 12, marginTop: 18 }}>Working Space</Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                <Toggle
                    style={{ marginBottom: 15 }}
                    name={toggleStates[item.key] ? "toggle-on" : "toggle-off"}
                    size={30}
                    color={toggleStates[item.key] ? "#6CB4EE" : "#5D6D7E"}
                    onPress={() => setToggleStates(prevState => ({
                        ...prevState,
                        [item.key]: !prevState[item.key]
                    }))}
                />
            </LinearGradient>
        </View>
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={item => item.key}
            contentContainerStyle={{ marginTop: 10 }}
        />
    )
}