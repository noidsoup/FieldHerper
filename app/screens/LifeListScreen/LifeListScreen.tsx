import React, { FC, useEffect, useRef, useState } from "react"
import {
  Button,
  FlatList,
  ViewStyle,
} from "react-native"
import { Screen, Text } from "../../components"
import { firebase } from '../../firebase/firebaseConfig.js'
import { AppStackScreenProps } from "app/navigators"
import { spacing } from "../../theme"

interface LifeListScreenProps extends AppStackScreenProps<"LifeList"> { }

export const LifeListScreen: FC<LifeListScreenProps> =
  function LifeListcreen(_props) {
    const timeout = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
      return () => timeout.current && clearTimeout(timeout.current)
    }, [])

    const { navigation } = _props

    const [lifelist, setLifeList] = useState([]);

    useEffect(() => {
      firebase.firestore()
        .collection("collection")
        .onSnapshot((snapshot) => {
          const newLifeList = [];
          snapshot.forEach((doc) => {
            const { notes, title } = doc.data();
            newLifeList.push({notes, title, id: doc.id});
          });
  
          setLifeList(newLifeList);
        });
  
    }, []);

    return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$container}>
      <Button title="+ Add" onPress={() => navigation.navigate('AddItems')} />

      <FlatList
        data={lifelist}
        renderItem={({ item }) => <Text>{item.title }</Text>}
        keyExtractor={item => item.id}
        />
        
    </Screen>
    )
  }

  const $container: ViewStyle = {
    paddingTop: spacing.lg + spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    height: '100%',
  }
  