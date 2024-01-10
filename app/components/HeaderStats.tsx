import React from "react"
import { ViewProps } from "react-native"

import { Text } from "./Text"

export interface HeaderStatsProps extends ViewProps {
  herpCount?: number
  reptileCount?: number
  amphibianCount?: number
}

export function HeaderStats(props: HeaderStatsProps) {
  return <Text>stats go here</Text>
}
