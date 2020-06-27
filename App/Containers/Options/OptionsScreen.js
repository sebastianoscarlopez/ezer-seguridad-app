import React from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Text, View } from 'react-native'
import { OptionButton } from 'App/Components'
import { Helpers, Images } from 'App/Theme'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'

const OptionsScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))

  return (
    <ContainerScreen>
      <View style={Helpers.fillRowCenter}>
        <OptionButton
          icon={Images.visit}
          title="Visitas"
          description="Podra crear, modificar y borrar datos."
          onPress={() => navigate('SearchScreen')}
        />
      </View>
      <View style={Helpers.fillRowCenter}>
        <OptionButton
          icon={Images.search}
          title="Lotes - Listas"
          description="Busqueda de lotes y listas"
          onPress={() => navigate('RegisterScreen')}
        />
      </View>
      <View style={Helpers.fillRowCenter}>
        <OptionButton
          icon={Images.profile}
          title="Datos Personales"
          description="Podra dar de alta, modificar y borrar datos"
          onPress={() => navigate('ProfileScreen')}
        />
      </View>
      <View style={Helpers.fillRowCenter}>
        <OptionButton
          icon={Images.password}
          title="Cambiar Clave"
          description=""
          onPress={() => navigate('VisitScreen')}
        />
      </View>
    </ContainerScreen>
  )
}

export default OptionsScreen
