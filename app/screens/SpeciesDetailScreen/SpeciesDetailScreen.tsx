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
  const [inLifeList, setInLifeList] = useState(false)

  // Function to handle tab press
  const handleTabPress = (tab: string) => {
    setActiveTab(tab)
  }

  // Function to handle add to lifelist
  const handleAddToLifeList = () => {
    setInLifeList(!inLifeList)
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
              <Text style={$subtitle} size="xs">
                {scientificName}
              </Text>
            </View>
            <Pressable onPress={handleAddToLifeList}>
              {({ pressed }) => (
                <>
                  {inLifeList ? (
                    <Icon
                      icon="checkCircleFilled"
                      size={32}
                      color={pressed ? colors.palette.neutral600 : colors.palette.primary500}
                    />
                  ) : (
                    <Icon
                      icon="addCircle"
                      size={32}
                      color={pressed ? colors.palette.neutral600 : colors.palette.neutral500}
                    />
                  )}
                </>
              )}
            </Pressable>
          </View>
          <View style={$divider} />
          <View style={$detailSection}>
            <Text>
              <Text size="xs" style={$detailSource}>
                Sources:{" "}
              </Text>
              <Text size="xs" style={$detailSourceLink}>
                GBIF
              </Text>
              <Icon
                icon="newWindow"
                size={12}
                color={colors.palette.primary500}
                style={$detailSourceLinkIcon}
              />
              <Text size="xs" style={$detailSource}>
                {" "}
                and{" "}
              </Text>
              <Text size="xs" style={$detailSourceLink}>
                Wikipedia
              </Text>
              <Icon
                icon="newWindow"
                size={12}
                color={colors.palette.primary500}
                style={$detailSourceLinkIcon}
              />
            </Text>
          </View>
          <View style={$divider} />
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
          <Text>{notes}</Text>
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

const $divider: ViewStyle = {
  width: "100%",
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral300,
}

const $detailSource: TextStyle = {
  color: colors.palette.neutral500,
}

const $detailSourceLink: TextStyle = {
  color: colors.palette.primary500,
}

const $detailSourceLinkIcon: ImageStyle = {
  marginBottom: 1,
  marginLeft: 2,
}
