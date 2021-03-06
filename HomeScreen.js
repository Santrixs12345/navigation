import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title='Ir a Detalle'
                onPress={() => navigation.navigate('Details')}
            />
            
        </View>
    )
}