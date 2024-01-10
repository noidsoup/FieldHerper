import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"

import {
  Button,
  Header,
  HeaderStats,
  LifeListCard,
  LifeListCategories,
  RandomGuide,
  RecommendedSlider,
  Screen,
  Text,
} from "../../components"
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
      <Screen preset="scroll" contentContainerStyle={$container}>
        <HeaderStats herpCount={74} reptileCount={65} amphibianCount={9} />
        <RandomGuide />
        <Text style={$homeHeading}>Life List</Text>
        <LifeListCategories />
        <Text style={$homeHeading}>Field Guide</Text>
        <Text style={$homeHeading}>Recommended</Text>
        <RecommendedSlider />
        <View style={$helpButton}>
          <Button preset="filled">Help & Feedback</Button>
        </View>
      </Screen>
    </>
  )
}

const $container: ViewStyle = {}

const $homeHeading: TextStyle = {
  marginBottom: spacing.lg,
  marginHorizontal: spacing.md,
}

const $helpButton: ViewStyle = {
  padding: spacing.md,
}
