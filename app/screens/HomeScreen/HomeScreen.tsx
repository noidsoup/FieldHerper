import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import { Header, HeaderStats, Screen, Text } from "../../components"
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
        <HeaderStats />
        <View style={$headerStats}>
          <View style={$stat}>
            <Text preset="subheading" size="xs" style={$statHeading}>
              All herps
            </Text>
            <Text preset="heading" size="xl" style={$statValue}>
              0
            </Text>
          </View>
          <View style={[$stat, $statMiddle]}>
            <Text preset="subheading" size="xs" style={$statHeading}>
              All herps
            </Text>
            <Text preset="heading" size="xl" style={$statValue}>
              0
            </Text>
          </View>
          <View style={$stat}>
            <Text preset="subheading" size="xs" style={$statHeading}>
              All herps
            </Text>
            <Text preset="heading" size="xl" style={$statValue}>
              0
            </Text>
          </View>
        </View>
      </Screen>
    </>
  )
}

const $container: ViewStyle = {}

const $headerStats: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  flexDirection: "row",
  justifyContent: "space-around",
}

const $stat: ViewStyle = {
  alignItems: "center",
  flex: 1,
  paddingBottom: spacing.md,
}

const $statMiddle: ViewStyle = {}

const $statHeading: TextStyle = {
  color: colors.palette.neutral100,
}

const $statValue: TextStyle = {
  color: colors.palette.neutral100,
}
