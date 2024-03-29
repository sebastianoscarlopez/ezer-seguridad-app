import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { TextInput, Text, Image, View, Platform } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig, Button, Logo } from 'App/Components'
import {
  registerLegend_1,
  registerLegend_2,
  registerLegend_3,
  documentLabel,
  eMailLabel,
  allotmentLabel,
  acceptButton,
} from 'App/Assets/Strings'
import styles from './RegisterScreenStyle'
import { Images, Colors } from 'App/Theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import UserActions from 'App/Stores/User/Actions'
import { SafeAreaView } from 'react-native-safe-area-context'

const RegisterScreen = (props) => {
  const dispatch = useDispatch()
  const idApp = useSelector(({ user: { idApp } }) => idApp)
  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  const [document, setDocument] = useState('')
  const [eMail, setEMail] = useState('')
  const [allotment, setAllotment] = useState('')
  const handlerEnviar = () => dispatch(UserActions.register(idApp, document, eMail, allotment))

  return (
    <SafeAreaView style={styles.container}>
      {!isKeyboardVisible &&
        <View style={{ flex: 1, paddingTop: 0 }}>
          <Logo />
        </View>
      }
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <Text style={styles.legend}>{registerLegend_1}</Text>
          <Text style={{ ...styles.legend, color: Colors.disabled }}>{registerLegend_2}</Text>
          <Text style={styles.legend}>{registerLegend_3}</Text>
          <View style={{ height: 10 }}></View>
        </View>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <View style={styles.inputContainer}>
            <InputFieldBig keyboardType='numeric' maxLength={10} placeholder={documentLabel} style={styles.input} value={document} onChangeText={setDocument} rounded />
          </View>
          <View style={styles.inputContainer}>
            <InputFieldBig placeholder={eMailLabel} value={eMail} onChangeText={setEMail} rounded />
          </View>
          <View style={styles.inputContainer}>
            <InputFieldBig placeholder={allotmentLabel} value={allotment} onChangeText={setAllotment} rounded />
          </View>
        </View>
        <View style={styles.sendContainer} >
          <TouchableOpacity onPress={handlerEnviar} style={styles.touchSend} >
            <Image source={Images.send} resizeMode="contain" style={styles.send} />
          </TouchableOpacity>
        </View>
        {isKeyboardVisible && Platform.OS === 'ios' &&
          <View
            style={{
              flex: 0.9,
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          />
        }
      </View>
    </SafeAreaView>
  )
}
export default RegisterScreen
