import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

//teste

export default function Home(){

    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button 
                title="Ir para Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />

            <Button 
            title="Ir para Profile"
            onPress={()=> navigation.navigate('Profile') }
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})