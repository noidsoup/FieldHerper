import React, { FC, useState } from "react"
import { Image, Pressable, ScrollView, StyleSheet, TextStyle, View, ViewStyle } from "react-native"

import { Header, Screen, Tab, Text } from "../../components"
import { colors, spacing } from "../../theme"

interface SpeciesDetailScreenProps {
  route: {
    params: {
      id: string
      title: string
      scientificName: string
      imageURL: string
      notes: string
      vernacular_names: any[]
      threat_statuses: any[]
      kingdom: string
      phylum: string
      genus: string
    }
  }
}

export const SpeciesDetailScreen: FC<SpeciesDetailScreenProps> = ({ route }) => {
  const { title, scientificName, imageURL, phylum, genus, kingdom, notes } = route.params
  const [activeTab, setActiveTab] = useState("Details")

  // Function to handle tab press
  const handleTabPress = (tab: string) => () => {
    console.log("tab", tab)
    setActiveTab(tab)
  }

  return (
    <Screen preset="scroll">
      <Header title={title} />
      <View style={$tabWrapper}>
        <Tab
          text="Details"
          isActive={activeTab === "Details"}
          onPress={handleTabPress("Details")}
        />
        <Tab text="Range" isActive={activeTab === "Range"} onPress={handleTabPress("Range")} />
        <Tab
          text="Similar"
          isActive={activeTab === "Similar"}
          onPress={handleTabPress("Similar")}
        />
        <Tab text="Notes" isActive={activeTab === "Notes"} onPress={handleTabPress("Notes")} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <Text style={styles.title}>scientificName: {scientificName}</Text>
        <Text style={styles.title}>phylum: {phylum}</Text>
        <Text style={styles.title}>genus: {genus}</Text>
        <Text style={styles.title}>kingdom: {kingdom}</Text>
        <Text style={styles.notes}>notes: {notes}</Text>
      </ScrollView>
    </Screen>
  )
}

const $tabWrapper: ViewStyle = {
  backgroundColor: colors.palette.neutral200,
  flexDirection: "row",
  justifyContent: "center",
  columnGap: spacing.lg,
  padding: spacing.sm,
  paddingBottom: 0,
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

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: spacing.sm,
  },
  title: {
    color: colors.palette.neutral700,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: spacing.md,
  },
  notes: {
    color: colors.palette.neutral600,
    fontSize: 16,
    marginTop: spacing.sm,
  },
})
