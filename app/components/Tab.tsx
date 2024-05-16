import React from "react"
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native"

import { colors, spacing } from "../theme"
import { Text, TextProps } from "./Text"

export interface TabProps extends PressableProps {
  tx?: TextProps["tx"]
  text?: TextProps["text"]
  isActive?: boolean
  onPress?: () => void
}

export function Tab(props: TabProps) {
  const { tx, text, isActive, onPress } = props
  return (
    <Pressable style={({ pressed }) => [$tab, pressed && $tabPressed, isActive && $tabActive]}>
      <Text tx={tx} text={text} style={[$tabText, isActive && $tabTextActive]} size="sm" />
    </Pressable>
  )
}

const $tab: ViewStyle = {
  paddingBottom: spacing.xs,
  borderBottomWidth: 3,
  borderBottomColor: "transparent",
}
const $tabActive: ViewStyle = {
  borderBottomColor: colors.palette.primary500,
}
const $tabPressed: ViewStyle = {
  borderBottomColor: colors.palette.neutral300,
}

const $tabText: TextStyle = {
  fontWeight: "500",
  letterSpacing: -0.22,
  color: colors.palette.neutral600,
}
const $tabTextActive: TextStyle = {
  color: colors.palette.neutral900,
}
