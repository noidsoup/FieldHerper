import { colors, spacing } from "app/theme"
import React from "react"
import { Image, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"

import { Icon } from "./Icon"
import { LifeListCard } from "./LifeListCard"
import { Text } from "./Text"

export function LifeListCategories() {
  const caecilianImage = (
    <Image source={require("../../assets/images/lifelist-caecilians.webp")} style={$image} />
  )
  const crocodilianImage = (
    <Image source={require("../../assets/images/lifelist-crocodilians.webp")} style={$image} />
  )
  const frogImage = (
    <Image source={require("../../assets/images/lifelist-frogs.webp")} style={$image} />
  )
  const lizardImage = (
    <Image source={require("../../assets/images/lifelist-lizards.webp")} style={$image} />
  )
  const salamanderImage = (
    <Image source={require("../../assets/images/lifelist-salamanders.webp")} style={$image} />
  )
  const snakeImage = (
    <Image source={require("../../assets/images/lifelist-snakes.webp")} style={$image} />
  )
  const tuataraImage = (
    <Image source={require("../../assets/images/lifelist-tuataras.webp")} style={$image} />
  )
  const turtleImage = (
    <Image source={require("../../assets/images/lifelist-turtles.webp")} style={$image} />
  )

  const categories = [
    { id: 1, title: "Snakes", count: 36, image: snakeImage },
    { id: 2, title: "Lizards", count: 23, image: lizardImage },
    { id: 3, title: "Frogs", count: 7, image: frogImage },
    { id: 4, title: "Turtles", count: 5, image: turtleImage },
    { id: 5, title: "Salamanders", count: 2, image: salamanderImage },
    { id: 6, title: "Crocodilians", count: 1, image: crocodilianImage },
    { id: 7, title: "Caecilians", count: 0, image: caecilianImage },
    { id: 8, title: "Tuataras", count: 0, image: tuataraImage },
  ]

  // The categories on the homepage should probably be manually set
  // so that we can control the labels and images
  // But we will probably need this stuff elsewhere

  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   const unsubscribe = firebase
  //     .firestore()
  //     .collection("categories")
  //     .onSnapshot((snapshot) => {
  //       const categoriesData = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }))
  //       setCategories(categoriesData)
  //     })

  //   return () => unsubscribe() // Clean up the subscription on unmount
  // }, [])

  return (
    <ScrollView horizontal style={$slider}>
      {categories.map((category) => (
        <>
          <LifeListCard
            key={category.id}
            title={category.title}
            count={category.count}
            image={category.image}
          />
          <View style={$spacer} />
        </>
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

const $spacer: ViewStyle = {
  width: spacing.md,
}

const $image: ImageStyle = {
  width: "100%",
  height: 120,
  borderTopLeftRadius: spacing.sm,
  borderTopRightRadius: spacing.sm,
}
