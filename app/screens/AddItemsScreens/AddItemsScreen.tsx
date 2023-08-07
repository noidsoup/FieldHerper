import React, { FC, useState } from "react"
import {
  Button,
  ViewStyle,
  TextInput,
  TouchableOpacity
} from "react-native"
import { Screen, Text } from "../../components"
import { AppStackScreenProps } from "app/navigators"
import { firebase } from '../../firebase/firebaseConfig.js'
import { spacing } from "../../theme"

interface AddItemsScreenProps extends AppStackScreenProps<"AddItems"> { }

export const AddItemsScreen: FC<AddItemsScreenProps> =
  function AddItemsScreen(_props) {
    const { navigation } = _props

    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');

    const handleSave = () => {
      if (title.length === 0 || notes.length === 0) {
        alert("Please fill out both fields");
        return;
      }
      firebase.firestore()
        .collection("collection")
        .add({ title, notes })
        .then(() => {
          setTitle('');
          setNotes('');
          navigation.navigate('LifeList');
        })
        .catch((error) => {alert(error)});
    }

    return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Button title="Cancel" onPress={() => navigation.navigate('LifeList')} />
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={(text) => setNotes(text)}
      />
      <TouchableOpacity onPress={handleSave}><Text>Save</Text></TouchableOpacity>
    </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}