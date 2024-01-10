import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { FlatList, Image, View, ViewStyle } from "react-native"

import { Button, Header, Icon, LifeListCard, Screen, Text, TextField } from "../../components"
import { firebase } from "../../firebase/firebaseConfig.js"
import { colors, spacing, typography } from "../../theme"

const placeholderImage = require("../../../assets/images/placeholder.png")
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
      <View style={$headerSearch}>
        <TextField
          placeholder="Name, Species..."
          LeftAccessory={() => (
            <Icon icon="search" color={colors.palette.neutral500} style={$headerSearchIcon} />
          )}
          RightAccessory={() => (
            <Icon icon="tune" color={colors.palette.neutral500} style={$headerFilterIcon} />
          )}
          inputWrapperStyle={{ alignItems: "center" }}
        />
      </View>

      <FlatList
        data={lifelist}
        renderItem={({ item }) => <LifeListCard title={item.title} subtitle="Scientific name" />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          padding: spacing.md,
          justifyContent: "space-between",
        }}
        columnWrapperStyle={{ gap: spacing.md }}
        ItemSeparatorComponent={() => <View style={{ width: 16, height: 16 }} />}
      />
    </Screen>
  )
}

const $headerSearch: ViewStyle = {
  backgroundColor: colors.palette.neutral800,
  paddingHorizontal: spacing.md,
  paddingBottom: spacing.md,
}

const $headerSearchIcon: ViewStyle = {
  width: 20,
  height: 20,
  marginLeft: spacing.sm,
}

const $headerFilterIcon: ViewStyle = {
  width: 24,
  height: 24,
  marginRight: spacing.sm,
}
