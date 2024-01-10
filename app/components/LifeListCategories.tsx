import { spacing } from "app/theme"
import React, { useLayoutEffect, useState } from "react"
import { ScrollView, ViewStyle } from "react-native"

import { LifeListCard } from "./LifeListCard"
import { Text } from "./Text"

export function LifeListCategories() {
  return (
    <ScrollView horizontal style={$slider}>
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
      <LifeListCard title="Snakes" count={36} />
    </ScrollView>
  )
}

const $slider: ViewStyle = {
  paddingHorizontal: spacing.md,
  gap: spacing.md,
  paddingBottom: spacing.lg,
}
