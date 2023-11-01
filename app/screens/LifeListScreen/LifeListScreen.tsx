import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { FlatList, View, ViewStyle } from "react-native"

import { Button, Header, Icon, Screen, Text, TextField } from "../../components"
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
    <Screen preset="fixed" statusBarStyle="dark">
      <Header
        title="My Life List"
        RightActionComponent={
          <Button
            text=" Add"
            preset="text"
            textStyle={[{ color: colors.tint }]}
            pressedStyle={[{ opacity: 0.75 }]}
            LeftAccessory={(props) => <Icon icon="add" color={colors.tint} />}
          />
        }
      />
      <View style={[$headerSearch]}>
        <TextField
          placeholder="Name, Species..."
          LeftAccessory={() => <Icon icon="search" />}
          RightAccessory={() => <Icon icon="tune" />}
          inputWrapperStyle={{ alignItems: "center" }}
        />
      </View>

      <FlatList
        data={lifelist}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
  height: "100%",
}

const $headerSearch: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.md,
}
