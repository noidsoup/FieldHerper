import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { Button, FlatList, View, ViewStyle } from "react-native"

import { Header, Screen, Text } from "../../components"
import { firebase } from "../../firebase/firebaseConfig.js"
import { colors, spacing } from "../../theme"

interface FieldGuideScreenProps extends AppStackScreenProps<"FieldGuide"> {}

export const FieldGuideScreen: FC<FieldGuideScreenProps> = function FieldGuideScreen(_props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  const { navigation } = _props

  return (
    <>
      <Header title="Field Guide" />
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <View>
          <Text>I'm the field guide screen. I might not make it in the first version!</Text>
        </View>
      </Screen>
    </>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
  height: "100%",
}
