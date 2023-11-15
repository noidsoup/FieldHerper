import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { Button, FlatList, View, ViewStyle } from "react-native"

import { Header, Screen, Text } from "../../components"
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
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <View>
          <Text>
            I'm the main screen. Someday I'll be full of cards, and maybe even a nifty carousel!
          </Text>
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
