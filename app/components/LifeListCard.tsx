import React from "react"
import { Dimensions, Image, ImageStyle, TextStyle, View, ViewProps, ViewStyle } from "react-native"

import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"

const placeholderImage = require("../../assets/images/placeholder.png")

export interface LifeListCardProps extends ViewProps {
  title?: string
  subtitle?: string
  count?: number
  styleOverride?: ViewStyle
}

export function LifeListCard(props: LifeListCardProps) {
  const { title, subtitle, count, styleOverride, ...ViewProps } = props

  return (
    <View style={[$lifeListCard, styleOverride]}>
      <Image source={placeholderImage} style={$lifeListCardImage} />
      <View style={$lifeListCardContent}>
        <View style={$cardHeading}>
          <Text text={title} numberOfLines={1} ellipsizeMode="tail" style={$lifeListCardTitle} />
          <Text text={count} style={$cardCount} />
        </View>
        <Text
          text={subtitle}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={$lifeListCardSubtitle}
        />
      </View>
    </View>
  )
}

const width = Dimensions.get("window").width
const $lifeListCard: ViewStyle = {
  width: width * 0.48,
  borderRadius: spacing.sm,
  backgroundColor: colors.palette.neutral100,
  shadowColor: colors.palette.neutral900,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
  elevation: 5,
  minHeight: 166,
}

const $lifeListCardContent: ViewStyle = {
  padding: spacing.xs,
  paddingBottom: spacing.sm,
}

const $lifeListCardImage: ViewStyle = {
  width: "100%",
  height: 120,
  borderTopLeftRadius: spacing.sm,
  borderTopRightRadius: spacing.sm,
}

const $cardHeading: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $lifeListCardTitle: TextStyle = {
  fontFamily: typography.primary.medium,
  size: 15,
}

const $cardCount: TextStyle = {
  fontFamily: typography.primary.medium,
  size: 15,
  paddingLeft: spacing.xs,
}

const $lifeListCardSubtitle: TextStyle = {
  marginTop: spacing.xxs,
  fontStyle: "italic",
  color: colors.palette.neutral600,
}
