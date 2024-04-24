import React, { FC } from "react"
import { View, Text, Image, ScrollView, StyleSheet } from "react-native"
import { Button, Header, Screen } from "../../components"
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

  return (
    <Screen preset="scroll" statusBarStyle="dark">
      <Header title={title} />
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

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: spacing.md,
    color: colors.palette.neutral700,
  },
  notes: {
    fontSize: 16,
    marginTop: spacing.sm,
    color: colors.palette.neutral600,
  },
})
