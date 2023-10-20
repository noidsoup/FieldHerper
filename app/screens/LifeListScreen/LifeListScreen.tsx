import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { Button, FlatList, View, ViewStyle } from "react-native"

import { Header, Screen, Text } from "../../components"
import { firebase } from "../../firebase/firebaseConfig.js"
import { colors, spacing } from "../../theme"

interface LifeListScreenProps extends AppStackScreenProps<"LifeList"> {}

export const LifeListScreen: FC<LifeListScreenProps> = function LifeListcreen(_props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => timeout.current && clearTimeout(timeout.current)
  }, [])

  const { navigation } = _props

  const [lifelist, setLifeList] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection("collection")
      .onSnapshot((snapshot) => {
        const newLifeList = []
        snapshot.forEach((doc) => {
          const { notes, title } = doc.data()
          newLifeList.push({ notes, title, id: doc.id })
        })

        setLifeList(newLifeList)
      })
  }, [])

  return (
    <>
      <Header
        title="HerpTracker"
        rightIcon="settings"
        leftText="Adam"
        rightIconColor={colors.palette.neutral900}
        backgroundColor={colors.palette.neutral100}
      />
      <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <View>
          <Text>Counter goes here</Text>
        </View>

        <Button title="+ Add" onPress={() => navigation.navigate("AddItems")} />

        <FlatList
          data={lifelist}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </Screen>
    </>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
  height: "100%",
}
