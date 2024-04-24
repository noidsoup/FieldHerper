/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screens from "app/screens"
import { colors, spacing, typography } from "app/theme"
import { observer } from "mobx-react-lite"
import React from "react"
import { TextStyle, ViewStyle, useColorScheme } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Icon } from "../components"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Home: undefined
  Welcome: undefined
  Login: undefined // @demo remove-current-line
  LifeList: undefined
  AddItems: undefined
  FieldGuide: undefined
  Account: undefined
  // 🔥 Your screens go here
  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>
const LifeListStack = createNativeStackNavigator()

function LifeListStackScreen() {
  return (
    <LifeListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LifeListStack.Screen name="LifeListMain" component={Screens.LifeListScreen} />
      <LifeListStack.Screen name="SpeciesDetail" component={Screens.SpeciesDetailScreen} />
      <LifeListStack.Screen name="AddItems" component={Screens.AddItemsScreen} />
    </LifeListStack.Navigator>
  )
}

const Tab = createBottomTabNavigator<AppStackParamList>()

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()
  const { bottom } = useSafeAreaInsets()
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: [$tabBar, { height: bottom + 70 }],
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.text,
          tabBarLabelStyle: $tabBarLabel,
          tabBarItemStyle: $tabBarItem,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Screens.HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => (
              <Icon
                icon={focused ? "homeFilled" : "home"}
                color={focused && colors.tint}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="LifeList"
          component={LifeListStackScreen}
          options={{
            tabBarLabel: "Life List",
            tabBarIcon: ({ focused }) => (
              <Icon
                icon={focused ? "addCheckFilled" : "addCheck"}
                color={focused && colors.tint}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="FieldGuide"
          component={Screens.FieldGuideScreen}
          options={{
            tabBarLabel: "Field Guide",
            tabBarIcon: ({ focused }) => (
              <Icon
                icon={focused ? "bookFilled" : "book"}
                color={focused && colors.tint}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Screens.AccountScreen}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ focused }) => (
              <Icon
                icon={focused ? "accountFilled" : "account"}
                color={focused && colors.tint}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
})

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.palette.neutral300,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
