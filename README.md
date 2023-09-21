# 2a-fase-senai
repositorio com os apps criados durante a segunda fase do curso de dev. de sistemas SENAI

instalar a biblioteca navigation:
npm install @react-navigation/native
----------------------------------------------------------------------
 Instalar as dependências:
 npx expo install react-native-screens react-native-safe-area-context
 ---------------------------------------------------------------------
  Instalar a biblioteca Native Stack Navigator:
  npm install @react-navigation/native-stack
  --------------------------------------------------------------------
  
  Criar a pasta ‘src’ na raiz do projeto
  Criar a pasta ‘pages’ dentro da 'src'
  Criar a pasta ‘Home’ dentro da ‘pages’
  - Criar o arquivo ‘index.js’ dentro da ‘Home'
    
    
    import React from "react";
    import { View, Text, StyleSheet } from "react-native";
    
    export default function Home(){
        return(
            <View style={styles.container}>
                <Text>Tela Home</Text>
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

    repita o processo com a pasta e arquivo 'Sobre'
    
   
