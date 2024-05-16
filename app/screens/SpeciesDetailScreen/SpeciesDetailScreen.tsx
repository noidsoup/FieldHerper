import React, { FC, useState } from "react"
import { Image, ImageStyle, Pressable, ScrollView, TextStyle, View, ViewStyle } from "react-native"

import { Header, Icon, Screen, Tab, Text } from "../../components"
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
    setActiveTab(tab)
  }

  return (
    <Screen preset="scroll">
      <Header title={title} />
      <View style={$tabWrapper}>
        <Tab
          text="Details"
          isActive={activeTab === "Details"}
          onPress={() => handleTabPress("Details")}
        />
        <Tab
          text="Range"
          isActive={activeTab === "Range"}
          onPress={() => handleTabPress("Range")}
        />
        <Tab
          text="Similar"
          isActive={activeTab === "Similar"}
          onPress={() => handleTabPress("Similar")}
        />
        <Tab
          text="Notes"
          isActive={activeTab === "Notes"}
          onPress={() => handleTabPress("Notes")}
        />
      </View>
      {activeTab === "Details" && (
        <ScrollView contentContainerStyle={$container}>
          <Image source={{ uri: imageURL }} style={$image} />
          <View style={[$detailSection, $titleSection]}>
            <View>
              <Text style={$title} size="lg">
                {title}
              </Text>
              <Text style={$subtitle} size="sm">
                {scientificName}
              </Text>
            </View>
            <Pressable onPress={() => console.log("Add to lifelist")}>
              <Icon icon="addCircle" size={24} />
            </Pressable>
          </View>
          {/* <Text style={styles.title}>scientificName: {scientificName}</Text>
          <Text style={styles.title}>phylum: {phylum}</Text>
          <Text style={styles.title}>genus: {genus}</Text>
          <Text style={styles.title}>kingdom: {kingdom}</Text>
          <Text style={styles.notes}>notes: {notes}</Text> */}
        </ScrollView>
      )}
      {activeTab === "Range" && (
        <View style={$container}>
          <Text>Range</Text>
        </View>
      )}
      {activeTab === "Similar" && (
        <ScrollView contentContainerStyle={$container}>
          <Text>Similar</Text>
        </ScrollView>
      )}
      {activeTab === "Notes" && (
        <ScrollView contentContainerStyle={$container}>
          <Text>Notes</Text>
        </ScrollView>
      )}
    </Screen>
  )
}

const $tabWrapper: ViewStyle = {
  backgroundColor: colors.palette.neutral200,
  flexDirection: "row",
  justifyContent: "center",
  columnGap: spacing.xl,
  padding: spacing.sm,
  paddingBottom: 0,
}

const $container: ViewStyle = {
  padding: spacing.md,
}

const $image: ImageStyle = {
  width: "100%",
  height: 200,
  resizeMode: "cover",
  borderRadius: spacing.sm,
}

const $detailSection: ViewStyle = {
  paddingVertical: spacing.md,
}

const $titleSection: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  columnGap: spacing.md,
}

const $title: TextStyle = {
  fontWeight: "500",
}

const $subtitle: TextStyle = {
  color: colors.palette.neutral600,
  lineHeight: 18,
}
