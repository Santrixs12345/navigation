import React from 'react';
import {Button, View, Text} from 'react-native';

function DetailScreen(navigation) {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'green'}}>
            <Text>Detail Screen</Text>
            <Button 
                title='Ir a Detalle'
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

export default DetailScreen;