import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { GuideSlider, Header, HeaderStats, Screen, Text } from "../../components"
import { firebase } from "../../firebase/firebaseConfig.js"
import { colors, spacing } from "../../theme"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = function HomeScreen(_props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  const { navigation } = _props

  return (
    <>
      <Header title="Field Herper" />
      <Screen preset="scroll" safeAreaEdges={["bottom"]} contentContainerStyle={$container}>
        <HeaderStats herpCount={74} reptileCount={65} amphibianCount={9} />
        <GuideSlider numSlides={3} />
      </Screen>
    </>
  )
}

const $container: ViewStyle = {}
