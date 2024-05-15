import React from "react"
import {
  Dimensions,
  Image,
  ImageStyle,
  Pressable,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native"

import { colors, spacing, typography } from "../theme"
import { Text } from "./Text"

const placeholderImage = require("../../assets/images/placeholder.png")

export interface LifeListCardProps extends ViewProps {
  title?: string
  subtitle?: string
  imageURL?: string
  scientificName?: string
  count?: number
  styleOverride?: ViewStyle
  onPress?: () => void
  genus?: string
  kingdom?: string
  phylum?: string
  threat_statuses?: any[]
  vernacular_names?: any[]
  notes?: string
}

export function LifeListCard(props: LifeListCardProps) {
  const { title, subtitle, imageURL, count, styleOverride } = props

  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [$lifeListCard, styleOverride, pressed && $lifeListCardPressed]}
    >
      <Image source={imageURL ? { uri: imageURL } : placeholderImage} style={$lifeListCardImage} />
      <View style={$lifeListCardContent}>
        <View style={$cardHeading}>
          <Text text={title} numberOfLines={1} ellipsizeMode="tail" style={$lifeListCardTitle} />
          {!!count && <Text text={count.toString()} style={$cardCount} />}
        </View>
        {subtitle && (
          <Text
            text={subtitle}
            numberOfLines={1}
            ellipsizeMode="tail"
            style={$lifeListCardSubtitle}
          />
        )}
      </View>
    </Pressable>
  )
}
const width = Dimensions.get("window").width
const $lifeListCard: ViewStyle = {
  width: (width - spacing.md * 3) / 2,
  borderRadius: spacing.sm,
  backgroundColor: colors.palette.neutral100,
  shadowColor: colors.palette.neutral900,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
  elevation: 3,
}

const $lifeListCardPressed: ViewStyle = {
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
}

const $lifeListCardContent: ViewStyle = {
  padding: spacing.xs,
}

const $lifeListCardImage: ImageStyle = {
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
  fontFamily: typography.primary.bold,
  fontSize: 15,
}

const $cardCount: TextStyle = {
  fontFamily: typography.primary.medium,
  fontSize: 15,
  paddingLeft: spacing.xs,
}

const $lifeListCardSubtitle: TextStyle = {
  fontFamily: typography.primary.regularItalic,
  fontSize: 13,
  lineHeight: 18,
  color: colors.palette.neutral600,
}
