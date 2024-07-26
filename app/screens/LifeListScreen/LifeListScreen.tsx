import { AppStackScreenProps } from "app/navigators"
import React, { FC, useEffect, useRef, useState } from "react"
import { FlatList, ImageStyle, View, ViewStyle } from "react-native"

import { Button, Header, Icon, LifeListCard, Screen, TextField } from "../../components"
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
          const {
            genus,
            kingdom,
            phylum,
            threat_statuses,
            vernacular_names,
            notes,
            title,
            scientificName,
            imageURL,
          } = doc.data()
          newLifeList.push({
            genus,
            kingdom,
            phylum,
            threat_statuses,
            vernacular_names,
            notes,
            scientificName,
            title,
            imageURL,
            id: doc.id,
          })
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
            LeftAccessory={() => <Icon icon="add" color={colors.tint} />}
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
        renderItem={({ item }) => (
          <LifeListCard
            onPress={() =>
              navigation.navigate("SpeciesDetail", {
                id: item.id,
                title: item.vernacular_names[0] || item.title,
                scientificName: item.scientificName,
                imageURL: item.imageURL,
                notes: item.notes,
                vernacular_names: item.vernacular_names,
                threat_statuses: item.threat_statuses,
                kingdom: item.kingdom,
                phylum: item.phylum,
                genus: item.genus,
              })
            }
            title={item.title}
            subtitle={item.scientificName}
            imageURL={item.imageURL}
          />
        )}
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

const $headerSearchIcon: ImageStyle = {
  width: 20,
  height: 20,
  marginLeft: spacing.sm,
}

const $headerFilterIcon: ViewStyle = {
  width: 24,
  height: 24,
  marginRight: spacing.sm,
}
