import React from "react"
import {
  Dimensions,
  Pressable,
  ScrollView,
  ScrollViewProps,
  Text,
  View,
  ViewProps,
} from "react-native"

import { colors, spacing } from "../theme"

export interface GuideSliderProps extends ScrollViewProps {
  numSlides?: number
}

const width = Dimensions.get("window").width

export function GuideSlider(props: GuideSliderProps) {
  return (
    <ScrollView style={$slider} horizontal={true} pagingEnabled={true}>
      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          <Text preset="subheading">Learn</Text>
          <Text preset="heading">Name of herp</Text>
          <Text>Scientific name</Text>
        </Pressable>
      </View>

      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          <Text preset="subheading">Learn</Text>
          <Text preset="heading">Name of herp</Text>
          <Text>Scientific name</Text>
        </Pressable>
      </View>

      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          <Text preset="subheading">Learn</Text>
          <Text preset="heading">Name of herp</Text>
          <Text>Scientific name</Text>
        </Pressable>
      </View>

      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          <Text preset="subheading">Learn</Text>
          <Text preset="heading">Name of herp</Text>
          <Text>Scientific name</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const $slider: ViewProps = {
  backgroundColor: colors.palette.neutral800,
  borderBottomColor: colors.palette.neutral100,
  borderBottomWidth: 40,
}

const $slideWrapper: ViewProps = {
  width: width,
  paddingHorizontal: spacing.md,
  marginBottom: -40,
  alignItems: "center",
  paddingBottom: spacing.lg,
}

const $slide: ViewProps = {
  height: 360,
  width: "100%",
  backgroundColor: colors.palette.neutral500,
  borderRadius: spacing.sm,
  padding: spacing.md,
  justifyContent: "flex-end",
}
