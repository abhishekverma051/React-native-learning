import { Image, StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ContactList() {
    const initialData = [
        {
            uid: 1,
            name: 'Abhishek',
            status: 'Active',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 2,
            name: 'Parnam',
            status: 'seen 2 minutes ago',
            imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 3,
            name: 'Anurag',
            status: 'Blocked',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 4,
            name: 'Naruto',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 5,
            name: 'Baruto',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 6,
            name: 'Naruto',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 7,
            name: 'USer',
            status: 'Active',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1710736885719-20d245cceae3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 8,
            name: 'User2',
            status: 'seen 2 minutes ago',
            imageUrl: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 9,
            name: 'USer3',
            status: 'Blocked',
            imageUrl: 'https://plus.unsplash.com/premium_photo-1682125729312-78f16e6e6f38?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            uid: 10,
            name: 'User4',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 11,
            name: 'User5',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
            uid: 12,
            name: 'User6',
            status: 'typing...',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
    const [data, setData] = useState(initialData);

    const handlePush = () => {
        const newItem = {
            uid: data.length + 1,
            name: `User ${data.length + 1}`,
            status: 'new',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4'
        };
        setData([...data, newItem]);
    };

    const handlePop = () => {
        setData(data.slice(0, -1));
    };

    const handleShift = () => {
        setData(data.slice(1));
    };

    const handleUnshift = () => {
        const newItem = {
            uid: data.length + 1,
            name: `User ${data.length + 1}`,
            status: 'new',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4'
        };
        setData([newItem, ...data]);
    };

    const handleDelete = (uid) => {
        setData(data.filter(item => item.uid !== uid));
    };

    const renderItem = ({ item }) => (
        <View style={styles.userCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
            <View>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userStatus}>{item.status}</Text>
            </View>
            <TouchableOpacity
                style={styles.crossContainer}
                onPress={() => handleDelete(item.uid)}
            >
                <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>Chats</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.uid.toString()}
                contentContainerStyle={styles.container}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePush}>
                    <Text style={styles.buttonText}>Push</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePop}>
                    <Text style={styles.buttonText}>Pop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleShift}>
                    <Text style={styles.buttonText}>Shift</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleUnshift}>
                    <Text style={styles.buttonText}>Unshift</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    container: {
        paddingHorizontal: 16,
        paddingBottom: 4,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#20b2aa',
        padding: 18,
        paddingTop: 10,
        paddingVertical: 20,
        borderRadius: 10,
        position: 'relative',
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    userStatus: {
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        borderRadius: 10,
        borderColor: 'black',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: '#4682b4',
        borderRadius: 5,
        marginHorizontal: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    crossContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
});
