import { colors, spacing } from "app/theme"
import React, { useEffect, useState } from "react"
import { Dimensions, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"

import { firebase } from "../firebase/firebaseConfig.js" // Ensure this path is correct
import { Icon } from "./Icon"
import { LifeListCard } from "./LifeListCard"
import { Text } from "./Text"

export function LifeListCategories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("categories")
      .onSnapshot((snapshot) => {
        const categoriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setCategories(categoriesData)
      })

    return () => unsubscribe() // Clean up the subscription on unmount
  }, [])

  return (
    <ScrollView horizontal style={$slider}>
      {categories.map((category) => (
        <LifeListCard key={category.id} title={category.title} count={category.count} />
      ))}
      <Pressable style={({ pressed }) => [$searchCard, pressed && $searchCardPressed]}>
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

const $searchCardPressed: ViewStyle = {
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
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
