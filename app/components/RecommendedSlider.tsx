import React from "react"
import {
  Dimensions,
  Pressable,
  ScrollView,
  ScrollViewProps,
  TextProps,
  View,
  ViewProps,
} from "react-native"

import { colors, spacing } from "../theme"
import { Icon } from "./Icon"
import { Text } from "./Text"

export interface RecomendedSliderProps extends ScrollViewProps {
  numSlides?: number
}

const width = Dimensions.get("window").width

export function RecommendedSlider(props: RecommendedSliderProps) {
  return (
    // This should actually be a FlatList
    // Use react-native-animated-pagination-dots
    <ScrollView style={$slider} horizontal={true} pagingEnabled={true}>
      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          {({ pressed }) => (
            <>
              <View style={$imagePlaceholder}></View>
              <Text preset="subheading" style={$slideSubtitle} text="Herping Guidebook" />
              <Text style={$slideTitle} size="sm">
                The Field Herping Guide
              </Text>
              <Text style={$slideBody} size="xs">
                A highly-recommended herping guide that explores the fun and fascinating world of
                observing herpetofauna across North America.
              </Text>
            </>
          )}
        </Pressable>
      </View>
    </ScrollView>
  )
}

const $slider: ViewProps = {}

const $slideWrapper: ViewProps = {
  width: width,
  paddingHorizontal: spacing.md,
  alignItems: "center",
  paddingBottom: spacing.lg,
}

const $slide: ViewProps = {
  width: "100%",
}

const $imagePlaceholder: ViewProps = {
  width: "100%",
  height: 260,
  backgroundColor: colors.palette.neutral600,
  marginBottom: spacing.sm,
  borderRadius: spacing.sm,
}

const $slideSubtitle: TextProps = {
  color: colors.palette.neutral800,
}

const $slideTitle: TextProps = {}
const $slideBody: TextProps = {
  color: colors.palette.neutral500,
}
