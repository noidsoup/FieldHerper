import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  account: require("../../assets/icons/account.png"),
  accountFilled: require("../../assets/icons/accountFilled.png"),
  add: require("../../assets/icons/add.png"),
  addCircle: require("../../assets/icons/addCircle.png"),
  camera: require("../../assets/icons/camera.png"),
  cameraFilled: require("../../assets/icons/cameraFilled.png"),
  cancelFilled: require("../../assets/icons/cancelFilled.png"),
  caretDown: require("../../assets/icons/caretDown.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  caretUp: require("../../assets/icons/caretUp.png"),
  check: require("../../assets/icons/check.png"),
  checkBox: require("../../assets/icons/checkBox.png"),
  checkBoxFilled: require("../../assets/icons/checkBoxFilled.png"),
  checkBoxOutline: require("../../assets/icons/checkBoxOutline.png"),
  checkCircleFilled: require("../../assets/icons/checkCircleFilled.png"),
  chevronDown: require("../../assets/icons/chevronDown.png"),
  chevronLeft: require("../../assets/icons/chevronLeft.png"),
  chevronRight: require("../../assets/icons/chevronRight.png"),
  chevronUp: require("../../assets/icons/chevronUp.png"),
  close: require("../../assets/icons/close.png"),
  delete: require("../../assets/icons/delete.png"),
  editSquare: require("../../assets/icons/editSquare.png"),
  email: require("../../assets/icons/email.png"),
  error: require("../../assets/icons/error.png"),
  explorer: require("../../assets/icons/explorer.png"),
  fieldGuide: require("../../assets/icons/fieldGuide.png"),
  fieldGuideFilled: require("../../assets/icons/fieldGuideFilled.png"),
  fieldNotes: require("../../assets/icons/fieldNotes.png"),
  fieldNotesFilled: require("../../assets/icons/fieldNotesFilled.png"),
  fileDownload: require("../../assets/icons/fileDownload.png"),
  filter: require("../../assets/icons/filter.png"),
  filterFocus: require("../../assets/icons/filterFocus.png"),
  frameInspect: require("../../assets/icons/frameInspect.png"),
  gear: require("../../assets/icons/gear.png"),
  gearFilled: require("../../assets/icons/gearFilled.png"),
  home: require("../../assets/icons/home.png"),
  homeFilled: require("../../assets/icons/homeFill.png"),
  infoOutline: require("../../assets/icons/infoOutline.png"),
  lifeList: require("../../assets/icons/lifeList.png"),
  lifeListFilled: require("../../assets/icons/lifeListFilled.png"),
  list: require("../../assets/icons/list.png"),
  loadingClock: require("../../assets/icons/loadingClock.png"),
  loadingSpinner: require("../../assets/icons/loadingSpinner.png"),
  location: require("../../assets/icons/location.png"),
  lock: require("../../assets/icons/lock.png"),
  map: require("../../assets/icons/map.png"),
  mapFilled: require("../../assets/icons/mapFilled.png"),
  more: require("../../assets/icons/more.png"),
  myLocation: require("../../assets/icons/myLocation.png"),
  newWindow: require("../../assets/icons/newWindow.png"),
  pin: require("../../assets/icons/pin.png"),
  pinDrop: require("../../assets/icons/pinDrop.png"),
  pinFilled: require("../../assets/icons/pinFilled.png"),
  radioUnchecked: require("../../assets/icons/radioUnchecked.png"),
  remove: require("../../assets/icons/remove.png"),
  search: require("../../assets/icons/Search.png"),
  tune: require("../../assets/icons/Tune.png"),
  visibility: require("../../assets/icons/visibility.png"),
  visibilityOff: require("../../assets/icons/visibilityOff.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
