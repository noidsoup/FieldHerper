import React from "react"
import { AppRegistry } from "react-native"
import RNBootSplash from "react-native-bootsplash"

import App from "./app/app.tsx"

function IgniteApp() {
  // This causes an error:
  // "Cannot read property 'hide' of null"
  // return <App hideSplashScreen={RNBootSplash.hide} />
  return <App />
}

AppRegistry.registerComponent("main", () => IgniteApp)
export default App
