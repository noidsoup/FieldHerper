import React from "react"
import { View, ViewProps } from "react-native"

import { colors, spacing } from "../theme"
import { Text } from "./Text"

export interface HeaderStatsProps extends ViewProps {
  herpCount?: number
  reptileCount?: number
  amphibianCount?: number
}

export function HeaderStats(props: HeaderStatsProps) {
  return (
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
  )
}

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
