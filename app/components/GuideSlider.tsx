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

export interface GuideSliderProps extends ScrollViewProps {
  numSlides?: number
}

const width = Dimensions.get("window").width

export function GuideSlider(props: GuideSliderProps) {
  return (
    <ScrollView style={$slider} horizontal={true} pagingEnabled={true}>
      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          {({ pressed }) => (
            <>
              <View style={$slideLink}>
                <Text
                  preset="subheading"
                  style={[$slideLinkLabel, pressed && $slideLinkLabelPressed]}
                >
                  Learn
                </Text>
                <Icon
                  icon="caretRight"
                  size={14}
                  color={colors.palette.neutral100}
                  style={pressed && { opacity: 0.7 }}
                />
              </View>
              <Text style={$slideTitle} size="sm">
                Name of herp
              </Text>
              <Text style={$slideSubtitle} size="xs">
                Scientific name
              </Text>
            </>
          )}
        </Pressable>
      </View>

      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          {({ pressed }) => (
            <>
              <View style={$slideLink}>
                <Text
                  preset="subheading"
                  style={[$slideLinkLabel, pressed && $slideLinkLabelPressed]}
                >
                  Learn
                </Text>
                <Icon
                  icon="caretRight"
                  size={14}
                  color={colors.palette.neutral100}
                  style={pressed && { opacity: 0.7 }}
                />
              </View>
              <Text style={$slideTitle} size="sm">
                Name of herp
              </Text>
              <Text style={$slideSubtitle} size="xs">
                Scientific name
              </Text>
            </>
          )}
        </Pressable>
      </View>

      <View style={$slideWrapper}>
        <Pressable style={$slide}>
          {({ pressed }) => (
            <>
              <View style={$slideLink}>
                <Text
                  preset="subheading"
                  style={[$slideLinkLabel, pressed && $slideLinkLabelPressed]}
                >
                  Learn
                </Text>
                <Icon
                  icon="caretRight"
                  size={14}
                  color={colors.palette.neutral100}
                  style={pressed && { opacity: 0.7 }}
                />
              </View>
              <Text style={$slideTitle} size="sm">
                Name of herp
              </Text>
              <Text style={$slideSubtitle} size="xs">
                Scientific name
              </Text>
            </>
          )}
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
  marginBottom: -1 * (40 + spacing.lg),
  alignItems: "center",
  paddingBottom: spacing.lg,
}

const $slide: ViewProps = {
  height: 360,
  width: "100%",
  backgroundColor: colors.palette.neutral600,
  borderRadius: spacing.sm,
  padding: spacing.md,
  justifyContent: "flex-end",
}

const $slideLink: ViewProps = {
  flexDirection: "row",
  alignItems: "center",
  gap: spacing.xs,
  marginBottom: spacing.sm,
}

const $slideLinkLabel: TextProps = {
  color: colors.palette.neutral100,
}

const $slideLinkLabelPressed: TextProps = {
  opacity: 0.7,
}

const $slideTitle: TextProps = {
  color: colors.palette.neutral100,
}

const $slideSubtitle: TextProps = {
  color: colors.palette.neutral100,
}
