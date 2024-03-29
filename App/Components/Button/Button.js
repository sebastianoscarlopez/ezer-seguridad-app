import React from 'react'
import {TouchableOpacity, Text, View } from 'react-native'
import Label from '../Label/Label'
import styles from './ButtonStyle.js'

export default (props) => {
    const { onPress, style, textStyle, children, label } = props
    return (
        <View
            width={150}
            height={60}
        >
        <TouchableOpacity
            style={{...styles.button, ...style}}
            onPress={onPress}>
            <Text style={{...styles.text, ...textStyle}}>{children}</Text>
        </TouchableOpacity>
            { label && <Label>{label}</Label> }
        </View>
    )
}