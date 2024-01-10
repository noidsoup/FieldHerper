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
        <Text preset="subheading" style={$statHeading}>
          All herps
        </Text>
        <Text preset="heading" size="xl" style={$statValue}>
          {props.herpCount ?? 0}
        </Text>
      </View>
      <View style={[$stat, $statMiddle]}>
        <Text preset="subheading" style={$statHeading}>
          Reptiles
        </Text>
        <Text preset="heading" size="xl" style={$statValue}>
          {props.reptileCount ?? 0}
        </Text>
      </View>
      <View style={$stat}>
        <Text preset="subheading" style={$statHeading}>
          Amphibians
        </Text>
        <Text preset="heading" size="xl" style={$statValue}>
          {props.amphibianCount ?? 0}
        </Text>
      </View>
    </View>
  )
}

const $headerStats: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  flexDirection: "row",
  justifyContent: "space-around",
  paddingTop: spacing.lg,
  paddingBottom: spacing.md,
  marginTop: -1 * spacing.lg,
}

const $stat: ViewStyle = {
  alignItems: "center",
  flex: 1,
}

const $statMiddle: ViewStyle = {
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderLeftColor: "rgba(255,255,255, .25)",
  borderRightColor: "rgba(255,255,255, .25)",
}

const $statHeading: TextStyle = {
  color: colors.palette.neutral500,
}

const $statValue: TextStyle = {
  color: colors.palette.neutral100,
}
