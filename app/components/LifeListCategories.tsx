import { colors, spacing } from "app/theme"
import React from "react"
import { Dimensions, Pressable, ScrollView, View, ViewStyle } from "react-native"

import { Icon } from "./Icon"
import { LifeListCard } from "./LifeListCard"
import { Text } from "./Text"

export function LifeListCategories() {
  return (
    <ScrollView horizontal style={$slider}>
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <LifeListCard title="Category" count={36} />
      <Pressable style={$searchCard}>
        {({ pressed }) => (
          <>
            <View style={$searchIcon}>
              <Icon
                icon="search"
                color={pressed ? colors.palette.primary500 : colors.palette.neutral500}
              />
            </View>
            <Text text="All herps in Arizona" size="sm" style={$searchText} />
          </>
        )}
      </Pressable>
    </ScrollView>
  )
}

const width = Dimensions.get("window").width

const $slider: ViewStyle = {
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.lg,
}

const $searchCard: ViewStyle = {
  width: 158,
  borderRadius: spacing.sm,
  backgroundColor: colors.palette.neutral100,
  shadowColor: colors.palette.neutral900,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
  elevation: 5,
  minHeight: 152,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: spacing.xl + spacing.xxs,
  padding: spacing.md,
}

const $searchIcon: ViewStyle = {
  width: 48,
  height: 48,
  borderRadius: 48,
  backgroundColor: colors.palette.neutral200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: spacing.xs,
}

const $searchText: TextStyle = {
  color: colors.palette.neutral600,
  textAlign: "center",
}
