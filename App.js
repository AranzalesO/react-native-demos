import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const [pressedCount, setPressedCount] = useState(0);
  const [password, setPassword] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 16,
        }}>
          <Text style={{ marginVertical: 16 }}>
            {password ? `Your password is ${password}` : 'Type here your password so you can see what you type'}
          </Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <Text style={{ margin: 16 }}>
          {pressedCount > 0
            ? `The button was pressed ${pressedCount} times!`
            : 'The button isn\'t pressed yet'
          }
        </Text>
        <Button
          title='Send the form up to 3 times'
          onPress={() => setPressedCount(pressedCount + 1)}
          disabled={pressedCount >= 3 ? true : false}
        />
      </View>
    </View>

  );
};

export default PizzaTranslator;