import App from "./app/app.tsx"
import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

AppRegistry.registerComponent("FieldHerper", () => IgniteApp)
export default App
