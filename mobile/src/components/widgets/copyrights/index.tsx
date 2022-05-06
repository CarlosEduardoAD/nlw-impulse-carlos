import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyrights() {
  return (
    <View>
        <Text style={styles.text}>
            Feito com a ajuda da Rocketseat por Carlos Eduardo
        </Text>
    </View>
  );
}