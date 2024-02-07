import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

import App from "./app/app.tsx"

function IgniteApp() {
  return <App hideSplashScreen={RNBootSplash.hide} />
}

AppRegistry.registerComponent("main", () => IgniteApp)
export default App
