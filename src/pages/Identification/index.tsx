import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Platform
} from 'react-native';
import {Button} from '../../components/Button';
import styles from './styles';

export function Identification(){
  const [showFocus, setShowFocus] = useState(false);
  const [name, setName] = useState<string>();

  function handleBlur(){
    if(!!name)
      setShowFocus(true);
    else
      setShowFocus(false);
  }

  function handleFocus(){
    setShowFocus(true);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>{ !!name ? '😃' : '😉'}</Text>

          <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>

          <TextInput
            style={[styles.nameInput, showFocus && (styles.inputFocus)]}
            onBlur={handleBlur}
            onFocus={handleFocus}
            placeholder="Digite um nome"
            onChangeText={setName}
            autoCorrect={false}
          />
          
          <View style={styles.footer}>
            <Button text="Confirmar" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};