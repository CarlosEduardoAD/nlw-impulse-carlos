import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { styles } from './styles';
import { Trash } from 'phosphor-react-native';
import { theme } from '../../../theme';

interface Props{
    screenshot : string | null;
    onTakeShot : () => void;
    onRemoveShot : () => void;
}

export function Screenshot({screenshot, onTakeShot, onRemoveShot} : Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={screenshot ? onRemoveShot : onTakeShot}>
        {screenshot ? (<Trash size={22} color={theme.colors.surface_secondary} weight="fill" style={styles.removeIcon}></Trash>) : (<Trash size={24} color={theme.colors.surface_secondary} weight="bold"></Trash>)}

    </TouchableOpacity>
  );
}